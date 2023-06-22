import { Dimensions, StyleSheet, Text, View } from "react-native"
import React, { useRef } from "react"
import Lottie from "lottie-react-native"
import Modal from "react-native-modal"
import IconSuccess from "../../assets/success.json"
import ButtonComponent from "./button"
import Color from "@common/color"
const { width } = Dimensions.get("window")

type ListSuccessDialog = {
    title: string,
    titleButton: string,
    onBackdropPress(): void,
    isVisible: boolean,
    onPress(): void,
    bgColor: string
}

const SuccessDialog: React.FC<ListSuccessDialog> = (props) => {
    const successRef = useRef(null)
    return (
        <Modal
            animationInTiming={100}
            animationOutTiming={100}
            onBackdropPress={props.onBackdropPress}
            isVisible={props.isVisible}>
            <View style={[styles.container, { backgroundColor: props.bgColor }]}>
                <View style={styles.boxIcon}>
                    <Lottie
                        ref={successRef}
                        style={styles.lottieStyle}
                        source={IconSuccess}
                        autoPlay={true}
                        loop={false}
                    />
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.txtTitle}>
                        {props.title}
                    </Text>
                </View>
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btn}
                    title={props.titleButton}
                    titleStyle={styles.titleStyle}
                    onPress={props.onPress}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    lottieStyle: {
        width: 250,
        height: 250,
    },
    containerStyleBtn: {
        marginTop: 20,
        width: width / 1.7
    },
    txtTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Color.colorApp.DARKORANGE,
        textAlign: "center",
    },
    boxTitle: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    boxIcon: {
        paddingVertical: 10,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        padding: 20,
    },
    btn: {
        marginTop: 10,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default SuccessDialog