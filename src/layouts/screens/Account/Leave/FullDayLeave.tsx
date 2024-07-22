import React from 'react';
import { FC } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import colors from '../../../style/Colors';


const { width, height } = Dimensions.get('window');

interface Props { }
const FullDayLeave: FC<Props> = ({navigation}:any): JSX.Element => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.calendar}>
                    <CalendarPicker
                        previousTitleStyle={{ color: 'black' }}
                        nextTitleStyle={{ color: 'black' }}
                        width={width * 0.8}
                        height={width * 0.9}
                        
                    // onDateChange={onDateChange}
                    />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Apply</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default FullDayLeave;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderLeftColor:colors.lightGray,
        borderRightColor:colors.lightGray,
        borderTopColor:colors.white,
        borderBottomColor:colors.lightGray,
        borderWidth:1,
        // marginBottom:15,
        borderBottomRightRadius:8,
        borderBottomLeftRadius:8,
    },
    calendar:{
        borderColor:colors.lightGray,
        borderWidth:1,
        borderRadius:8,
        padding:5,
    },
    btn:{
        backgroundColor:colors.brand_primary,
        alignSelf:'center',
        paddingHorizontal:25,
        paddingVertical:6,
        marginVertical:width*0.1,
        borderRadius:8,
    },
    btnText:{
        color:colors.white
    },

});
