import {StyleSheet, View, Image, useWindowDimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from 'react-native-reanimated';
import Pagination from '../Pagination';
import LinearGradient from 'react-native-linear-gradient';
// import Pagination from '../Pagination';

const ImageCarousal = ({data, autoPlay, pagination}) => {
  const scrollViewRef = useAnimatedRef(null);
  const interval = useRef();
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData] = useState([
    {key: 'spacer-left'},
    ...data,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.85;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({x: _offSet, y: 0});
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={e => {
          offSet.value = e.nativeEvent.contentOffset.x;
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        {newData.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.88, 1, 0.88],
            //   [0.88, 1, 0.9],
            );
            const opacity = interpolate(
                x.value,
                [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                [0.5, 1, 0.5],
              );
            //   const translateX = interpolate(
            //     x.value,
            //     [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
            //     [0, -SIZE * 0.2, 0], // Adjusted interpolation values for vertical translation
            //   );
            const distanceFromFocus = Math.abs(x.value - index * SIZE);
            const translateX = interpolate(
              distanceFromFocus,
              [0, SIZE * 2], // Adjust these values as needed
              [0, -SIZE * 0.2] // Adjusted interpolation values for vertical translation
            );

            const margin = interpolate(
                x.value,
                [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                [-40, 0, -45] // Adjust these values as needed
              );
            return {
              transform: [{scale}, 
                // { translateX }, 
            ],
              opacity,
              margin
            };
          });
          if (!item.image) {
            return <View style={{width: SPACER}} key={index} />;
          }
          return (
            <View style={{width: SIZE}} key={index}>
              <Animated.View style={[styles.imageContainer, style, {
                    // width:
                    //   index !== 1 && index !== newData.length - 2
                    //     ? '100%'
                    //     : '80%',
                    // borderRadius: 10, borderWidth: 2, borderColor: '#fff',
                    // borderWidth: 2, // Add border width as needed
                    // borderColor: 'black', // Add border color as needed
                  },]}>
              {index !== 1 && index !== newData.length - 2 ? (
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  />
                ) : null}
                <Image source={item.image} style={{width: '98%',
                borderRadius: 16,
                borderWidth: 10,
                borderColor: '#fff',
    height: undefined,
    aspectRatio: 16 / 9,
    }} />
                {/* <Image source={item.image} style={styles.image} /> */}
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

export default ImageCarousal;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center'
    // overflow: 'hidden',
    // backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    
    height: undefined,
    aspectRatio: 16 / 9,
  },
});