import React from "react"
import CartIcons from 'react-native-vector-icons/FontAwesome'
import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Badge } from '@rneui/themed';

type ListButtonCart = {
    onPress(): void
    style: {}
    color: string[]
    titleStyle: {}
    title: string | any
    valueCart: number
}

const ButtonSuccessCart: React.FC<ListButtonCart> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <LinearGradient colors={props.color} style={styles.container}>
                <View style={styles.boxItem}>
                    <View style={styles.itemLeft}>
                        <CartIcons name='shopping-basket' color={'white'} size={30} />
                        <View
                            style={styles.itemBadge}>
                            <Badge value={props.valueCart} status='error' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={props.onPress}>
                        <Text style={props.titleStyle ? props.titleStyle : styles.txtTitle}>{props.title}</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default ButtonSuccessCart

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