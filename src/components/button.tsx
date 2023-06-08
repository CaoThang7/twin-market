import React from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { ListButton } from "@models/itemBtn";

const ButtonComponent: React.FC<ListButton> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <LinearGradient colors={props.color} style={styles.container}>
                <Text style={props.titleStyle ? props.titleStyle : styles.txtTitle}>{props.title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        height: 50
    },
    txtTitle: {
        fontSize: 22,
        color: 'white'
    },
})

export default ButtonComponent 