import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../style/Colors';
import Entypo from 'react-native-vector-icons/Entypo';


const { width, height } = Dimensions.get('window');

const CustomTimesheetBar = ({ state, descriptors, navigation, date, toggleModal }: any) => {
    return (
        <View style={styles.container}>
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
    )
}

export default CustomTimesheetBar

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.ChechIn_bg,
        paddingVertical: 15,
    },
    tabButton: {
        borderColor: colors.gray,
        width: width * 0.29,
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        borderRadius: 8,


    },
    tabButtonActive: {
        borderBottomWidth: 0,
        // borderBottomColor: 'red',
        backgroundColor: colors.green_box,
        borderRadius: 8,
        elevation: 8,
    },
    tabText: {
        alignSelf: 'center',
        color: colors.white,
    },
    tabTextActive: {
        color: colors.white,
        fontWeight: '700',
    },
})