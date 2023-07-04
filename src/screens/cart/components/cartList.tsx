import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native'
import RightSwipeItem from './rightSwipeItem'
import ItemCartCard from './cartCard'
import useAuth from '@hooks/useAuth'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { deleteCartById } from "@services/cart"
import { selectCart } from '@redux/selector/cart'
import { removeFromCart } from "@redux/slices/cart"
import { useAppDispatch } from "@hooks/useTypeRedux"

const CartList = () => {
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const dispatch = useAppDispatch()
    const cartState = useSelector(selectCart)
    const cartList = cartState.filter((item) => item.userId == userInfo?.providerData[0].uid)

    const deleteCart = (item: any) => {
        dispatch(removeFromCart({
            userId: userInfo?.providerData[0].uid,
            cartId: item.cartId,
        }))
        deleteCartById(item.cartId)
    }

    return (
        <View style={styles.container}>
            <View style={styles.attention}>
                <Text style={styles.txtAttention}>{t("cart:txtNote")}</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={cartList}
                renderItem={({ item }) =>
                    <ItemCartCard
                        item={item}
                        rightSwipe={() => (<RightSwipeItem onPress={() => deleteCart(item)} />)}
                    />
                }
                keyExtractor={item => item.cartId}
                style={styles.containerFlatList}
            />
        </View>
    )
}

export default CartList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    attention: {
        backgroundColor: '#FFF6C5',
        padding: 5,
        justifyContent: 'center'
    },
    txtAttention: {
        fontSize: 16
    },
    containerFlatList: {
        height: '100%',
        marginTop: 5
    }
})