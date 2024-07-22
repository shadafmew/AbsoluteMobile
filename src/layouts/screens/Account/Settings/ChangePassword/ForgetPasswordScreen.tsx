import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ActivityIndicator, } from 'react-native';
import colors from '../../../../style/Colors';
import { postMethod } from '../../../../../utils/helper';
import Snackbar from 'react-native-snackbar';
import { TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';


const { width, height } = Dimensions.get('window')

interface Props { }
const ForgetPasswordScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    const { control, handleSubmit, setError, formState: { errors } } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState<string>('');


    const sendOtp = async (data: any) => {

        try {
            setLoading(true);
            const api: any = await postMethod('sendOtp', { email: data.email });
            if (api.status === 200) {
                console.log('success....', api.data);
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'green',
                });
                navigation.replace('EnterCodeScreen', {
                    email: data.email,
                    token: api.data.data.token, // Replace with the actual key for the token in your API response
                });
                setLoading(false);

            } else {
                console.log('else....');
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'red',
                });
                setLoading(false);
            }
        } catch (e) {
            console.log('catch', e);
            setLoading(false);

            Snackbar.show({
                text: 'Invalid email or email not registered',
                duration: Snackbar.LENGTH_SHORT,
                textColor: 'white',
                backgroundColor: 'orange',
            });
        }
    };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Forget Password</Text>
            </View>
            <View>
                <Text style={styles.label}>Enter Email Address</Text>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            placeholder="Email ID"
                            placeholderTextColor={colors.gray}
                            style={styles.textInput}
                            keyboardType="email-address"
                            onChangeText={(value) => {
                                field.onChange(value);
                                setEmail(value); // You can still update your state if needed
                            }}
                            value={field.value}
                        />
                    )}
                    name="email"
                    rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
                />
                {errors.email && (
                    <Text style={{ color: 'red',marginLeft:'10%' }}>{errors.email.message}</Text>
                )}
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={handleSubmit(sendOtp)}
            >
                {isLoading ? (
                    <ActivityIndicator size="large" color={colors.white} />
                ) : (
                    <Text style={styles.btnText}>Submit</Text>
                )}
            </TouchableOpacity>
        </View>
    );
};

export default ForgetPasswordScreen;

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
        marginLeft: 30,
        width: width * 0.8,
        paddingLeft: 10,
        // height: height * 0.066,
        elevation: 8,
        // alignSelf: 'center',
        borderColor: colors.input_border,
        // borderWidth: 1,
    },
    label: {
        alignSelf: 'center',
        marginTop: width * 0.35,
        marginBottom: width * 0.05,
        color: colors.gray_font_color,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    }
});
