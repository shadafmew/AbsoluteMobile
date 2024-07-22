import React from 'react';
import { FC } from 'react';
import { ScrollView,Dimensions,StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import colors from '../../style/Colors';
import { Image } from 'react-native';
import Appbar from '../../Component/Appbar';


const {width} = Dimensions.get('window')
interface Props { }
const ProjectScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    const imagePaths = [
        require('../../images/avatar1.png'),
        require('../../images/avatar2.png'),
        require('../../images/avatar3.png')
    ];
    return (
        <View style={styles.container}>
            <Appbar title={'Project'} backgroundColor={colors.white} navigation={navigation} />
            <ScrollView>
                <View style={{ paddingBottom: 50,backgroundColor:colors.brand_secondary }}>
                    <Card style={styles.card} onPress={() => navigation.navigate('TaskScreen')}>
                        <View style={styles.align}>
                            <Image style={styles.img} source={require('../../images/cardImage.png')} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.testProject}>Project #12356</Text>
                                <Text style={styles.textDescription}>Residential Cleaning</Text>
                            </View>
                        </View>
                        <View style={styles.align1}>
                            <Text style={styles.start}>Start Date</Text>
                            <Text style={styles.end}>End Date</Text>
                        </View>
                        <View style={styles.align1}>
                            <Text style={styles.startDate}>28-04-2023</Text>
                            <Text style={styles.endDate}>20-05-2023</Text>
                        </View>
                        <View style={styles.align2}>
                            <Text style={styles.team}>Team Members</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                {imagePaths.map((path, index) => (
                                    <Image
                                        key={index}
                                        style={styles.tinyImg}
                                        source={path}
                                    />
                                ))}
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.align}>
                            <Image style={styles.img} source={require('../../images/cardImage.png')} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.testProject}>Project #12356</Text>
                                <Text style={styles.textDescription}>Residential Cleaning</Text>
                            </View>
                        </View>
                        <View style={styles.align1}>
                            <Text style={styles.start}>Start Date</Text>
                            <Text style={styles.end}>End Date</Text>
                        </View>
                        <View style={styles.align1}>
                            <Text style={styles.startDate}>28-04-2023</Text>
                            <Text style={styles.endDate}>20-05-2023</Text>
                        </View>
                        <View style={styles.align2}>
                            <Text style={styles.team}>Team Members</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                {imagePaths.map((path, index) => (
                                    <Image
                                        key={index}
                                        style={styles.tinyImg}
                                        source={path}
                                    />
                                ))}
                            </View>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.align}>
                            <Image style={styles.img} source={require('../../images/cardImage.png')} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={styles.testProject}>Project #12356</Text>
                                <Text style={styles.textDescription}>Residential Cleaning</Text>
                            </View>
                        </View>
                        <View style={styles.align1}>
                            <Text style={styles.start}>Start Date</Text>
                            <Text style={styles.end}>End Date</Text>
                        </View>
                        <View style={styles.align1}>
                            <Text style={styles.startDate}>28-04-2023</Text>
                            <Text style={styles.endDate}>20-05-2023</Text>
                        </View>
                        <View style={styles.align2}>
                            <Text style={styles.team}>Team Members</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                {imagePaths.map((path, index) => (
                                    <Image
                                        key={index}
                                        style={styles.tinyImg}
                                        source={path}
                                    />
                                ))}
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
};

export default ProjectScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // padding: 14
    },
    card: {
        borderRadius: 20,
        elevation: 10,
        backgroundColor: colors.white,
        margin: 10,
        width:width*0.85,
        alignSelf:'center',

    },
    align1: {
        marginLeft: -20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    align2: {
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    align: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 14
    },
    img: {
        height: 40,
        width: 40,
        marginTop: 8
    },
    testProject: {
        color: colors.brand_primary,
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    textDescription: {
        color: colors.brand_primary,
        fontSize: 12,
        fontFamily: 'Poppins-Medium'

    },
    start: {
        color: colors.gray,
        fontSize: 12,
        fontFamily: 'Poppins-Medium'

    },
    end: {
        color: colors.gray,
        fontSize: 12,
        fontFamily: 'Poppins-Medium'

    },
    startDate: {
        color: colors.lightGray,
        fontSize: 12,
        fontFamily: 'Poppins-Regular'

    },
    endDate: {
        color: colors.lightGray,
        fontSize: 12,
        fontFamily: 'Poppins-Regular'

    },
    team: {
        marginTop: 10,
        color: colors.gray,
        fontSize: 14,
        fontFamily: 'Poppins-Medium'

    },
    tinyImg: {
        height: 30,
        width: 30,
        marginRight: -10
    }
})
