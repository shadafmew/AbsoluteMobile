import React, { useRef } from 'react';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignatureScreen from "react-native-signature-canvas";



interface Props { }
const WhiteBoardScreen: FC<Props> = (): JSX.Element => {
    const signatureRef = useRef(null);

    return (
        <View style={styles.container}>
            <Text>WhiteBoardScreen</Text>
            <View style={styles.whiteBoard}>
                <SignatureScreen
                    ref={signatureRef}
                    // onOK={handleOK}
                />
            </View>
        </View>
    );
};

export default WhiteBoardScreen;

const styles = StyleSheet.create({
    container: {

    },
    whiteBoard: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
    },
});
