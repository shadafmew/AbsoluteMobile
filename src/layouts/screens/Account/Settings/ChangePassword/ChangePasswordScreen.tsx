import React, { useState } from 'react';
import { FC } from 'react';
import { ScrollView, Dimensions, StyleSheet, TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import colors from '../../../../style/Colors';
import Appbar from '../../../../Component/Appbar';
import { postMethod } from '../../../../../utils/helper';
import Snackbar from 'react-native-snackbar';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from 'react-native-paper';



interface Props {

}

const { width, height } = Dimensions.get('window');
const ChangePasswordScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    const [isLoading, setLoading] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };   


    const updatePassword = async (data: any) => {
        const raw = {
            email: data.email,
            password: data.password,
            password_confirmation: data.confirmPassword,
        }


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
            }
        }
        catch (e) {
            console.log('catch', e);
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <Appbar navigation={navigation} />
                <Text style={styles.header}>Change Password</Text>
                <View>
                    <Image source={require('../../../../images/change-password-image.png')} />

                    <Controller
                        control={control}
                        render={({ field, fieldState }) => (
                            <>
                                <TextInput
                                    placeholder='Email'
                                    placeholderTextColor={colors.gray}
                                    style={styles.textInput}
                                    value={field.value}
                                    onChangeText={(text) => field.onChange(text)}
                                />
                                {fieldState.error && <Text style={styles.errorText}>{fieldState.error.message}</Text>}
                            </>
                        )}
                        name="email"
                        rules={{
                            required: 'Email is required',
                        }}
                        defaultValue=""
                    />

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

                <TouchableOpacity style={styles.inspectionBtn} onPress={handleSubmit(updatePassword)} >
                    {isLoading ? (
                        <ActivityIndicator size="large" color={colors.white} />
                    ) : (
                        <Text style={styles.inspectionBtnText}>Submit</Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },

    textInput: {
        backgroundColor: '#F1F7FF',
        marginVertical: 10,
        borderRadius: 5,
        width: width * 0.9,
        alignSelf: 'center',
        paddingLeft: 20
    },
    header: {
        color: colors.black,
        fontSize: 20,
        marginVertical: 20,
        alignSelf: 'center',
        fontFamily: 'Poppins-SemiBold'
    },
    inspectionBtn: {
        backgroundColor: colors.brand_primary,
        paddingVertical: 7,
        paddingHorizontal: 35,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: width * 0.15,
        borderRadius: 12,
    },
    inspectionBtnText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        alignItems: 'center',
    },
    errorText: {
        color: colors.red,
        marginLeft: 20,
        fontSize: 10,
        marginTop: -10,
    }
});
