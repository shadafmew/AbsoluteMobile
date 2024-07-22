import React from 'react';
import { FC } from 'react';
import { StyleSheet, Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../style/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const { width, height } = Dimensions.get('window');

interface Props { }
const PunchOutScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={require('../../images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.punchInView}>
                <SimpleLineIcons name="clock" color={colors.white} size={width * 0.4} />
                <View>
                    <Text style={styles.clock}>Clock Out</Text>
                    <Text style={styles.time}>6:00 pm</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Text style={styles.btnText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PunchOutScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_primary,
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: colors.white,
        elevation: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    logo: {
        height: width * 0.15,
        width: width * 0.2,
        alignSelf: 'center',
    },
    punchInView: {
        alignSelf: 'center',
        // backgroundColor: 'pink',
        marginTop: width * 0.2,
        height: height * 0.7,
        justifyContent: 'space-between',
    },
    backBtn: {
        backgroundColor: colors.white,
        paddingVertical: 8,
        paddingHorizontal: 8,
        alignSelf: 'center',
        borderRadius: 8,
        width: width * 0.32,
        marginTop: width * 0.06,
        marginBottom: width * 0.1,



    },
    btnText: {
        color: colors.brand_primary,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',

    },
    clock: {
        color: colors.white,
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        marginTop: width * 0.06,
    },
    time: {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center',
        marginTop: width * 0.06,
    },
});
