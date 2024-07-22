import React from 'react';
import { FC } from 'react';
import Appbar from '../../Component/Appbar';
import { ScrollView, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../../style/Colors';
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');
interface Props { }
const DetailedCleaningScreen: FC<Props> = ({navigation}:any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView>
                <View style={styles.header}>
                    <Image source={require('../../images/logo.png')} style={styles.logo} />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.texts}>Detailed Cleaning</Text>
                    <Text style={styles.text}>Created by Kene Ng</Text>
                    <Text style={styles.text}>Absolute Service Completion Report</Text>
                </View>
                <Image source={require('../../images/search.png')} style={styles.search} />
                <TouchableOpacity style={styles.inspectionBtn} onPress={()=>navigation.navigate('CustomerDetailScreen')}>
                    <Text style={styles.inspectionBtnText}>Start Inspection</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default DetailedCleaningScreen;

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.white,
        flex: 1,
    },

    header: {
        height: width * 0.3,
    },

    logo: {
        height: width * 0.22,
        width: width * 0.3,
        alignSelf: 'center',
        // marginTop: 20
    },
    detail: {
        backgroundColor: colors.brand_primary,
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    texts: {
        marginBottom: 10,
        fontWeight: "500",
        fontSize: 18,
        color: colors.white,
    },
    text: {
        marginBottom: 10,
        color: colors.white,
    },
    search: {
        height: height * 0.35,
        width: width * 0.7,
        alignSelf: 'center',
        marginVertical: 20,
    },
    inspectionBtn: {
        backgroundColor: colors.Datebg_green,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: 'center',
        borderRadius:8,
        marginTop:20,
        marginBottom:50
    },
    inspectionBtnText: {
        color: colors.white,
        fontSize:16,
        fontFamily:'Poppins-Regular',
    },
});
