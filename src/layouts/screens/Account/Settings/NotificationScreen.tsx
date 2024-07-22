import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import colors from '../../../style/Colors';
import Appbar from '../../../Component/Appbar';


const { width, height } = Dimensions.get('window');

interface Props { }
const NotificationScreen: FC<Props> = ({ navigation }: any): JSX.Element => {

    interface Pay {
        id: string;
        Data: string;
    }
    const pay: Pay[] = [
        { id: '1', Data: 'You have completed 1 Task of Project #12345 ', },
        { id: '2', Data: 'You have completed 1 Task of Project #12345 ', },
        { id: '3', Data: 'You have completed 1 Task of Project #12345 ', },
        { id: '4', Data: 'You have completed 1 Task of Project #12345 ', },
        { id: '5', Data: 'You have completed 1 Task of Project #12345 ', },
        { id: '6', Data: 'You have completed 1 Task of Project #12345 ', },
    ];

    const renderItem = ({ item }: { item: Pay }) => (
        <View style={styles.noti}>
            <Text style={styles.emote}>●</Text>
            <Text style={styles.notiText}>{item.Data}</Text>
        </View>
    );

    return (
        <>
            <Appbar navigation={navigation} />
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ marginTop: 10, padding: 10, alignSelf: 'center', }}>
                        <View><Text style={styles.text}>You have <Text style={styles.notificationsCount}>3 notifications</Text> today</Text></View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={styles.dayHead}>Today</Text>
                            <FlatList
                                data={pay}
                                keyExtractor={(item) => item.id}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.brand_secondary,
        flex: 1,
    },
    innerContainer: {
        backgroundColor: colors.brand_secondary,
        paddingBottom: 30,
        elevation: 8
    },
    text: {
        color: colors.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    notificationsCount: {
        color: colors.brand_primary,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,

    },
    dayHead: {
        fontSize: 20,
        color: colors.brand_primary,
        fontFamily: 'Poppins-Medium',
        marginVertical: 20
    },
    emote: {
        fontSize: 20,
        color: colors.brand_primary,
        marginRight: 8
    },
    notiText: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        marginTop: 7,
        width: width * 0.8,

    },
    noti: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: width * 0.9,
        padding: 8,
        borderRadius: 8,
        elevation: 8,
        marginBottom: 10,
    },
});
