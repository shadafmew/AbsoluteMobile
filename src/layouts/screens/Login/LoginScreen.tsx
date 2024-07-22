import React, { useState } from 'react';
import { FC } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import Colors from '../../style/Colors';
import { TextInput } from 'react-native-paper';
import colors from '../../style/Colors';
import { postMethod, storeData } from '../../../utils/helper';
import { Controller, useForm } from 'react-hook-form';
import Snackbar from 'react-native-snackbar';
import Feather from 'react-native-vector-icons/Feather';




const { width, height } = Dimensions.get('window');

interface Props { }
const LoginScreen: FC<Props> = ({ navigation }: any): JSX.Element => {



    const [isLoading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onSubmit = async (data: any) => {

        console.log('hii')
        Keyboard.dismiss()
        LogIn(data)


    }
    const LogIn = async (props: any) => {
        const raw = {
            username: props.email,
            password: props.password,
        }
        try {
            setLoading(true);
            const api: any = await postMethod('login', raw);

            if (api.status === 200) {
                setLoading(false);
                await storeData(api.data);
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'green',
                });
                navigation.navigate('BottomTabNavigation');
                // console.log(api.data)
            }
            else {
                setLoading(false);
                Snackbar.show({
                    text: api.data.message,
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: 'red',

                });
                console.log("else....")
            }
        }
        catch (e) {
            console.log('catch', e)
            Snackbar.show({
                text: 'Invalid Credentials',
                // duration: Snackbar.LENGTH_SHORT,
                textColor: 'white',
                backgroundColor: 'red',

            });
        }
    }
    const { control, handleSubmit, formState: { errors, isValid }, getValues } = useForm({
        defaultValues: {
            email: '',
            password: '',

        }
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.img} source={require('../../images/loginscreen-logo.png')} />
                <Text style={styles.welcomeText}>Welcome</Text>
                <View style={styles.inputsView}>
                    <Controller

                        control={control}
                        rules={{
                            required: true,
                            // pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor={'gray'}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Username"
                                underlineColorAndroid="transparent"
                                left={<TextInput.Icon icon="account" color={Colors.gray} />}

                            />
                        )}
                        name="email"
                    />
                    {errors.email && errors.email.type === "required" && (
                        <View style={{ flexDirection: 'row', marginTop: 7, marginLeft: 10 }}>
                            <Feather
                                name="alert-circle"
                                size={9}
                                color='red'
                                style={{ marginRight: 4, marginTop: 3 }} />
                            <Text style={styles.error}>Username is required.</Text>
                        </View>
                    )}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            minLength: 1
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor={'gray'}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                underlineColorAndroid="transparent"
                                left={<TextInput.Icon icon="lock-outline" color={Colors.gray} />}
                                right={
                                    <TextInput.Icon
                                        icon={showPassword ? 'eye-off' : 'eye'}
                                        onPress={togglePasswordVisibility}
                                    />
                                }
                            />
                        )}
                        name="password"
                    />
                    {errors.password && errors.password.type === "required" && (
                        <View style={{ flexDirection: 'row', marginTop: 7, marginLeft: 10 }}>
                            <Feather
                                name="alert-circle"
                                size={9}
                                color='red'
                                style={{ marginRight: 4, marginTop: 3 }} />

                            <Text style={styles.error}>Password is required.</Text>
                        </View>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <View style={{ flexDirection: 'row', marginTop: 7, marginLeft: 10 }}>
                            <Feather
                                name="alert-circle"
                                size={9}
                                color='red'
                                style={{ marginRight: 4, marginTop: 3 }} />
                            <Text style={styles.error}>
                                Password should be at-least 8 characters.
                            </Text>
                        </View>
                    )}
                </View>
                <Text style={styles.forgetBtn} onPress={() => navigation.navigate('ForgetPasswordScreen')}>Forget password ?</Text>
                <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={colors.brand_primary} />
                    ) : (
                        <Text style={styles.btnText}>Login</Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_primary,
        flex: 1,
    },
    img: {
        height: width * 0.7,
        width: width * 0.99,
        alignSelf: 'center',
    },
    welcomeText: {
        alignSelf: 'center',
        color: Colors.white,
        fontSize: 26,
        fontFamily: 'Poppins-Bold',
        marginTop: width * 0.1,
        marginBottom: width * 0.06,
    },
    textInput: {
        backgroundColor: Colors.white,
        width: width * 0.8,
        alignSelf:'center',
    },
    inputsView: {
        width: width * 0.9,
        alignSelf: 'center',
        marginTop: width * 0.07,
        backgroundColor: colors.white,
        paddingVertical:0,
        borderRadius:20,
    },
    btn: {
        paddingVertical: 8,
        paddingHorizontal: 30,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        alignItems: 'center',
        width: width * 0.35,
        marginTop: width * 0.08,
        borderRadius: 10,
        marginBottom: 20,
    },
    btnText: {
        color: Colors.brand_primary,
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
    },
    forgetBtn: {
        color: Colors.white,
        paddingVertical: 10,
        width: width * 0.8,
        alignSelf: 'center',
        marginBottom: width * 0.07,

    },
    error: {
        color: colors.red,
        marginBottom: 10,
        //  backgroundColor:colors.brand_primary,
    },
});
