import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../../style/Colors';
import Appbar from '../../Component/Appbar';
import { Card } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { getMethod } from '../../../utils/helper';




const { width, height } = Dimensions.get('window');

interface Props { }
const CompletedJobScreen: FC<Props> = ({ navigation,route }: any): JSX.Element => {


    const { userId } = route.params;
    console.log("userId", userId)

    const [data, setData] = useState([])

    useEffect(() => {
        pendingData();
    }, [])



    const pendingData = async () => {
        try {
            const api: any = await getMethod(`pendingjob/${userId}`)
            if (api.data.success === true) {
                console.log("first---", api.data.data.pending_job[0],)
                setData(api.data.data.pending_job)
            } else {
                console.log("else")
            }
        } catch {
            console.log("catch")
        }
    }

    
    return (
        <View style={styles.container}>
            <View>
                <Appbar backgroundColor={colors.white} navigation={navigation} />
            </View>
            <ScrollView style={{ backgroundColor: colors.white }}>
                <View>
                    <Text style={styles.headingText}>Completed</Text>
                </View>
                <View style={styles.outer}>
                    {/* <TouchableOpacity style={styles.card2} >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35, }}>
                                <Image source={require('../../images/cleaners1.png')} />
                            </View>
                            <View style={{ width: width * 0.47, }}>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText3}>Completed</Text>
                                </View>
                                <TouchableOpacity style={styles.inspectionBtn} onPress={() => navigation.navigate('DetailedCleaningScreen')}>
                                    <Text style={styles.inspectionBtnText}>Inspection</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35, }}>
                                <Image source={require('../../images/cleaners2.png')} />
                            </View>
                            <View style={{ width: width * 0.47, }}>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText3}>Completed</Text>
                                </View>
                                <TouchableOpacity style={styles.inspectionBtn}>
                                    <Text style={styles.inspectionBtnText}>Inspection</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35, }}>
                                <Image source={require('../../images/cleaners3.png')} />
                            </View>
                            <View style={{ width: width * 0.47, }}>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText3}>Completed</Text>
                                </View>
                                <TouchableOpacity style={styles.inspectionBtn}>
                                    <Text style={styles.inspectionBtnText}>Inspection</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card2}
                    // onPress={()=>navigation.navigate('TaskDetails')}
                    >
                        <View style={styles.outerView}>
                            <View style={{ width: width * 0.35, }}>
                                <Image source={require('../../images/cleaners4.png')} />
                            </View>
                            <View style={{ width: width * 0.47, }}>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText2}>Karol Bhagh ,w. no. -17 ,Delhi 123562</Text>
                                </View>
                                <View style={styles.cardView}>
                                    <Text style={styles.cardViewText3}>Completed</Text>
                                </View>
                                <TouchableOpacity style={styles.inspectionBtn}>
                                    <Text style={styles.inspectionBtnText}>Inspection</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </View>
    );
};

export default CompletedJobScreen;

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
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: colors.brand_primary,
        marginBottom: 10,
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
        backgroundColor: colors.CompletedCard_bg,
        width: width * 0.89,
        alignSelf: 'center',
        // height: 100,
        padding: 15,
        // marginVertical: 6,
        flexDirection: 'row',
        borderBottomColor: '#BCBCBC',
        borderBottomWidth: 1,
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
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        width: width * 0.45,
    },
    cardViewText3: {
        color: colors.brand_primary,
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        width: width * 0.45,
    },
    watchImage: {
        height: 17,
        width: 17,
    },
    iconView: {
        width: 25,
    },
    outerView: {
        flexDirection: 'row',
    },
    outer: {
        marginBottom: 50,
        backgroundColor: colors.CompletedCard_bg,
        width: width * 0.9,
        alignSelf: 'center',
        borderColor: '#BCBCBC',
        borderWidth: 1,
    },
    inspectionBtn: {
        backgroundColor: colors.brand_primary,
        alignSelf: 'flex-end',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 3,
    },
    inspectionBtnText: {
        color: colors.white,
        fontFamily: 'Poppins-Regular',
        fontSize: 12,

    }
})