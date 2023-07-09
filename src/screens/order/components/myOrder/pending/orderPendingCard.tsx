import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import Color from "@common/color"
import { Chip } from '@rneui/themed'
import { OrderItemProps } from '@models/order'
import { currencyFormat } from '@utils/currencyFormat'

const OrderPendingCard = ({ item, onPress }: { item: OrderItemProps, onPress: Function }) => {
    return (
        <>
            {item.cartItem.map((i) => {
                return (
                    <TouchableOpacity
                        style={[styles.container, { backgroundColor: Color.colorApp.WHITE }]}
                        key={i.cartId}
                        onPress={() => onPress()}>
                        <View style={styles.boxItem} >
                            <Image source={{ uri: i.products.image[0] }} style={styles.image} />
                            <View style={styles.boxItemRight}>
                                <View style={styles.boxText}>
                                    <Text style={styles.txtName}>{i.products.name}</Text>
                                    <Text style={styles.txtPrice}>{currencyFormat(i.products.price)}</Text>
                                    <Text style={styles.txtDescription} numberOfLines={1}>{i.products.description}</Text>
                                    <View style={styles.boxItemBottom}>
                                        <Text style={styles.txtQuantity}>X{i.quantity}</Text>
                                        <Chip
                                            title={`${item.status}...`}
                                            color={"yellow"}
                                            titleStyle={styles.titleChipStyle}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </>
    )
}

export default OrderPendingCard

const styles = StyleSheet.create({
    container: {
        height: 125,
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
    boxItemBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    titleChipStyle: {
        color: 'black',
        fontWeight: 'bold'
    }
})