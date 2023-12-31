import React, {useState} from 'react';
import {FlatList, Image, Platform, Pressable, View} from 'react-native';
import Heading from '../../Components/ReusableComponent/Heading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export const Trips = () => {
  const data = [
    {imgUrl: require('../../Assets/Images/EAA/ImageTripsCard.png'), id: 1},
    {imgUrl: require('../../Assets/Images/EAA/Events.png'), id: 2},
    {imgUrl: require('../../Assets/Images/EAA/Group57201.png'), id: 3},
  ];

  const renderItem = (item, index) => {
    console.log(item.index);
    return (
      <>
        <Pressable
          onPress={() => {
            Navigation.navigate('EventsDetail');
          }}>
          {/* First Card */}
          <View style={{marginHorizontal: 15}}>
            <View
              style={{
                backgroundColor: 'white',
                //   marginTop: -15,
              }}>
              {/* <View
                style={{
                  width: '100%', // Adjust the width of the line as needed
                  height: 1, // Adjust the height of the line as needed
                  backgroundColor: '#E3E5E5', // Set the color with low opacity
                  marginTop: 20, // Adjust the vertical margin as needed
                }}
              /> */}
              
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  // marginTop: -20,/
                }}>
                <Image
                  source={
                    item.index == 0
                      ? require('../../Assets/Images/EAA/ImageTripsCard.png')
                      : item.index == 2
                      ? require('../../Assets/Images/EAA/Events.png')
                      : require('../../Assets/Images/EAA/Group57201.png')
                  }
                  style={{width: 355, height: 261}}
                  resizeMode="contain"
                />
              </View>

              <View
                style={{
                  width: '90%',
                  marginLeft: 5,
                  paddingBottom: 20,
                  marginTop: -20,
                }}>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={700}
                  Fontsize={16}
                  Heading={
                    'We have our January 2024 Costa Rica Trip and our Vietnam & Cambodia trip in February and so much more!'
                  }
                  color={'black'}
                  // ls={-0.446}
                  lh={24}
                />
              </View>
              <View
                style={{
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../Assets/Images/EAA/Ellipse75.png')}
                  />
                  {/* <Text color={'#707070'}>{'   '}Event Advisor . 4 d</Text> */}
                  <Heading
                  Stylefont={'normal'}
                  Fontweight={500}
                  Fontsize={12}
                  Heading={
                    'Event Advisor . 4 d'
                  }
                  color={'#707070'}
                  ls={-0.446}
                  lh={20}
                  ml={6}
                  mt={-2}
                />
                </View>
                <View>
                  <Image
                    source={require('../../Assets/Images/EAA/Right-Actionable–Icon.png')}
                  />
                </View>
              </View>
            </View>
            <View style={{borderColor: 'rgba(246, 246, 246, 1)', width: '96%', height: 1, borderWidth: 1, marginTop: 15, marginBottom: 0, marginRight: 'auto',
              marginLeft: 'auto',}}></View>
          </View>
        </Pressable>
      </>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 0,
            marginTop: Platform.OS == 'ios' ? 70 : 20,
            justifyContent: 'space-between',
            marginHorizontal: 15,
            // backgroundColor: 'pink',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              // Navigation.goBack();
              Navigation.navigate('Drawer');
            }}>
            <View
              style={{
                // backgroundColor: '#E9978D',
                padding: 8,
                borderRadius: 12,
                // borderWidth: 2,
                // borderColor: 'white',
              }}>
              <View>
                <Image source={require('../../Assets/Images/EAA/menu.png')} />
              </View>
            </View>
          </Pressable>

          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'bold'}
              Fontsize={20}
              txtAlign={'center'}
              p={10}
              lh={31}
              Heading={'Trips'}
              color={'#D43D1C'}
            />
          </View>

          <Pressable
            onPress={() => {
              Navigation.navigate('Notifications');
            }}>
            <View
              style={{
                backgroundColor: '#FFFF',
                padding: 8,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'rgba(187, 187, 187, 0.5)',
              }}>
              <View>
                <Image
                  source={require('../../Assets/Images/EAA/notification.png')}
                  style={{width: 25, height: 25}}
                />
              </View>
            </View>
          </Pressable>
        </View>

        {/* Text Description */}
        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text
            style={{
              color: '#707070',
              fontSize: 14,
              lineHeight: 20,
              fontWeight: 500,
              textAlign: 'justify',
              letterSpacing: -0.446
            }}>
            Hi Suitch App Team (not an actual signup), we're glad you are here!
            Welcome to Events & Adventures. Head to your calendar to see what
            fun events we have coming up!
          </Text>
        </View>

        <View style={{borderColor: 'rgba(246, 246, 246, 1)', width: '88%', height: 0, borderWidth: 1, marginTop: 15, marginBottom: 0, marginRight: 'auto',
              marginLeft: 'auto',}}></View>
      </>
    );
  };
  const Navigation = useNavigation();

  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <FlatList
          data={data}
          ListHeaderComponent={ListHeaderComponent}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
          //   style={{paddingBottom:200}}
          // columnWrapperStyle={{}}
          contentContainerStyle={{paddingBottom: 30}}
        />
        <View style={{marginBottom: 10}}></View>
      </View>
    </>
  );
};
