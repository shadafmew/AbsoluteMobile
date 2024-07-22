import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';
import { getMethod } from '../../../utils/helper';


const { width } = Dimensions.get('window');


interface Task {
    id: string;
    image: any;
    address: string;
    time: string;
    status: string;
}

interface Props { }
const CompletedTasksScreen: FC<Props> = ({ navigation, route }: any): JSX.Element => {

    const { userId } = route.params;
    // console.log("userId", userId)

    const [data, setData] = useState([])

    useEffect(() => {
        completedJob();
    }, [])



    const completedJob = async () => {
        try {
            const api: any = await getMethod(`completedjob/${userId}`)
            if (api.data.success === true) {
                // console.log("first---", api.data.data.completed_job[0],)
                setData(api.data.data.completed_job)
            } else {
                console.log("else")
            }
        } catch {
            console.log("catch")
        }
    }



    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView>
                <View style={styles.cards}>
                    <Text style={styles.heading}>Completed Job</Text>
                    <View style={styles.innerCard}>
                        {data.map((item, index) => (
                            <View style={styles.listView} key={index}>
                                <Image source={require('../../images/cleaners1.png')} style={styles.image} />
                                <View style={styles.detail}>
                                    <Text style={styles.add}>{item.address}</Text>
                                    <Text style={styles.time}>{item.startDate}, {item.startTime}</Text>
                                    <Text style={styles.status}>Completed</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CompletedTasksScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
    },
    heading: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: colors.black,
        alignSelf: 'center',
        marginBottom: width * 0.06,
    },
    cards: {
        paddingBottom: 30,
        backgroundColor: colors.brand_secondary,
        paddingTop: 30,

    },
    innerCard: {
        borderRadius: 10,
        backgroundColor: colors.white,
        paddingTop: 5,
        paddingBottom: 3,
        flex: 1,
        // paddingTop:5,

        width: width * 0.9,
        alignSelf: 'center',

    },
    listView: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: width * 0.9,
        alignSelf: 'center',
        padding: 10,
        // borderRadius: 8,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1,
    },
    listViewPending: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        width: width * 0.9,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        borderColor: '#D0D0D0',
        borderWidth: 1,
    },
    add: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: colors.black,

    },
    time: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: colors.black,

    },
    status: {
        fontFamily: 'Poppins-Medium',
        color: colors.black,
        fontSize: 14,

    },
    earnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    earning: {
        fontFamily: 'Poppins-Regular',
        color: colors.brand_primary,
        fontSize: 10,

    },
    amount: {
        fontFamily: 'Poppins-Medium',
        color: colors.brand_primary,
        fontSize: 14,
    },
    detail: {
        width: width * 0.55,
        marginLeft: 10,
        justifyContent: 'center',
        // alignItems:'center',
    },
    image: {
        height: width * 0.25,
        width: width * 0.25,
    },
});
