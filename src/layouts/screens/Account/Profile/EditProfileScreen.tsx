import { ImageBackground, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import colors from '../../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Appbar from '../../../Component/Appbar';


const { width, height } = Dimensions.get('window');

interface Props {
}
const EditProfileScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

  const [text, setText] = React.useState("");
  const [imageUrl, setImageUrl] = useState(null)

  const imageUpload = async () => {
    console.log("hiiii")
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      // Check if the image was selected successfully 
      if (image && image.path) {
        setImageUrl(image.path);
      } else {
        // Handle the case when the user didn't pick any image
        console.log('No image selected');
      }
    } catch (error) {
      // Handle any errors that might occur during image selection
      console.log('Error selecting image:', error);
    }

  };


  return (
    <>
            <Appbar navigation={navigation} />

      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topBar}>
            <Avatar.Image size={108} source={{ uri: imageUrl }} style={styles.profile} />
            <TouchableOpacity style={styles.camera} onPress={() => imageUpload()} >
              <IonIcon name="camera" color={colors.gray} size={23} />
            </TouchableOpacity>
          </View>

          <View style={styles.details}>
            <View style={styles.inputarea}>
              <Text style={styles.name}>User name</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={'gray'}
                value={text}
                onChangeText={text => setText(text)}
                placeholder="Username"
                underlineColorAndroid="transparent"
                underlineColor="white"
              />
            </View>
            <View style={styles.inputarea}>
              <Text style={styles.name}>Email address</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={'gray'}
                value={text}
                onChangeText={text => setText(text)}
                placeholder="johnhenry@gmail.com"
                underlineColorAndroid="transparent"
                underlineColor="white"

              // right={<TextInput.Icon icon="account-edit-outline" color={colors.brand_primary} size={18} />}
              />
            </View>
            <View style={styles.inputarea}>
              <Text style={styles.name}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={'gray'}
                value={text}
                onChangeText={text => setText(text)}
                placeholder="98765432"
                underlineColorAndroid="transparent"
                underlineColor="white"

              // right={<TextInput.Icon icon="account-edit-outline" color={colors.brand_primary} size={18} />}
              />
            </View>
            <View style={styles.inputarea}>
              <Text style={styles.name}>Gender</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={'gray'}
                value={text}
                onChangeText={text => setText(text)}
                placeholder="Male"
                underlineColorAndroid="transparent"
                underlineColor="white"
              />
            </View>
            <View style={styles.inputarea}>
              <Text style={styles.name}>Date of Birth</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor={'gray'}
                value={text}
                onChangeText={text => setText(text)}
                placeholder="20/04/1993"
                underlineColorAndroid="transparent"
                underlineColor="white"

              // right={<TextInput.Icon icon="account-edit-outline" color={colors.brand_primary} size={18} />}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brand_primary,
    flex: 1,
  },
  align: {
    flexDirection: 'row',
  },
  title: {
    color: colors.white,
    fontSize: 22,
  },
  bell: {
    marginLeft: 20,
  },
  topBar: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  appbarView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profile: {
    height: width * 0.3,
    width: width * 0.3,
    alignSelf: 'center',
    borderRadius: 70,
    position: 'relative',
  },
  profileView: {
    backgroundColor: colors.brand_primary,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: width * 0.23,
    width: width * 0.23,
    alignSelf: 'center',
    position: 'relative',
    borderRadius: 70,

  },
  camera: {
    position: 'absolute',
    right: '35%',
    top: '60%',
  },
  input: {
    color: 'black',
    height: 24,
    backgroundColor: colors.white,
    width: width * 0.52,

  },
  inputarea: {
    backgroundColor: colors.white,
    borderRadius: 15,
    // width: width * 0.92,
    // alignSelf: 'center',
    paddingTop: 5,
    marginVertical: 10,
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
    marginBottom: 5,
    // marginLeft: 18,
    color: 'black',
    width: width * 0.3,

  },
  saveBtn: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 20,
    marginVertical: 40
  },
  saveBtnText: {
    color: colors.brand_primary,
    fontSize: 16,

  },
  details: {
    marginTop: 10,
    backgroundColor: colors.white,
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
})
