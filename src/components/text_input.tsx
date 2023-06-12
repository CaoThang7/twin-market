import React from "react"
import Color from "@common/color"
import { StyleSheet, TextInput } from 'react-native'
import { ListTextInput } from '@models/itemTextInput'

const TextInputComponent: React.FC<ListTextInput> = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            value={props.valueTextInput}
            style={styles.inputStyle}
            onChangeText={props.onChangeText}
            underlineColorAndroid="transparent"
        />
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: Color.colorApp.WHITE,
        height: 50,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.colorApp.GHOSTWHITE,
        marginVertical: 10,
        color: Color.colorApp.BLACK,
        paddingLeft: 15,
        fontSize: 16
    }
})