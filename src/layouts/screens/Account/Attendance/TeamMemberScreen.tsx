import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Appbar from '../../../Component/Appbar';
import colors from '../../../style/Colors';
import { TextInput } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';



const { width, height } = Dimensions.get('window')

interface Props { }
const TeamMemberScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Appbar backgroundColor={colors.bg} navigation={navigation} />

            <View style={styles.detailSectionInner}>
                <View style={styles.rowSection}>
                    <Text style={styles.name}>Team Member(s)</Text>
                </View>
                <TouchableOpacity style={styles.calendarBtn} onPress={() => navigation.navigate('CleaningInspectionScreen')} >
                    <Text style={styles.calendarBtnText}>Select Responses</Text>
                </TouchableOpacity>

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
            </View>

            <View style={styles.middle}>
                {/* <Text>mdk</Text> */}
            </View>

            <View style={styles.detailSectionInner}>
                <View style={styles.rowSection}>
                    <Text style={styles.name}>Additional Team Member</Text>
                </View>
                <TextInput
                    activeUnderlineColor={colors.lightGray}
                    placeholder='Tap here to edit'
                    underlineColor={colors.white}
                    placeholderTextColor={colors.gray}
                    // value={value}
                    // onChangeText={value => onChange(value)}
                    style={styles.textInput}
                // left={<TextInput.Icon icon="lock-outline" color={colors.gray} />}
                />

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
            </View>
        </View>
    );
};

export default TeamMemberScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },


    detailSectionInner: {
        padding: 15,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
    },
    textInput: {
        backgroundColor: colors.white,
        marginVertical: 10,
        elevation: 5,
    },
    rowSection: {
        flexDirection: 'row',
    },

    name: {
        color: colors.name,
        letterSpacing: 2,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
    },


    calendarBtn: {
        backgroundColor: colors.Datebg_green,
        padding: 10,
        marginVertical: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarBtnText: {
        color: colors.white,
        alignSelf: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        marginRight: 10,
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
        fontFamily:'Poppins-Regular',

    },
    img: {
        height: width * 0.06,
        width: width * 0.06,
        alignSelf: 'center',
        justifySelf: 'center',
    },

    middle: {
        height: height * 0.12,
        backgroundColor: colors.bg,
    },
});
