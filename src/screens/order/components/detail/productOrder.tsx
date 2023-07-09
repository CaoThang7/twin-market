import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import Color from "@common/color"
import ProductIcons from 'react-native-vector-icons/Entypo'
import { selectValueTheme } from "@redux/selector/theme"
import { currencyFormat } from '@utils/currencyFormat'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const ProductOrder = (
    {
        orderDetail,
        shipping,
        totalPrice
    }: {
        orderDetail: any,
        shipping: number,
        totalPrice: number
    }) => {

    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    let cartList: any = orderDetail.cartItem ? orderDetail.cartItem : [];

    return (
        <View style={styles.container}>
            <View style={styles.boxProduct}>
                <ProductIcons name='bowl' color={Color.colorApp.DARKORANGE} size={20} />
                <Text style={styles.txtTitleProduct}>{t("orderDetail:titleProduct")}</Text>
            </View>
            {cartList.map((item: any) => {
                return (
                    <View key={item.cartId}>
                        <View style={styles.boxItem}>
                            <Image source={{ uri: item.products.image[0] }} style={styles.image} />
                            <View style={styles.boxItemRight}>
                                <View style={styles.boxText}>
                                    <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                                        {item.products.name}
                                    </Text>
                                    <Text style={styles.txtPrice}>
                                        {currencyFormat(item.products.price)}
                                    </Text>
                                    <Text style={styles.txtDescription} numberOfLines={1}>
                                        {item.products.description}
                                    </Text>
                                    <Text style={[styles.txtQuantity, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                                        X{item.quantity}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )
            })}
            <View style={styles.boxPrice}>
                <Text style={styles.txtTitlePrice}>{t("orderDetail:titlePrice")}</Text>
                <View style={styles.boxTextPrice}>
                    <Text style={styles.txtItemPrice}>{t("orderDetail:txtPriceProduct")}</Text>
                    <Text style={styles.txtItemPrice}>
                        {currencyFormat(totalPrice - shipping)}
                    </Text>
                </View>
                <View style={styles.boxTextPrice}>
                    <Text style={styles.txtItemPrice}>{t("orderDetail:txtPriceShip")}</Text>
                    <Text style={styles.txtItemPrice}>{currencyFormat(shipping)}</Text>
                </View>
                <View style={styles.boxTextPrice}>
                    <Text style={[styles.txtItemTotalPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                        {t("orderDetail:txtTotalPrice")}
                    </Text>
                    <Text style={[styles.txtItemTotalPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                        {currencyFormat(totalPrice)}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ProductOrder

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 10
    },
    boxProduct: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtTitleProduct: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.colorApp.DARKORANGE
    },
    boxItem: {
        flexDirection: 'row',
        marginTop: 10,
    },
    image: {
        width: '35%',
        height: 100,
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
    boxPrice: {
        marginTop: 10
    },
    txtTitlePrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.colorApp.DARKORANGE
    },
    txtItemPrice: {
        fontSize: 16,
        color: Color.colorApp.DRAKGREY,
    },
    txtItemTotalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxTextPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    }
})