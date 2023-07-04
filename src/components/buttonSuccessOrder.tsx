import React from "react"
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"

type ListButtonOrder = {
    onPress(): void
    style: {}
    color: string[]
    titleStyle: {}
    title: string | any
    titleTotal: string
    totalPrice: string
}

const ButtonSuccessOrder: React.FC<ListButtonOrder> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <LinearGradient colors={props.color} style={styles.container}>
                <View style={styles.boxItem}>
                    <View style={styles.itemLeft}>
                        <Text style={props.titleStyle}>{props.titleTotal}</Text>
                        <Text style={props.titleStyle}>{props.totalPrice}</Text>
                    </View>
                    <TouchableOpacity onPress={props.onPress}>
                        <Text style={props.titleStyle ? props.titleStyle : styles.txtTitle}>{props.title}</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default ButtonSuccessOrder

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        height: 50,
    },
    txtTitle: {
        fontSize: 22,
        color: 'white'
    },
    boxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemLeft: { flexDirection: 'row' },
    itemBadge: {
        marginLeft: -10,
        marginTop: -5
    }
})