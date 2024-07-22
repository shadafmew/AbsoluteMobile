import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import colors from '../../style/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Appbar from '../../Component/Appbar';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Image } from 'react-native';


const { width, height } = Dimensions.get('window');


interface Props { }
const TaskScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <Appbar title={'Project #12345'} backgroundColor={colors.white} navigation={navigation} />
            </View>
            <ScrollView style={{ backgroundColor: '#EFF6FF', }}>
                <View>
                    <Text style={styles.headingText}>Task</Text>
                </View>
                <View style={{ marginBottom: 50 }}>
                    <Card style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35,}}>
                                <Image source={require('../../images/cleaners1.png')} />
                            </View>
                            <View style={{ width: width * 0.5,}}>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="location-sharp" color={colors.brand_primary} size={15} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../images/timer-stopwatch.png')} style={styles.watchImage} />
                                    </View>
                                    <Text style={styles.cardViewText2}>10:30 am - 12:30 pm</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="calendar-sharp" color={colors.brand_primary} size={14} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>26-04-2023</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35,}}>
                                <Image source={require('../../images/cleaners2.png')} />
                            </View>
                            <View style={{ width: width * 0.5,}}>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="location-sharp" color={colors.brand_primary} size={15} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../images/timer-stopwatch.png')} style={styles.watchImage} />
                                    </View>
                                    <Text style={styles.cardViewText2}>10:30 am - 12:30 pm</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="calendar-sharp" color={colors.brand_primary} size={14} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>26-04-2023</Text>
                                </View>
                            </View>
                        </View>
                    </Card>

                    <Card style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35,}}>
                                <Image source={require('../../images/cleaners3.png')} />
                            </View>
                            <View style={{ width: width * 0.5,}}>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="location-sharp" color={colors.brand_primary} size={15} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../images/timer-stopwatch.png')} style={styles.watchImage} />
                                    </View>
                                    <Text style={styles.cardViewText2}>10:30 am - 12:30 pm</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="calendar-sharp" color={colors.brand_primary} size={14} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>26-04-2023</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35,}}>
                                <Image source={require('../../images/cleaners4.png')} />
                            </View>
                            <View style={{ width: width * 0.5,}}>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="location-sharp" color={colors.brand_primary} size={15} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../images/timer-stopwatch.png')} style={styles.watchImage} />
                                    </View>
                                    <Text style={styles.cardViewText2}>10:30 am - 12:30 pm</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <View style={styles.iconView}>
                                        <IonIcon name="calendar-sharp" color={colors.brand_primary} size={14} style={{ marginRight: 5 }} />
                                    </View>
                                    <Text style={styles.cardViewText2}>26-04-2023</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
};

export default TaskScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    projectNo: {
        color: colors.brand_primary,
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
    },
    headingText: {
        fontSize: 24,
        fontFamily: 'Poppins-Medium',
        color: colors.black,
        marginVertical: 20,
        alignSelf: 'center',
    },
    card: {
        backgroundColor: colors.brand_primary,
        width: width * 0.9,
        alignSelf: 'center',
        // height: 100,
        padding: 15,
        marginVertical: 6
    },
    card2: {
        backgroundColor: colors.brand_secondary,
        width: width * 0.9,
        alignSelf: 'center',
        // height: 100,
        padding: 15,
        marginVertical: 6,
        flexDirection: 'row',
    },
    cardView: {
        flexDirection: 'row',
        marginVertical: 3
    },
    cardViewHeadText: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    cardViewText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    cardViewHeadText2: {
        color: colors.brand_primary,
        // color: colors.gray_font,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    cardViewText2: {
        color: colors.brand_primary,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        width:width*0.4,
    },
    watchImage: {
        height: 17,
        width: 17,
    },
    iconView: {
        width: 25,
    },
    outerView:{
        flexDirection:'row',
    }
})