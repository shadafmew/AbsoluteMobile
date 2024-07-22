import React from 'react';
import { FC } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import colors from '../../style/Colors';


const { width, height } = Dimensions.get('window');

interface Props { }
const WalkthroughScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../../images/login-bg.png')} style={styles.bg} >
                    <View style={styles.picture}>
                        <Image source={require('../../images/mop.png')} style={styles.image} />
                    </View>
                    <View style={styles.welcome}>
                        <Text style={styles.text}>Welcome</Text>
                        <Text style={styles.text2}>Clean Space</Text>
                        <Text style={styles.texta}>Clean life.</Text>
                        <Text style={styles.text3}>Book Cleaners at the comfort of Your space.</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.btnText}>Get Start</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground >
            </View>
        </ScrollView>
    );
};

export default WalkthroughScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.white,
    },

    picture: {

    },

    image: {
        width: width * 0.8,
        height: height * 0.5,
        alignSelf: 'center',
    },
    welcome: {
    },
    text: {
        color: colors.white,
        fontSize: width * 0.05,
        // fontWeight: "500",
        textAlign: "center",
        marginTop: width * 0.07,
        marginBottom: width * 0.06,
        fontFamily: 'Poppins-Medium'
    },
    text2: {
        color: colors.white,
        textAlign: "center",
        fontWeight: "600",
        fontSize: width * 0.08,
        letterSpacing: 1,
        // marginTop: width * 0.05,
        fontFamily: 'Poppins-Medium',


    },
    texta: {
        color: colors.white,
        textAlign: "center",
        fontWeight: "600",
        fontSize: width * 0.08,
        letterSpacing: 1,
        fontFamily: 'Poppins-Medium'

    },
    text3: {
        color: colors.white,
        textAlign: "center",
        alignSelf: 'center',
        width: width * 0.60,
        fontWeight: '500',
        marginTop: width * 0.075,
        fontFamily: 'Poppins-Medium'
    },
    bg: {
        width: width * 1,
        height: height * 1,
        flex: 1,
    },
    btn: {
        alignSelf: 'center',
        marginTop: width * 0.045,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    btnText: {
        color:colors.white,
        fontSize: 18,
        fontFamily: 'Poppins-Medium'

    }
});
