import React from 'react';
import { FC } from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import Appbar from '../../../Component/Appbar';
import colors from '../../../style/Colors';


const { width, height } = Dimensions.get('window')

interface Props { }
const CleaningInspectionScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Appbar navigation={navigation} />
        <TouchableOpacity style={styles.cleaning}>
          <View style={styles.innerbox}>
            <View style={styles.greenBox}></View>
            <Text style={styles.detail}>Office Detailed Cleaning</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity onPress={() => navigation.navigate('CustomerReviewScreen')}>
              <Text style={styles.note}>Add note...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CleaningImagesScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/media.png')} style={styles.img} />
                <Text style={styles.note}> Media</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RemarkScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/speaker.png')} style={styles.img} />
                <Text style={styles.note}> Action</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <View style={styles.innerbox}>
            <View style={styles.greenBox}></View>
            <Text style={styles.detail}>Office Detailed Cleaning</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity onPress={() => navigation.navigate('CustomerReviewScreen')}>
              <Text style={styles.note}>Add note...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CleaningImagesScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/media.png')} style={styles.img} />
                <Text style={styles.note}> Media</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RemarkScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/speaker.png')} style={styles.img} />
                <Text style={styles.note}> Action</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <View style={styles.innerbox}>
            <View style={styles.greenBox}></View>
            <Text style={styles.detail}>Office Detailed Cleaning</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity onPress={() => navigation.navigate('CustomerReviewScreen')}>
              <Text style={styles.note}>Add note...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CleaningImagesScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/media.png')} style={styles.img} />
                <Text style={styles.note}> Media</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RemarkScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/speaker.png')} style={styles.img} />
                <Text style={styles.note}> Action</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <View style={styles.innerbox}>
            <View style={styles.greenBox}></View>
            <Text style={styles.detail}>Office Detailed Cleaning</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity onPress={() => navigation.navigate('CustomerReviewScreen')}>
              <Text style={styles.note}>Add note...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CleaningImagesScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/media.png')} style={styles.img} />
                <Text style={styles.note}> Media</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RemarkScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/speaker.png')} style={styles.img} />
                <Text style={styles.note}> Action</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cleaning}>
          <View style={styles.innerbox}>
            <View style={styles.greenBox}></View>
            <Text style={styles.detail}>Office Detailed Cleaning</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity onPress={() => navigation.navigate('CustomerReviewScreen')}>
              <Text style={styles.note}>Add note...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CleaningImagesScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/media.png')} style={styles.img} />
                <Text style={styles.note}> Media</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RemarkScreen')}>
              <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../images/speaker.png')} style={styles.img} />
                <Text style={styles.note}> Action</Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CleaningInspectionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },

  cleaning: {
    padding: 10,
    backgroundColor: colors.white,
    width: width * 0.94,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
  },

  innerbox: {
    flexDirection: 'row',
  },

  greenBox: {
    backgroundColor: colors.green_box,
    height: height * 0.05,
    width: width * 0.09,
    borderRadius: 5,
    marginRight: 8,
  },
  detail: {
    color: colors.detail_text,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginBottom: 5,

  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  note: {
    alignSelf: 'flex-end',
    color: colors.black,
    fontFamily: 'Poppins-Regular',

  },
  img: {
    height: width * 0.06,
    width: width * 0.06,
    alignSelf: 'center',
    justifySelf: 'center',
  },
});
