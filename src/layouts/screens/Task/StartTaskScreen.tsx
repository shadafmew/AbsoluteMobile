import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable, TouchableOpacity, Image, ScrollView } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
import { Row, Rows, Table } from 'react-native-table-component';
import SendIntentAndroid from 'react-native-send-intent';

// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';


const { width } = Dimensions.get('window')

interface Props { }
const StartTaskScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
  const [remark, setRemark] = useState<string>();
  const [imageUri, setImageUri] = useState<string>();
  const [signatureModalVisible, setSignatureModalVisible] = useState(false);
  const [checked, setChecked] = useState('first');
  const [selectedPaymentFile, setSelectedPaymentFile] = useState<string | null>(null);
  const [selectedDeliveryFile, setSelectedDeliveryFile] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string[]>([]);
  const [secondImageUri, setSecondImageUri] = useState<string>();
  const [timer, setTimer] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);


  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);



  // -----------------------TABLE-------------------------

  const HeadTable = ['Image', 'Item', 'Item Code', 'Stock',];
  const DataTable = [

    [
      // 'jhbhj',
      <Image source={require('../../images/whatsapp-icon.png')} style={styles.TableImage} />,
      'Broom Broom Broom Broom',
      'SBI565458',
      '1',
    ],
    [
      <Image source={require('../../images/whatsapp-icon.png')} style={styles.TableImage} />,
      'Broom Broom Broom Broom',
      'SBI565458',
      '1',
    ],

  ];

  // --------------------TABLE DATA ENDED---------------------------



  // ===== function for arrow button   ======
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setSecondModalVisible(false); // Close the second modal
  };
  const toggleSecondModal = () => {
    setSecondModalVisible(!isSecondModalVisible);
    setModalVisible(false); // Close the first modal
  };
  const handleRadioButtonChange = (value: string) => {
    setChecked(value);
  };
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: 'Camera Permission',
          message: 'App needs camera permission to capture photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (error) {
        console.log('Error requesting camera permission:', error);
      }
    }
  };

  const openCamera = async () => {
    await requestCameraPermission();
    const options = {
      mediaType: 'photo',
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.error && !response.customButton) {
        const selectedImage = response.assets
          ? response.assets.map((asset: { uri: any; }) => asset.uri)
          : [response.uri];

        // Set the selected image URI to the state
        setImageUri(selectedImage[0]);
        toggleModal();
      } else {
        console.log('User cancelled or error:', response.error || response.customButton);
      }
    });
  };

  const openImageLibrary = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.error && !response.customButton) {
        const selectedImage = response.assets
          ? response.assets.map((asset) => asset.uri)
          : [response.uri];

        // Set the selected image URI to the state
        setImageUri(selectedImage[0]);
        toggleModal();
      } else {
        console.log('User cancelled or error:', response.error || response.customButton);
      }
    });
  };


  const openSecondCamera = async () => {
    await requestCameraPermission();
    const options = {
      mediaType: 'photo',
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.error && !response.customButton) {
        const selectedImage = response.assets
          ? response.assets.map((asset) => asset.uri)
          : [response.uri];

        // Set the selected image URI to the second state
        setSecondImageUri(selectedImage[0]);
        setSecondModalVisible(false);
      } else {
        console.log('User cancelled or error:', response.error || response.customButton);
      }
    });
  };

  const openSecondImageLibrary = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.error && !response.customButton) {
        const selectedImage = response.assets
          ? response.assets.map((asset) => asset.uri)
          : [response.uri];

        // Set the selected image URI to the second state
        setSecondImageUri(selectedImage[0]);
        setSecondModalVisible(false);
      } else {
        console.log('User cancelled or error:', response.error || response.customButton);
      }
    });
  };


  const openWhatsApp = () => {
    // const phoneNumber = `65${oderDetails?.phone}`;
    const phoneNumber = `6589878546`;


    SendIntentAndroid.openAppWithUri(`whatsapp://send?phone=${phoneNumber}`)
      .then(isOpened => {
        if (!isOpened) {
          console.log('WhatsApp not installed.');
        }
      })
      .catch(error => {
        console.error('Error opening WhatsApp:', error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Appbar navigation={navigation} />
        <View>
          <View style={styles.customerDetails}>
            <View style={styles.imageView}>
              <Image source={require('../../images/costumer-profile.png')} style={styles.customerImage} />
            </View>
            <View style={styles.customerDetailsView}>
              <Text style={styles.name}>David Jones</Text>
              <Text style={styles.workType}>Commercial Cleaning</Text>
              <Text style={styles.workType}>15 Nov 2023, 10:00am</Text>
              <Text style={styles.address}>1, yishun industrial street, 1#07-36 aposh bizuph, singapore,515545</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <View style={styles.payable}>
              <Text style={styles.balance}>Balance Payable</Text>
              <Text style={styles.balance}>$121.00</Text>
            </View>
            <TouchableOpacity style={styles.payable} onPress={openWhatsApp}>
              <Text style={styles.balance}>Contact @bsolute</Text>
              <Image source={require('../../images/whatsapp-icon.png')} style={styles.whatsapp} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.heading}>Inventory</Text>
            <View>
              <ScrollView horizontal>
                <View style={{ paddingHorizontal: 20, }}>
                  <Table borderStyle={{ borderWidth: 1, borderColor: '#515151' }}>
                    <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.HeadTableText} />
                    <Rows data={DataTable} style={styles.textdetailStyle} textStyle={styles.TableText} />
                  </Table>
                </View>
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Job Description</Text>
            <View style={styles.description}>
              <Text style={styles.balance}>• 3 Hours One Time Cleaning - 1 Cleaner</Text>
              <Text style={styles.balance}>• Disinfection Spray</Text>
            </View>
          </View>
        </View>
        <Pressable style={styles.StartTask} onPress={() => navigation.navigate('EndTaskScreen')}>
          <Text style={styles.StartTaskText}>Start Task</Text>
        </Pressable>
        {/* =================================================================================================== */}
        <Modal isVisible={isModalVisible}>
          <View style={styles.popUp}>
            <View style={styles.crossBtn}>
              <View><Text> </Text></View>
              <TouchableOpacity onPress={toggleModal} >
                <Text style={{ color: 'grey', fontSize: width * 0.06, paddingBottom: 3 }}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionBtns}>
              <TouchableOpacity style={styles.optionS} onPress={openImageLibrary}>
                <MaterialIcons name="insert-photo" size={width * 0.1} color={colors.brand_primary} />
                <Text style={styles.optionText}>Library</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionS} onPress={openCamera}>
                <MaterialCommunityIcons name="camera" size={width * 0.1} color={colors.brand_primary} />
                <Text style={styles.optionText}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal isVisible={isSecondModalVisible}>
          <View style={styles.popUp}>
            <View style={styles.crossBtn}>
              <View><Text> </Text></View>
              <TouchableOpacity onPress={toggleSecondModal}>
                <Text style={{ color: 'grey', fontSize: width * 0.06, paddingBottom: 3 }}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionBtns}>
              <TouchableOpacity style={styles.optionS} onPress={openSecondImageLibrary}>
                <MaterialIcons name="insert-photo" size={width * 0.1} color={colors.brand_primary} />
                <Text style={styles.optionText}>Library</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionS} onPress={openSecondCamera}>
                <MaterialCommunityIcons name="camera" size={width * 0.1} color={colors.brand_primary} />
                <Text style={styles.optionText}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* ================================================================================== */}

      </ScrollView>
    </View>
  );
};

