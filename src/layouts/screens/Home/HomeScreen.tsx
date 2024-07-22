
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, Pressable, TouchableOpacity, } from 'react-native';
import colors from '../../style/Colors';
import { Surface } from 'react-native-paper';
import Appbar from '../../Component/Appbar';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getMethod, getStorageData } from '../../../utils/helper';

const { width, height } = Dimensions.get('window');

interface Props { }
const HomeScreen: FC<Props> = ({ route, navigation }: any): JSX.Element => {


    const [data, setData] = useState([])
    const [updata, setUpData] = useState([]);
    const [loading, setLoading] = useState(true);

    //    console.log('------------->>>>>>>>>',user.id)


    useEffect(() => {
        aboutUs();
        getUserData();
    }, [])


    const getUserData = async () => {
        try {
            const getData = await getStorageData();
            if (getData) {
                setData(getData.data.user);
                // console.log(data.id, 'LOgin--------')

            }
            // setLoad(false);
        } catch (error) {
            console.log('Initiate data error');
            // setLoad(false);
        }
    };

    const aboutUs = async () => {
        try {
            const api: any = await getMethod(`getmonthlyreview/${data.id}`)
            if (api.data.success === true) {
                console.log("first---", api.data.data)
                setUpData(api.data.data)
            } else {
                console.log("else")
            }
        } catch {
            console.log("catch")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text> </Text>
                <IonIcon name="arrow-back" color={colors.white} size={24} onPress={() => navigation.goBack()} />
                <Image source={require('../../images/logo.png')} style={styles.logo} />
                <View style={styles.align}>
                    <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')} style={styles.bell}>
                        <IonIcon name="calendar-sharp" color={colors.brand_primary} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')} style={styles.bell}>
                        <MaterialCommunityIcons name="bell" color={colors.brand_primary} size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cover}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={styles.text}>Hi, {data.first_name} {data.last_name}</Text>
                    <Image source={require('../../images/profile-icon.png')} style={styles.profile} />
                </View>
                <View style={styles.tasks}>
                    <View style={styles.card}>
                        <Text style={styles.text1}>Weekly Task</Text>
                        <Pressable onPress={() => navigation.navigate('WeeklyTaskScreen')}
                            style={styles.viewTaskBtn}>
                            <Text style={styles.text3}>View All Task</Text><IonIcon name="chevron-forward-outline" color={colors.white} size={16} style={{ marginLeft: 5, marginTop: 5, }} />
                        </Pressable>
                    </View>
                    <Text style={styles.monthly}>Monthly Review</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CompletedTasksScreen', {userId:data.id})}>
                            <Surface style={styles.surface} elevation={4}>
                                <Text style={styles.number}>{updata.completed_count}</Text>
                                <Text style={styles.surfaceText}>Completed Job</Text>
                            </Surface>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('PendingJobsScreen', {userId:data.id})}>
                            <Surface style={styles.surface} elevation={4}>
                                <Text style={styles.number}>{updata.pending_count}</Text>
                                <Text style={styles.surfaceText}>Pending Job</Text>
                            </Surface>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btns} >
                    <TouchableOpacity onPress={() => navigation.navigate('PunchInScreen')} style={styles.clockInBtn}>
                        <Text style={styles.btnText}>Clock In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PunchOutScreen')} style={styles.clockOutBtn}>
                        <Text style={styles.btnText}>Clock Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F9FF'
    },
    header: {
        backgroundColor: '#F5F9FF',
        height: width * 0.35,

    },
    clockView: {
        height: width * 0.26,
        backgroundColor: colors.white,
        paddingTop: width * 0.06,
        paddingLeft: width * 0.06,
    },
    clock: {
        backgroundColor: '#7CA942',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 7,
        alignSelf: 'flex-start'
    },
    clockText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    text: {
        color: colors.black,
        fontSize: 18,
        marginTop: 10,
        fontFamily: 'Poppins-Medium',
        // paddingHorizontal: 15,

    },
    cover: {
        paddingVertical: 26,
    },
    text_secondary: {
        color: colors.brand_primary,
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    card: {
        borderColor: colors.brand_tertiary,
        backgroundColor: colors.brand_primary,
        borderWidth: 1,
        padding: 15,
        marginTop: 20,
        borderRadius: 8,
        // paddingBottom: 30,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 15,

    },
    text1: {
        fontSize: 14,
        marginTop: 4,
        color: colors.white,
        fontFamily: 'Poppins-Medium'
    },
    text2: {
        fontSize: 12,
        color: colors.brand_primary,
        fontFamily: 'Poppins-Regular'
    },
    text3: {
        color: colors.white,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        marginTop: 5,


    },
    monthly: {
        color: colors.black,
        fontSize: 20,
        marginTop: 25,
        fontWeight: '700',
        fontFamily: 'Poppins-Medium',

    },
    surface: {
        marginTop: 10,
        backgroundColor: colors.brand_primary,
        width: width * 0.4,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    surface2: {
        marginTop: 10,
        backgroundColor: colors.brand_tertiary,
        padding: 10,
        width: width * 0.37,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 15
    },
    surfaceText: {
        color: colors.white,
        borderRadius: 8,
        fontFamily: 'Poppins-Medium',
        fontSize: 12,

    },
    number: {
        fontSize: 42,
        color: colors.white,
        fontWeight: '600',
        fontFamily: 'Poppins-Medium',
    },
    align: {
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        color: colors.brand_primary,
        fontSize: 22,
        fontFamily: 'Poppins-Medium',

    },
    bell: {
        marginLeft: 20
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: colors.white,
        elevation: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    logo: {
        height: width * 0.15,
        width: width * 0.2,
    },
    viewTaskBtn: {
        flexDirection: 'row',
    },
    tasks: {
        backgroundColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 20,
        // marginBottom: width * 0.2,
        paddingBottom: width * 0.1,
        elevation: 8,
    },
    btns: {
        paddingTop: width * 0.2,
        paddingBottom: width * 0.06,
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: width * 0.12,

    },
    clockInBtn: {
        backgroundColor: colors.green_box,
        paddingTop: 10,
        paddingBottom: 8,
        alignSelf: 'center',
        borderRadius: 8,
        width: width * 0.32,
    },
    clockOutBtn: {
        backgroundColor: colors.brand_primary,
        paddingTop: 10,
        paddingBottom: 8,
        alignSelf: 'center',
        borderRadius: 8,
        width: width * 0.32,

    },
    btnText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',

    },
    profile: {
        height: width * 0.18,
        width: width * 0.18,
        // bpadding:'red',



    },
});
