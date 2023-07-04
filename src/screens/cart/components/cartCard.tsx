import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import { CartItemProps } from '@models/cart'
import { useAppDispatch } from "@hooks/useTypeRedux"
import { currencyFormat } from '@utils/currencyFormat'
import { Swipeable } from 'react-native-gesture-handler'
import { incrementQuantity, decrementQuantity } from "@redux/slices/cart"

const ItemCartCard = ({ item, rightSwipe }: { item: CartItemProps, rightSwipe: any }) => {
    const { userInfo } = useAuth()
    const dispatch = useAppDispatch()

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity({
            userId: userInfo?.providerData[0].uid,
            cartId: item.cartId,
        }))
    }

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity({
            userId: userInfo?.providerData[0].uid,
            cartId: item.cartId,
        }))
    }

    return (
        <Swipeable renderRightActions={rightSwipe}>
            <TouchableOpacity style={[styles.container, { backgroundColor: '#FFEFD5' }]}>
                <View style={styles.boxItem}>
                    <Image source={{ uri: item.products.image[0] }} style={styles.image} />
                    <View style={styles.boxItemRight}>
                        <View style={styles.boxText}>
                            <Text style={styles.txtName}>{item.products.name}</Text>
                            <Text style={styles.txtPrice}>{currencyFormat(item.products.price)}</Text>
                            <Text style={styles.txtDescription} numberOfLines={1}>{item.products.description}</Text>
                        </View>
                        <View style={styles.boxQuantity}>
                            <TouchableOpacity onPress={handleDecrementQuantity}>
                                <Text style={styles.txtPlusMinus}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtQuantity}>{item.quantity}</Text>
                            <TouchableOpacity onPress={handleIncrementQuantity}>
                                <Text style={styles.txtPlusMinus}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    )
}

export default ItemCartCard

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '100%',
        borderRadius: 15,
        alignSelf: 'center',
        marginVertical: 5,
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
        marginTop: 2,
        width: 200,
        color: Color.colorApp.GHOSTBLACK
    },
    boxItemRight: { flexDirection: 'column' },
    boxQuantity: {
        borderColor: 'green',
        borderWidth: 1.5,
        borderRadius: 5,
        flexDirection: 'row',
        width: 100,
        marginLeft: 5,
        marginTop: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    txtPlusMinus: {
        fontSize: 28,
        color: 'green'
    },
    txtQuantity: {
        fontSize: 18,
        marginTop: 3
    }
})