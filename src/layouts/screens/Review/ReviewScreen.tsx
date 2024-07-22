import React, { useEffect } from 'react';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import Appbar from '../../Component/Appbar';
import colors from '../../style/Colors';
import { TextInput } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Snackbar from 'react-native-snackbar';
import { postMethod,  } from '../../../utils/helper';


const { width } = Dimensions.get('window')

interface Props { }
const ReviewScreen: FC<Props> = ({ navigation }: any): JSX.Element => {


    useEffect(() => {
        update();
    }, [])

    const update = async () => {
    console.log("first")

        const raw = {

            damage: 'yes',
            remark: 'remark,,,,', 
            job_detail_id: '9',   

        }
        try {
            const api: any = await postMethod('update-damage-and-remark', raw);

            if (api.status === 200) {
                
                console.log("SUCCESS---->>>>>>>>>")
            }
            else {
            
                console.log("else....")
            }
        }
        catch (e) {
            console.log('catch', e)
            
        }
    }




    return (
        <View style={styles.container}>
            <Appbar navigation={navigation} />
            <ScrollView>
                <View style={styles.view}>
                    <Text style={styles.head}>Damage / Defect</Text>
                    <View style={styles.viewInner}>
                        <TouchableOpacity style={styles.StartTask} >
                            <Text style={styles.StartTaskText}>Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.StartTask}>
                            <Text style={styles.StartTaskText}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.head}>Remarks</Text>

                    <TextInput
                        activeUnderlineColor={colors.lightGray}
                        placeholder='Enter Remarks'
                        underlineColor={colors.white}
                        placeholderTextColor={colors.gray}
                        multiline={true}
                        numberOfLines={5}
                        // value={value}
                        // onChangeText={value => onChange(value)}
                        style={styles.input}
                    // left={<TextInput.Icon icon="lock-outline" color={colors.gray} />}
                    />
                </View>
                <Pressable style={styles.nextbtn} 
                onPress={update}
                // onPress={() => navigation.navigate('CustomerReviewScreen')}
                >
                    <Text style={styles.nextbtnText}>Next</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default ReviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brand_secondary,
    },
    view: {
        marginTop: 30,
    },
    head: {
        color: colors.black,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 10,
    },
    StartTaskText: {
        fontSize: 16,
        color: colors.white,
        marginTop: 5,
        fontFamily: 'Poppins-Medium'
    },
    StartTask: {
        alignItems: 'center',
        backgroundColor: colors.brand_primary,
        // height: 40,
        // width: 130,
        alignSelf: 'center',
        borderRadius: 8,
        // marginVertical: 50,
        // paddingHorizontal: 15,
        paddingVertical: 4,
        width: width * 0.3,
    },
    viewInner: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 8,
        elevation: 8,
    },
    view2: {
        backgroundColor: colors.white,
        paddingVertical: 20,
        elevation: 8,
        marginTop: 20,
    },
    input: {
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 8,
        width: width * 0.9,
        alignSelf: 'center',
        color: colors.black,
        backgroundColor: colors.white,
    },
    nextbtn: {
        alignItems: 'center',
        backgroundColor: colors.brand_primary,
        alignSelf: 'flex-end',
        borderRadius: 8,
        paddingVertical: 4,
        width: width * 0.35,
        marginTop: width * 0.2,
        marginRight: 15,
        marginBottom: 30,
    },
    nextbtnText: {
        fontSize: 16,
        color: colors.white,
        marginTop: 5,
        fontFamily: 'Poppins-Medium',
    },
});
