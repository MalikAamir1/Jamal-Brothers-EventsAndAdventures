import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Heading from '../ReusableComponent/Heading';
// import {Image} from 'react-native-svg';
import ButtonComp from '../ReusableComponent/Button';
import SafeArea from '../ReusableComponent/Safearea';
import { Loader } from '../ReusableComponent/Loader';
import Head from '../ReusableComponent/Head';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export const ChatScreen = props => {
  const data = [
    {
      id: 1,
      sentBy: 'mytext',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
    {
      id: 2,
      sentBy: 'user',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
    {
      id: 3,
      sentBy: 'mytext',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor exercitation.  sed do eiusmod tempor exercitation.',
    },
  ];

  const [messageText, setMessageText] = useState('');

  const renderItem = ({ item }) => {
    // const messageTime = new Date(item.sentAt).toLocaleTimeString([], {
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return (
      <>
        <View style={{ marginHorizontal: '1%', flex: 1 }}>
          {item.sentBy === 'user' ? (
            <View style={{ marginTop: 25 }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderColor: '#F6F6F6',
                  borderWidth: 1,
                  borderTopRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  padding: 10,
                }}>
                <Image
                  source={require('../../Assets/Images/EAA/chatprofile.png')}
                  style={{
                    // marginTop: -15,
                    // marginLeft: 10,
                    borderRadius: 20,
                  }}
                />

                <View>
                  <Heading
                    Heading={'William Roy'}
                    color={'#D4271C'}
                    Fontsize={16}
                    // txtAlign={'left'}
                    p={10}
                    lh={18}
                    // ml={-30}
                    mt={-5}
                    mb={8}
                    Fontweight={600}
                    ls={-0.446}
                  />
                  <Heading
                    Heading={item.message}
                    color={'#707070'}
                    Fontsize={12}
                    width={290}
                    // txtAlign={'left'}
                    p={10}
                    lh={16}
                    // ml={30}
                    mt={-20}
                    mb={8}
                    ls={-0.446}
                    Fontweight={500}
                  />
                  {/* </LinearGradient> */}
                </View>
              </View>
              <Heading
                Heading={'16 min. ago'}
                color={'#F18473'}
                Fontsize={12}
                txtAlign={'right'}
                ls={-0.24}
                Fontweight={500}
                lh={16}
                mt={17}
              // mr={74}
              />
            </View>
          ) : (
            <View style={{ marginTop: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: 340,
                  borderRadius: 16,
                  // marginRight: 20,
                }}>
                <View
                  style={{
                    backgroundColor: '#F18473',
                    flex: 1,
                    marginLeft: 40,
                    // width: 250,
                    alignItems: 'right',
                    borderRadius: 16,
                    // borderColor: 'white',
                    // borderWidth: 3,
                    borderColor:
                      Platform.OS === 'ios'
                        ? 'rgba(0, 0, 0, 0.1)'
                        : 'rgba(0, 0, 0, 0.12)',
                    // elevation: 12,
                  }}>
                  <Heading
                    Fontsize={12}
                    width={290}
                    txtAlign={'left'}
                    p={13}
                    // lh={18}
                    Heading={item.message}
                    color={'#FFFFFF'}
                    fontWeight={500}
                    lh={16}
                    ls={-0.446}
                  />
                </View>
              </View>
              <Heading
                Heading={'16 min. ago'}
                color={'black'}
                Fontsize={12}
                ml={41}
                mt={17}
                mb={0}
                fontWeight={500}
                ls={-0.446}
              />
            </View>
          )}
        </View>
      </>
    );
  };

  const ListHeaderComponent = () => {
    return (<>
      <View
        style={{
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          // marginBottom: 110,
        }}>
        <Heading
          Stylefont={'normal'}
          Fontweight={500}
          Fontsize={14}
          Heading={'Tuesday, 25 July 2023 - 9:34 pm'}
          color={'grey'}
          ls={-0.446}
          lh={20}
          txtAlign={'center'}
          mt={20}
        />
      </View>
    </>)
  }

  return (
    <>
      {/* <SafeArea> */}
      {/* <View
      style={{
        flexDirection: 'column',
        flex: 1,
        // paddingTop: '8%',
        backgroundColor: '#FFF',
        height: '100%'
      }}> */}
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            // backgroundColor:'pink',
            // marginBottom: -110,
          }}>

          {/* {props.aa? (<View style={{marginTop: 70}}></View>) : null} */}
          <View style={{ flex: 1 }}>
            <View
              style={{
                maxHeight: props.height ? '100%' : '87%',
                marginBottom: 30,
                // flex: 1,
                // marginHorizontal: 10,
                // height: '100%',
                marginTop: Platform.OS === 'ios' ? 40 : 0
              }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{ flexGrow: 1, minHeight: 200}}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeaderComponent}
              // inverted={true} // Set this to true to start the FlatList from the bottom

              />
            

            <View
              style={{
                // marginVertical: 10,
                // marginTop: 50,
                // position: 'relative',
                // top: 90,
                backgroundColor: 'rgba(228, 228, 228, 0.5)',
                // marginHorizontal: 10,
                padding: Platform.OS === 'ios' ? 15 : 5,
                paddingHorizontal: 15,
                // width: 100,
                borderRadius: 20,
                borderColor: 'rgba(187, 187, 187, 0.5)',
                borderWidth: 1,
                marginBottom: Platform.OS === 'ios' ? 30 : 20,
                marginTop: 10,
                // height: 45,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                // alignSelf: 'center',
              }}>
              <TextInput
                value={messageText}
                onChangeText={setMessageText}
                style={{
                  // backgroundColor: 'pink',
                  backgroundColor: 'transparent',

                  // flex: 1,
                  // height: 20,
                  width: '80%',
                  color: 'black',
                  fontSize: 16,
                  letterSpacing: -0.446,
                  // fontWeight: 500,
                }}
                placeholder={'Type your Message here...'}
                placeholderTextColor={'black'}
                editable={false}
                activeUnderlineColor={'transparent'}
                underlineColorAndroid={'transparent'}
                underlineColor={'transparent'}
              />
              <Image
                source={require('../../Assets/Images/EAA/sendmessage.png')}
                style={{
                  width: 23,
                  height: 20,
                  // marginRight: 1,
                  // marginTop: 2,
                }}
                resizeMode="cover"
              />
            </View>
            </View>
          </View>
        </View>
        {/* )} */}
        {/* </View> */}
      {/* </SafeArea> */}
    </>
  );
};
