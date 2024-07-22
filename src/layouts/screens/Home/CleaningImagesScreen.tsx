import React from 'react';
import { FC } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import colors from '../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

interface Props { }
const CleaningImagesScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.arrowView}>
                <IonIcon name="arrow-back" color={colors.brand_primary} size={24} onPress={() => navigation.goBack()} style={styles.backIcon} />
            </View>
            <ScrollView>
                <View style={styles.outerBox}>
                    <View style={styles.innerView}>
                        <Text style={styles.heading}>Before Cleaning</Text>
                        <Image source={require('../../images/house-cleaning.png')} style={styles.image} />
                        <View style={styles.cleaning}>
                            <View style={styles.options}>
                                <Text style={styles.note}>Add note...</Text>
                                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                                    <Image source={require('../../images/media.png')} style={styles.img} />
                                    <Text style={styles.note}> Media</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                                    <Image source={require('../../images/speaker.png')} style={styles.img} />
                                    <Text style={styles.note}> Action</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.innerView}>
                    <Text style={styles.heading}>After Cleaning</Text>
                    <Image source={require('../../images/house-cleaning.png')} style={styles.image} />
                    <View style={styles.cleaning}>
                        <View style={styles.options}>
                            <Text style={styles.note}>Add note...</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                                <Image source={require('../../images/media.png')} style={styles.img} />
                                <Text style={styles.note}> Media</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                                <Image source={require('../../images/speaker.png')} style={styles.img} />
                                <Text style={styles.note}> Action</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CleaningImagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backIcon: {
        paddingVertical: 20,
        paddingLeft: 10,
        backgroundColor: colors.white
    },
    arrowView: {
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
    },
    innerView: {
        backgroundColor: colors.light_green,
        width: width * 0.9,
        alignSelf: 'center',
        paddingVertical: 20,
        paddingLeft: 10,
        borderRadius: 10,
        marginTop: 30,
        elevation: 8,
        marginBottom: 30,
    },
    heading: {
        color: colors.black,
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
    },
    image: {
        width: width * 0.6,
        height: width * 0.6,
        alignSelf: 'center',

    },

    cleaning: {
        padding: 10,
        // backgroundColor: colors.white,
        width: width * 0.94,
        borderRadius: 10,
        alignSelf: 'center',
        // marginBottom: 15,
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
        color:colors.black,  
        fontFamily: 'Poppins-Medium',
        // fontSize: 16,
    },
    img: {
        height: width * 0.06,
        width: width * 0.06,
        alignSelf: 'center',
        justifySelf: 'center',
    },
    outerBox:{
        // paddingBottom: 30,
        // backgroundColor:'red',
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
        // paddingLeft: 10,
    },
});
