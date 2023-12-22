import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Heading from '../../Components/ReusableComponent/Heading';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonComp from '../../Components/ReusableComponent/Button';
import { SignUpPageOfEventsDetail } from '../SignUpPageOfEventsDetail';
import { PhotosPageOfEventsDetail } from '../PhotosPageOfEventsDetail';
import { FeedBackPageOfEventsDetail } from '../FeedBackPageOfEventsDetail';
import { ChatScreen } from '../../Components/ChatScreen';
import { EventsDetailMain } from '../EventDetailsMain';
// import {ModalView} from '../../Components/ReusableComponent/Modal';

const EventsDetail = () => {
  const Navigation = useNavigation();

  const [showLocation, setShowLocation] = useState(true);
  const [showEventDetail, setShowEventDetail] = useState(true);
  const [showSignUpPageOfEventsDetail, setShowSignUpPageOfEventsDetail] =
    useState(false);

  const [showEventDetailMain, setShowEventDetailMain] =
    useState(true);

  const [showPhotosPageOfEventsDetail, setShowPhotosPageOfEventsDetail] =
    useState(false);

  const [showFeedBackPageOfEventsDetail, setShowFeedBackPageOfEventsDetail] =
    useState(false);

  const [showCarPoolPageOfEventsDetail, setShowCarPoolPageOfEventsDetail] =
    useState(false);

  const [modal, setModal] = useState(false);
  const [messageText, setMessageText] = useState('');

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

  const renderItem = ({ item }) => {
    // const messageTime = new Date(item.sentAt).toLocaleTimeString([], {
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return (
      <>
        <View style={{ marginHorizontal: 20, flex: 1, marginTop: 20 }}>
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
                  width: 350,
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
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        {/* Header */}

        <View
          style={{
            marginTop: Platform.OS == 'ios' ? 70 : 20,
            backgroundColor: 'white',
            marginHorizontal: 12,
            flex: 1,
            // marginBottom: 40,
          }}>
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 0,
              // marginTop: 70,
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // margin: Platform.OS === 'ios' ? '6%' : '6%',
                marginBottom: 0,
                alignSelf: 'center',
                // backgroundColor: 'rgba(233, 151, 141, 1)',
                width: 40,
                height: 40,
                borderColor: 'rgba(187, 187, 187, 0.5)',
                borderWidth: 1,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -3,
                marginLeft: 6,
              }}>
              <Pressable
                onPress={() => {
                  if (showSignUpPageOfEventsDetail) {
                    setShowSignUpPageOfEventsDetail(false);
                    setShowPhotosPageOfEventsDetail(false);
                    setShowFeedBackPageOfEventsDetail(false);
                    setShowCarPoolPageOfEventsDetail(false);
                    setShowEventDetailMain(true);
                  } else if (showPhotosPageOfEventsDetail) {
                    setShowSignUpPageOfEventsDetail(false);
                    setShowPhotosPageOfEventsDetail(false);
                    setShowFeedBackPageOfEventsDetail(false);
                    setShowCarPoolPageOfEventsDetail(true);
                    setShowEventDetailMain(false);
                  } else if (showEventDetailMain) {
                    Navigation.navigate('Home');
                  } else if (showFeedBackPageOfEventsDetail) {
                    setShowSignUpPageOfEventsDetail(false);
                    setShowPhotosPageOfEventsDetail(true);
                    setShowFeedBackPageOfEventsDetail(false);
                    setShowCarPoolPageOfEventsDetail(false);
                    setShowEventDetailMain(false);
                  } else {
                    setShowSignUpPageOfEventsDetail(true);
                    setShowPhotosPageOfEventsDetail(false);
                    setShowFeedBackPageOfEventsDetail(false);
                    setShowCarPoolPageOfEventsDetail(false);
                    setShowEventDetailMain(false);
                  }
                }}
              >
              <Ionicons
                name="chevron-back"
                size={24}
                color={'rgba(53, 53, 53, 1)'}
              />
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'bold'}
              Fontsize={20}
              txtAlign={'center'}
              p={10}
              lh={31}
              Heading={
                showSignUpPageOfEventsDetail ||
                  showPhotosPageOfEventsDetail ||
                  showFeedBackPageOfEventsDetail ||
                  showCarPoolPageOfEventsDetail
                  ? 'Suitch App Team'
                  : 'Event Details'
              }
              color={'#D43D1C'}
            />
            {showSignUpPageOfEventsDetail ||
              showPhotosPageOfEventsDetail ||
              showFeedBackPageOfEventsDetail ||
              showCarPoolPageOfEventsDetail ? (
              <Image
                source={require('../../Assets/Images/EAA/arrow-right.png')}
                style={{
                  width: 16,
                  height: 16,
                  position: 'relative',
                  right: 8,
                  bottom: 8,
                }}
              />
            ) : null}
          </View>

          {!(showSignUpPageOfEventsDetail ||
            showPhotosPageOfEventsDetail ||
            showFeedBackPageOfEventsDetail ||
            showCarPoolPageOfEventsDetail) ? (
            <Pressable
              onPress={() => {
                // Navigation.navigate('Notifications');
                setModal(!modal);
              }}>
              <View
                style={{
                  backgroundColor: '#FFFF',
                  padding: 8,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'rgba(187, 187, 187, 0.5)',
                  marginRight: 5
                }}>
                <View>
                  <Image
                    source={require('../../Assets/Images/EAA/share.png')}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
              </View>
            </Pressable>) : <Heading
            Stylefont={'normal'}
            Fontweight={'bold'}
            Fontsize={20}
            txtAlign={'center'}
            p={10}
            lh={31}
            Heading={''}
            color={'#D43D1C'}
          />}
        </View>

        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Pressable
              onPress={() => {
                Navigation.navigate('Home');
              }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'white',
                  padding: 11,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: '#BBB',
                  opacity: 5,
                  marginHorizontal: 5,
                }}>
                <Text style={{ color: 'black', fontWeight: '600', fontSize: 12, letterSpacing: -0.446 }}>
                  Calendar
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                setShowSignUpPageOfEventsDetail(true);
                setShowPhotosPageOfEventsDetail(false);
                setShowFeedBackPageOfEventsDetail(false);
                setShowCarPoolPageOfEventsDetail(false);
                setShowEventDetailMain(false);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: showSignUpPageOfEventsDetail
                    ? '#D43D1C'
                    : 'white',
                  padding: 11,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: '#BBB',
                  opacity: 5,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: showSignUpPageOfEventsDetail
                      ? '#FFFFFF'
                      : 'black',
                    fontWeight: '600', fontSize: 12, letterSpacing: -0.446
                  }}>
                  Sign Up
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                setShowCarPoolPageOfEventsDetail(true);
                setShowSignUpPageOfEventsDetail(false);
                setShowPhotosPageOfEventsDetail(false);
                setShowFeedBackPageOfEventsDetail(false);
                setShowEventDetailMain(false);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: showCarPoolPageOfEventsDetail
                    ? '#D43D1C'
                    : 'white',
                  padding: 11,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: '#BBB',
                  opacity: 5,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: showCarPoolPageOfEventsDetail
                      ? '#FFFFFF'
                      : 'black',
                    fontWeight: '600', fontSize: 12, letterSpacing: -0.446
                  }}>
                  Car Pool
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                setShowPhotosPageOfEventsDetail(true);
                setShowFeedBackPageOfEventsDetail(false);
                setShowSignUpPageOfEventsDetail(false);
                setShowCarPoolPageOfEventsDetail(false);
                setShowEventDetailMain(false);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: showPhotosPageOfEventsDetail
                    ? '#D43D1C'
                    : 'white',
                  padding: 11,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: '#BBB',
                  opacity: 5,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: showPhotosPageOfEventsDetail
                      ? '#FFFFFF'
                      : 'black',
                    fontWeight: '600', fontSize: 12, letterSpacing: -0.446
                  }}>
                  Photos
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() => {
                setShowFeedBackPageOfEventsDetail(true);
                setShowPhotosPageOfEventsDetail(false);
                setShowSignUpPageOfEventsDetail(false);
                setShowCarPoolPageOfEventsDetail(false);
                setShowEventDetailMain(false);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: showFeedBackPageOfEventsDetail
                    ? '#D43D1C'
                    : 'white',
                  padding: 11,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: '#BBB',
                  opacity: 5,
                  marginHorizontal: 5,
                }}>
                <Text
                  style={{
                    color: showFeedBackPageOfEventsDetail
                      ? 'white'
                      : 'black',
                    fontWeight: '600', fontSize: 12, letterSpacing: -0.446
                  }}>
                  Feedback
                </Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>

        <View style={{
          borderColor: 'rgba(246, 246, 246, 0.5)', width: '90%', height: 1, borderWidth: 1, marginTop: 25, marginBottom: 0, marginRight: 'auto',
          marginLeft: 'auto',
        }}></View>

        {showSignUpPageOfEventsDetail ? (
          <SignUpPageOfEventsDetail />
        ) : showPhotosPageOfEventsDetail ? (
          <PhotosPageOfEventsDetail />
        ) : showEventDetailMain ? (
          <EventsDetailMain />
        ) : showFeedBackPageOfEventsDetail ? (
          <FeedBackPageOfEventsDetail />
        ) : (
          <>
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
          </>
        )}
      </View>
    </View >
    </>)
  }