export default StartTaskScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brand_secondary,
    flex: 1,
  },
  dropDownView: {
    padding: 20,
    backgroundColor: colors.brand_secondary,
  },
  taskDetailBtn: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.brand_secondary,
    marginTop: 30,

  },
  detailsText: {
    color: colors.brand_primary,
    fontFamily: 'Poppins-Medium',
    fontSize: 16
  },
  stopwatch: {
    height: width * 0.07,
    width: width * 0.065,
  },
  timeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 15,
  },
  start: {
    color: colors.brand_primary,
    fontFamily: 'Poppins-Regular',
    fontSize: 14
  },
  time: {
    color: colors.brand_primary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14
  },
  uploadBtn: {
    flexDirection: 'row',
    backgroundColor: colors.red,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 30,
  },
  uploadBtnText: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  textInput: {

  },
  jobDescription: {
    paddingHorizontal: width * 0.08,
    paddingTop: width * 0.08,
  },
  jobDescriptionText: {
    color: colors.black
  },
  jobTypebtn: {
    backgroundColor: colors.Datebg_green,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  cleaningbtn: {
    color: colors.white,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    elevation: 8,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnss: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: width * 0.55,
    // backgroundColor:'red',
  },
  jobTypebtnWhite: {
    backgroundColor: '#FAFAFA',
    elevation: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  whitebtn: {
    color: colors.black,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  extraMargin: {
    marginLeft: 20,
  },
  StartTaskText: {
    fontSize: 16,
    color: colors.white,
    marginTop: 5,
    fontFamily: 'Poppins-Medium'
  },
  StartTask: {
    alignItems: 'center',
    backgroundColor: colors.brand_primary,
    // height: 40,
    // width: 130,
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 50,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  popUp: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.brand_primary,
    backgroundColor: 'white',
    width: width * 0.8,
    padding: 10,
    marginLeft: '5%'
  },
  crossBtn: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginLeft: '5%',
    marginBottom: 10,
  },
  optionBtns: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 10,

  },
  optionS: {
    width: '30%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.brand_primary,
    paddingTop: 7,
    paddingBottom: 7
  },
  optionText: {
    color: colors.brand_primary,
  },
  image: {
    width: width * 0.5, height: width * 0.5, alignSelf: 'center', marginTop: 30
  },
  customerImage: {
    height: width * 0.20,
    width: width * 0.20,
    alignSelf: 'center',
  },
  call: {
    height: width * 0.05,
    width: width * 0.05,
    marginRight: 10,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    fontSize: 16,
  },
  workType: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: 12,
    marginTop: -6,
  },
  address: {
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    fontSize: 10,
    // marginTop: -6,
  },
  customerDetails: {
    flexDirection: 'row',
    // width: width * 0.8,
    // alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: colors.white,
    paddingLeft: 20,
    elevation: 8,
  },
  imageView: {
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: 60,
    marginRight: 20,
  },
  customerDetailsView: {
    // backgroundColor:'red',
    width: width * 0.65,

  },
  contact: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  payable: {
    backgroundColor: colors.white,
    // padding:15,
    width: width * 0.4,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 5,

  },
  balance: {
    color: colors.black,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  whatsapp: {
    height: width * 0.07,
    width: width * 0.07,

  },
  heading: {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    backgroundColor: colors.white,
    padding: 15,
    width: width * 0.9,
    // alignItems: 'center',
    // paddingVertical: 6,
    borderRadius: 5,
    alignSelf: 'center',
  },
  // --------TABLE CSS---------------------------------

  TableText: {
    width: width * 0.29,
    textAlign: 'center', // Center horizontally
    fontSize: width * 0.035,
    color: 'black',
    paddingVertical: 10,
  },
  HeadStyle: {
    height: 40,
    backgroundColor: colors.brand_primary,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: width * 0.045,
    color: colors.white,
  },
  HeadTableText: {
    width: width * 0.29,
    textAlign: 'center', // Center horizontally
    fontSize: width * 0.04,
    color: colors.white,
  },
  textdetailStyle: {
    backgroundColor: colors.white,
  },
  TableImage: {
    marginHorizontal: 35,
    alignSelf: 'center',
    height: width * 0.1,
    width: width * 0.1,

  },

  // --------TABLE CSS---------------------------------


});

