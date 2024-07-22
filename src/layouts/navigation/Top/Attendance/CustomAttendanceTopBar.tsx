import React from 'react';
import { FC } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import colors from '../../../style/Colors';



const { width, height } = Dimensions.get('window');

interface Props {}
const CustomAttendanceTopBar: FC<Props> = ({state, descriptors, navigation, date, toggleModal }:any): JSX.Element => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>    
        {state.routes.map((route:
        {
            key: string | number;
            name: any;
        },
        index: React.Key | null | undefined
    ) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
        };

        return (
            <TouchableOpacity
                key={index}
                activeOpacity={0.6}
                onPress={onPress}
                style={[styles.tabButton, isFocused && styles.tabButtonActive]}
            >
                <Text style={[styles.tabText, isFocused && styles.tabTextActive]}>{label}</Text>
            </TouchableOpacity>
        );
    })}
    </View>

</View>
);
};

export default CustomAttendanceTopBar;

const styles = StyleSheet.create({

    container: {
                
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight:width*0.05,
        backgroundColor: colors.white,
        alignSelf:'flex-end',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius:20,
        

    },
    tabButton: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        width: width * 0.21,
        paddingVertical: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabButtonActive: {
        backgroundColor: colors.white,
        borderRadius: 3,
    },
    tabText: {
        alignSelf: 'center',
        color: colors.black,
    },
    tabTextActive: {
        color: '#1890FF',
        fontWeight: '700',
    },
})
