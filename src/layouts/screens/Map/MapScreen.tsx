import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const { width, height } = Dimensions.get('window');

interface Props { }
const MapScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Appbar backgroundColor={colors.brand_secondary} navigation={navigation} />

            <ScrollView>
                <View style={styles.customerDetails}>
                    <View style={styles.imageView}>
                        <Image source={require('../../images/costumer-profile.png')} style={styles.customerImage} />
                    </View>
                    <View style={styles.customerDetailsView}>
                        <Text style={styles.name}>David Jones</Text>
                        <Text style={styles.workType}>Commercial Cleaning</Text>
                        <Text style={styles.workType}>15 Nov 2023, 10:00am</Text>
                        <Text style={styles.address}>1, yishun industrial street, 1#07-36 aposh bizuph, singapore,515545</Text>

                    </View>
                </View>
                <View style={{ height: width * 0.7, marginTop: 20, }}>
                    <View style={styles.mapView}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                        </MapView>
                    </View>
                </View>
                <View>
                    <Pressable style={styles.StartTask} onPress={() => navigation.navigate('StartTaskScreen')}>
                        <Text style={styles.StartTaskText}>Next</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brand_secondary,
        paddingBottom: 30,
    },
    header: {
        height: width * 0.18,
        backgroundColor: colors.brand_secondary,
    },
    logo: {
        height: width * 0.16,
        width: width * 0.22,
        alignSelf: 'center',
    },
    imageView: {
        height: width * 0.2,
        width: width * 0.2,
        borderRadius: 60,
        marginRight: 20,
    },
    customerImage: {
        height: width * 0.20,
        width: width * 0.20,
        alignSelf: 'center',
    },
    call: {
        height: width * 0.05,
        width: width * 0.05,
        marginRight: 10,
    },
    name: {
        fontFamily: 'Poppins-Medium',
        color: colors.black,
        fontSize: 16,
    },
    workType: {
        fontFamily: 'Poppins-Regular',
        color: colors.black,
        fontSize: 12,
        marginTop: -6,
    },
    address:{
        fontFamily: 'Poppins-Regular',
        color: colors.black,
        fontSize: 10,
        // marginTop: -6,
    },
    customerDetails: {
        flexDirection: 'row',
        // width: width * 0.8,
        // alignSelf: 'center',
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor:colors.white,
        paddingLeft:20,
        elevation:8,
    },
    map: {
        height: '100%',
        width: '100%',
    },
    StartTaskText: {
        fontSize: 18,
        color: colors.white,
        marginTop: 4,
        fontFamily: 'Poppins-Medium',
        paddingVertical: 6,
        paddingHorizontal: 15,

    },
    StartTask: {
        alignItems: 'center',
        backgroundColor: colors.brand_primary,
        alignSelf: 'flex-end',
        borderRadius: 8,
        marginVertical: 50,
        paddingHorizontal: 20,
        marginRight:'5%',
    },
    customerDetailsView: {
        // backgroundColor:'red',
        width:width*0.65,

    },
    mapView:{ height: '100%', backgroundColor: 'lightgrey', marginTop: 0, width: '90%', marginLeft: '5%', borderColor:'black',borderWidth:1,borderRadius:10,padding:5, }
});
