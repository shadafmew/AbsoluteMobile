import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import colors from '../../../../style/Colors';
import OTPTextView from 'react-native-otp-textinput';
import { postMethod } from '../../../../../utils/helper';
import Snackbar from 'react-native-snackbar';

const { width, height } = Dimensions.get('window')
interface Props { }
const EnterCodeScreen: FC<Props> = ({ navigation, route }: any): JSX.Element => {
    const [otp, setOtp] = useState<string>('');
    const [isLoading, setLoading] = useState(false);

    const { email, token } = route.params;
    const verify = async () => {

        const raw = {
            email: email,
            otp: otp,
            token: token,
        }

        try {
            const api: any = await postMethod('verifyOtp', raw)
            console.log("zoya...", raw)
            setLoading(true);

            if (api.status === 200) {
                console.log("if...", api.data)
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'green',
                });
                setLoading(false);
                navigation.replace('ResetPasswordScreen', { email: email });
                // navigation.navigate('NextScreen', { email: email });


            } else {
                setLoading(true);
                console.log("else...", api.data.message)
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'red',
                });

            }
        } catch (e) {
            console.log("catch...")

        }



    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Enter Code</Text>
                </View>
                <View>
                    <Text style={styles.label}>Enter Verification Code</Text>
                    <View style={styles.inputs}>
                        <OTPTextView
                            textInputStyle={{ backgroundColor: colors.white, borderRadius: 30, borderWidth: 1, borderColor: colors.gray }}
                            tintColor={colors.brand_primary}
                            inputCount={6}
                            // onCodeChanged={(code: string) => setOtp(code)} // Capture the OTP
                            handleTextChange={(code: string) => setOtp(code)} // Correct prop name

                        />
                    </View>
                    <Text style={styles.text}>If you don't recieve any code! <Text style={{ color: 'red' }}>Resend</Text></Text>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={verify}
                // onPress={() => navigation.navigate('ResetPasswordScreen')}
                >
                    {isLoading ? (
                        <ActivityIndicator size="large" color={colors.white} />
                    ) : (
                        <Text style={styles.btnText}>Verify</Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default EnterCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        backgroundColor: colors.brand_primary,
        height: width * 0.4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerText: {
        color: colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: width * 0.17,
    },
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        backgroundColor: colors.brand_primary,
        alignSelf: 'center',
        alignItems: 'center',
        width: width * 0.5,
        marginVertical: width * 0.1,
        borderRadius: 10,
        marginTop: width * 0.3,
    },
    btnText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    textInput: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        width: width * 0.1,
        paddingLeft: 10,
        // height: height * 0.066,
        elevation: 8,
        // alignSelf: 'center',
        borderColor: colors.input_border,
        // borderWidth: 1,
        borderRadius: 30,
    },
    label: {
        alignSelf: 'center',
        marginTop: width * 0.35,
        marginBottom: width * 0.05,
        color: colors.gray_font_color,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    inputs: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    text: {
        alignSelf: 'center',
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
        color: colors.gray_font_color,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
});
