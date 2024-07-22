import React from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../style/Colors';
import { TouchableOpacity } from 'react-native';


const { width, height } = Dimensions.get('window');

interface Props { }
const RemarkScreen: FC<Props> = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <IonIcon name="arrow-back" color={colors.brand_primary} size={24} onPress={() => navigation.goBack()} style={styles.backIcon} />
            <ScrollView>
                <View style={styles.btnView}>
                    <Text style={styles.text}>Damage / Defect :</Text>
                    <TouchableOpacity style={styles.inspectionBtn}>
                        <Text style={styles.inspectionBtnText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inspectionBtn}>
                        <Text style={styles.inspectionBtnText}>No</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.remarkView}>
                    <View style={styles.remarkViewInner}>
                        <Text style={styles.remark}>Remark :</Text>
                        <Text style={styles.texts}>1. In the event of damage ,this must  be repord
                            to our operation team or site-supervisor
                            before the end of the cleaning session. This
                            open an official damage  case, furth inform
                            -ation and photographs will be requested.
                        </Text>
                        <Text style={styles.texts}>2. the event of damage ,this must  be repord
                            to our operation team or site-supervisor
                            before the end of the cleaning session. This
                            open an official damage  case, furth infor
                            -mation and photographs will be requested.
                        </Text>
                        <Text style={styles.texts}>3. in the event of damage ,this must  be repord
                            to our operation team or site-supervisor
                            before the end of the cleaning session. This
                            open an official damage  case, furth infor
                            -mation and photographs will be requested.
                        </Text>
                        <Text style={styles.texts}>4. in the event of damage ,this must  be repord
                            to our operation team or site-supervisor
                            before the end of the cleaning session. This
                            open an official damage  case, furth information
                            and photographs will be requested.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default RemarkScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    backIcon: {
        paddingVertical: 20,
        paddingLeft: 10,
    },
    btnView: {
        backgroundColor: colors.brand_secondary,
        paddingVertical: 20,
        paddingHorizontal: 15,
        elevation: 8,
    },
    inspectionBtn: {
        backgroundColor: colors.brand_primary,
        paddingVertical: 4,
        borderRadius: 1,
        marginTop: 10,
        alignItems: 'center',
    },
    inspectionBtnText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    text: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    texts: {
        color: colors.black,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
    remarkView: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    remarkViewInner: {
        paddingVertical: 30,
        paddingHorizontal: 10,
        borderColor: colors.gray_font_color,
        borderWidth: 1,
        borderRadius: 8,
    },
    remark: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
});
