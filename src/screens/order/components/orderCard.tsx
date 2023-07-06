import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import Color from "@common/color"
import { CartItemProps } from '@models/cart'
import { currencyFormat } from '@utils/currencyFormat'

const OrderCard = ({ item }: { item: CartItemProps }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: Color.colorApp.WHITE }]}>
            <View style={styles.boxItem}>
                <Image source={{ uri: item.products.image[0] }} style={styles.image} />
                <View style={styles.boxItemRight}>
                    <View style={styles.boxText}>
                        <Text style={styles.txtName}>{item.products.name}</Text>
                        <Text style={styles.txtPrice}>{currencyFormat(item.products.price)}</Text>
                        <Text style={styles.txtDescription} numberOfLines={1}>{item.products.description}</Text>
                        <Text style={styles.txtQuantity}>X{item.quantity}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: '100%',
        borderRadius: 15,
        alignSelf: 'center',
        marginVertical: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    boxItem: {
        flexDirection: 'row',
        height: '100%',
        padding: 5
    },
    image: {
        width: '35%',
        height: '100%',
        borderRadius: 10,
    },
    boxText: {
        marginLeft: 5,
        flexDirection: 'column',
    },
    txtName: {
        fontSize: 18,
        fontWeight: '600',
    },
    txtPrice: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: '600',
        color: Color.colorApp.RED
    },
    txtDescription: {
        fontSize: 18,
        marginTop: 5,
        width: 200,
        color: Color.colorApp.GHOSTBLACK
    },
    txtQuantity: {
        fontSize: 18,
        marginTop: 5
    },
    boxItemRight: { flexDirection: 'column' },
})