return (
  <>
    <Modal animationType="none" transparent={true} visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{ marginBottom: 0, marginHorizontal: 20, paddingTop: 20 }}>
            <Pressable
              onPress={() => {
                // setDeleteModalVisible(!deleteModalVisible);
                setModal(!modal);
              }}>
              <View style={{ alignItems: 'flex-end' }}>
                <View
                  style={{
                    borderColor: 'rgba(187, 187, 187, 0.5)',
                    borderWidth: 1,
                    width: 38,
                    height: 38,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={require('../../Assets/Images/EAA/cross.png')}
                    style={{ width: 15, height: 15 }}
                    resizeMode='cover'
                  />
                </View>
              </View>
            </Pressable>

            <View style={{ marginTop: -20, marginBottom: 10 }}>
              <Heading
                Heading={'Share'}
                Fontsize={24}
                //   color={COLORS.dark}
                Fontweight={700}
                txtAlign={'center'}
                color={'#000B0D'}
                lh={32}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{ marginHorizontal: 10 }}>
                <Image
                  source={require('../../Assets/Images/EAA/fbIconWIthBackground.png')}
                  style={{ width: 85, height: 85 }}
                  resizeMode='contain'
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Image
                  source={require('../../Assets/Images/EAA/gmailIconWIthBackground.png')}
                  style={{ width: 85, height: 85 }}
                  resizeMode='contain'
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Image
                  source={require('../../Assets/Images/EAA/whatsappIconWIthBackground.png')}
                  style={{ width: 85, height: 85 }}
                  resizeMode='contain'
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>

    {/* <ScrollView style={{ flexGrow: 1, flex: 1, backgroundColor: 'white' }}> */}
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <FlatList
        data={data}
        renderItem={(!showSignUpPageOfEventsDetail && !showPhotosPageOfEventsDetail && !showEventDetailMain && !showFeedBackPageOfEventsDetail) ? renderItem : null}
        contentContainerStyle={{ flexGrow: 1, minHeight: 200 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent} />

      {(!showSignUpPageOfEventsDetail && !showPhotosPageOfEventsDetail && !showEventDetailMain && !showFeedBackPageOfEventsDetail) ?
        (<View
          style={{
            // marginVertical: 10,
            // marginTop: 50,
            // position: 'relative',
            marginHorizontal: 20,
            // top: 90,
            backgroundColor: 'rgba(228, 228, 228, 0.5)',
            // marginHorizontal: 10,
            padding: Platform.OS === 'ios' ? 15 : 5,
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
        ) : null}
    </View>
    {/* </ScrollView> */}
  </>
);
};

export default EventsDetail;

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17, 17, 17, 0.9)',
    // opacity: 0.9,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    // paddingTop: 0,
    // paddingBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 200,
    opacity: 1,
    width: '85%',
    height: 190,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: 'red',
  // },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    // borderWidth: 1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius:100
    // backgroundColor: 'pink',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 35,
    backgroundColor: 'transparent',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  buttonShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    // backgroundColor: 'red',
    width: '100%',
  },
});