import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Image, Text, View, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import colors from '../../style/Colors';
import Appbar from '../../Component/Appbar';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { getMethod, getStorageData } from '../../../utils/helper';


const { width, height } = Dimensions.get('window');

interface Task {
    id: string;
    day: string;
    isVisible: boolean;
    data: {
        taskType: string;
        time: string;
        custName: string;
        address: string;
        taskTypeSecond: string;
        timeSecond: string;
        custNameSecond: string;
        addressSecond: string;
        no: number;
    }[];
}



interface Props { }
const WeeklyTaskScreen: FC<Props> = ({ navigation, route }: any): JSX.Element => {

    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [data, setData] = useState([])
    const [info, setInfo] = useState([])
    const [expandedDays, setExpandedDays] = useState<string[]>([]);


    useEffect(() => {
        weeklyTask();
    }, [])

    const toggleDayVisibility = (day: string) => {
        if (expandedDays.includes(day)) {
            setExpandedDays(expandedDays.filter(d => d !== day));
        } else {
            setExpandedDays([...expandedDays, day]);
        }
    };

    const weeklyTask = async () => {
        try {
            const api: any = await getMethod('weeklytask')
            if (api.data.success === true) {
                setData(api.data.data)
                console.log("first---", api.data.data)
            } else {
                console.log("else")
            }
        } catch {
            console.log("catch")
        }
    }

    const HorizontalLine = () => {
        return <View style={styles.line} />;
    };

    return (
        <View style={styles.container}>
            <Appbar backgroundColor={colors.brand_secondary} navigation={navigation} />

            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.dateView}>
                        <Text style={styles.date}>Select week:</Text>
                        <View style={styles.dates}>
                            <Text style={styles.datesText}>17/07/2023 - 24/07/2023</Text>
                            <IonIcon name="calendar" color={colors.black} size={14} style={{ marginRight: 0 }} />
                        </View>
                    </View>

                    {/* {Object.keys(data).map((day) => (
                        <View key={day} style={styles.taskBtn}>
                            <TouchableOpacity style={styles.mondayTaskBtn} onPress={() => toggleDayVisibility(day)}>
                                <Text style={styles.day}>{day} Task</Text>
                                <IonIcon
                                    name={isVisible ? "chevron-down" : "chevron-forward-outline"}
                                    color={colors.black}
                                    size={20}
                                    style={{ marginLeft: 10 }}
                                />
                            </TouchableOpacity>
                            
                            {isVisible && (
                                data[day].tasks.map((task) => (
                                    <TouchableOpacity
                                        key={task.id}
                                        onPress={() => navigation.navigate('MapScreen')}
                                    >
                                        <View style={styles.dropDownView}>
                                            <View style={styles.topView}>
                                                <View style={styles.taskTypeView}>
                                                    <Text style={styles.taskType}>{task.cleaner_type}</Text>
                                                    <Text style={styles.time}>{task.startTime}</Text>
                                                </View>
                                                <Text style={styles.custName}>{task.customer_name}</Text>
                                                <View style={styles.addressView}>
                                                    <IonIcon
                                                        name="location-outline"
                                                        color={colors.brand_primary}
                                                        size={16}
                                                        style={{ marginRight: 10 }}
                                                    />
                                                    <Text style={styles.addressR}>{task.address}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            )}
                        </View>
                    ))} */}

                    {Object.keys(data).map((day) => (
                        <View key={day} style={styles.taskBtn}>
                            <TouchableOpacity
                                style={styles.mondayTaskBtn}
                                onPress={() => toggleDayVisibility(day)}
                            >
                                <Text style={styles.day}>{day} Task ({data[day][`total_task`]})</Text>
                                <IonIcon
                                    name={expandedDays.includes(day) ? "chevron-down" : "chevron-forward-outline"}
                                    color={colors.black}
                                    size={20}
                                    style={{ marginLeft: 10 }}
                                />
                            </TouchableOpacity>
                            {expandedDays.includes(day) && (
                                data[day].tasks.map((task, index) => (
                                    <TouchableOpacity
                                        key={task.id}
                                        onPress={() => navigation.navigate('MapScreen')}
                                    >
                                        <View style={styles.dropDownView}>
                                            <View style={styles.topView}>
                                                <View style={styles.taskTypeView}>
                                                    <Text style={styles.taskType}>{task.cleaner_type}</Text>
                                                    <Text style={styles.time}>{task.startTime}</Text>
                                                </View>
                                                <Text style={styles.custName}>{task.customer_name}</Text>
                                                <View style={styles.addressView}>
                                                    <IonIcon
                                                        name="location-outline"
                                                        color={colors.brand_primary}
                                                        size={16}
                                                        style={{ marginRight: 10 }}
                                                    />
                                                    <Text style={styles.addressR}>{task.address}</Text>
                                                </View>
                                            </View>
                                            {index < data[day].tasks.length - 1 && <HorizontalLine />}
                                        </View>
                                    </TouchableOpacity>
                                ))
                            )}
                        </View>
                    ))}

                </ScrollView>
            </View>
        </View>
    );
};

export default WeeklyTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        height: width * 0.3,
        backgroundColor: colors.brand_secondary,
    },
    logo: {
        height: width * 0.22,
        width: width * 0.3,
        alignSelf: 'center',
        // marginTop: 20
    },
    main: {
        padding: 15,
        flex: 1,
        backgroundColor: colors.brand_secondary,
    },
    name: {
        color: colors.brand_primary,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
    },
    date: {
        color: colors.black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },
    dateView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropDownView: {
    },
    mondayTaskBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskBtn: {
        borderColor: colors.gray_font_color,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
        backgroundColor: colors.white,
        // marginBottom:30
    },
    day: {
        color: colors.brand_primary,
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    taskTypeView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskType: {
        color: colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    time: {
        color: colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    custName: {
        color: colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    addressViewOuter: {
        flexDirection: 'row',
    },
    addressView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    address: {
        color: colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
    },
    addressR: {
        color: colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        width: width * 0.76,
    },
    topView: {
        paddingBottom: 10,
    },
    dates: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    datesText: {
        color: colors.black,
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        marginRight: 7,

    },
    line: {
        borderBottomColor: '#4DA7D9',
        borderBottomWidth: 1,
        marginBottom: 10, // Adjust the vertical spacing as needed
    },
});
