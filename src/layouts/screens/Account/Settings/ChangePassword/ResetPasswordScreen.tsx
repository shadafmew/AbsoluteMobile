import React, { useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import colors from '../../../../style/Colors';
import { TextInput } from 'react-native-paper';
import { postMethod } from '../../../../../utils/helper';
import { Controller, useForm } from 'react-hook-form';
import Snackbar from 'react-native-snackbar';

const { width, height } = Dimensions.get('window')

interface Props { }
const ResetPasswordScreen: FC<Props> = ({ navigation, route }: any): JSX.Element => {

    const [isLoading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { email } = route.params;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const updatePassword = async (data: any) => {
        const raw = {
            email: email,
            password: data.password,
            password_confirmation: data.confirmPassword,
        }

        console.log('first', raw)
        try {
            setLoading(true);

            const api: any = await postMethod('updatePassword', raw);

            if (api.status === 200) {
                console.log(".....", api.data)
                setLoading(false);
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'green',
                });
                navigation.replace('Login');
            }
            else {
                setLoading(false);
                console.log("else....")
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'red',
                });
            }
        }
        catch (e) {
            console.log('catch', e);
            Snackbar.show({
                text: 'Password and Confirm Password should be same',
                duration: Snackbar.LENGTH_SHORT,
                textColor: 'white',
                backgroundColor: 'brown',
            });
        }
    }





    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Reset Password</Text>
                </View>
                <View style={styles.inputs}>
        
                    <View style={{marginBottom: 20}}>
                        <Controller
                            control={control}
                            render={({ field, fieldState }) => (
                                <>
                                    <TextInput
                                        placeholder='New Password'
                                        placeholderTextColor={colors.gray}
                                        secureTextEntry={!showPassword}
                                        keyboardType="numeric"
                                        style={styles.textInput}
                                        value={field.value}
                                        onChangeText={(text) => field.onChange(text)}
                                        right={
                                            <TextInput.Icon
                                                icon={showPassword ? 'eye-off' : 'eye'}
                                                onPress={togglePasswordVisibility}
                                            />
                                        }
                                    />
                                    {fieldState.error && <Text style={styles.errorText}>{fieldState.error.message}</Text>}
                                </>
                            )}
                            name="password"
                            rules={{ required: 'Password is required' }}
                            defaultValue=""
                        />
                    </View>
                    <Controller
                        control={control}
                        render={({ field, fieldState }) => (
                            <>
                                <TextInput
                                    placeholder='Re-enter Password'
                                    placeholderTextColor={colors.gray}
                                    secureTextEntry={!showPassword}
                                    keyboardType="numeric"
                                    style={styles.textInput}
                                    value={field.value}
                                    onChangeText={(text) => field.onChange(text)}
                                    right={
                                        <TextInput.Icon
                                            icon={showPassword ? 'eye-off' : 'eye'}
                                            onPress={togglePasswordVisibility}
                                        />
                                    }
                                />
                                {fieldState.error && <Text style={styles.errorText}>{fieldState.error.message}</Text>}
                            </>
                        )}
                        name="confirmPassword"
                        rules={{ required: 'Password Confirmation is required' }}
                        defaultValue=""
                    />
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={handleSubmit(updatePassword)}
                >
                    {isLoading ? (
                        <ActivityIndicator size="large" color={colors.white} />
                    ) : (
                        <Text style={styles.btnText}>Submit</Text>
                    )}
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        backgroundColor: colors.brand_primary,
        height: width * 0.4,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
        // marginBottom: 20,
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
        marginTop: width * 0.35,
    },
    errorText: {
        color: colors.red,
        marginLeft: '10%',
        // marginBottom: 20,

    }
});