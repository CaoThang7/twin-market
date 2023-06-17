import React from "react"
import Color from "@common/color"
import { Dialog } from "react-native-elements"
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"

type ListDialogLogout = {
    isVisible: boolean
    onBackdropPress(): void
    onLogOut(): void
    colorTitle: string
    colorBtnYes: string
    colorBtnNo: string
    title: string
    titleDiaLog: string
    txtBtnYes: string
    txtBtnNo: string
}

const LogOutDiaLog: React.FC<ListDialogLogout> = (props) => {
    return (
        <Dialog isVisible={props.isVisible} onBackdropPress={props.onBackdropPress}>
            <Dialog.Title title={props.titleDiaLog} titleStyle={styles.txtDialog} />
            <Text style={[styles.txtTitle, { color: props.colorTitle }]}>{props.title}</Text>
            <View style={styles.boxBtn}>
                <TouchableOpacity onPress={props.onBackdropPress}>
                    <Text style={[styles.textBtn, { color: props.colorBtnNo }]}>{props.txtBtnNo}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.onLogOut}>
                    <Text style={[styles.textBtn, { color: props.colorBtnYes }]}>{props.txtBtnYes}</Text>
                </TouchableOpacity>
            </View>
        </Dialog>
    )
}

const styles = StyleSheet.create({
    txtTitle: {
        textAlign: "center",
        fontSize: 20,
        opacity: 0.5
    },
    txtDialog: {
        textAlign: "center",
        fontSize: 24,
        color: Color.colorApp.BLACK,
        fontWeight: 'bold',
    },
    boxBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20
    },
    textBtn: {
        textAlign: "center",
        fontSize: 20,
    },
})

export default LogOutDiaLog