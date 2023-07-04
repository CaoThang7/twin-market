import React from 'react'
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import CartList from './components/cartList'
import CartEmpty from './components/cartEmpty'
import ButtonSuccessOrder from '@components/buttonSuccessOrder'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { currencyFormat } from '@utils/currencyFormat'
import { Icon, Header } from "react-native-elements"
import { selectCart } from '@redux/selector/cart'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const CartScreen = () => {
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const navigation = useNavigation()
    const cartState = useSelector(selectCart)
    const mode = useSelector(selectValueTheme)

    const txtTitle: string = t("cart:titleHeader")
    const cartList = cartState.filter((item) => item.userId == userInfo?.providerData[0].uid)
    const totalPrice = cartList.reduce((sum, item) => sum + (item.products.price * item.quantity), 0)

    const onGoBackProductDetail = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <Header
                containerStyle={styles.headerStyle}
                leftComponent={
                    <Icon
                        onPress={onGoBackProductDetail}
                        name={'chevron-back-outline'}
                        type="ionicon"
                        color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK}
                        size={36}
                    />
                }
                centerComponent={{
                    text: txtTitle,
                    style: {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK,
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
                backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
            />
            {/* Body */}
            {cartList.length == 0
                ? <CartEmpty />
                : <>
                    <View style={styles.body}>
                        <CartList />
                    </View>
                    <View style={[styles.footer, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
                        <ButtonSuccessOrder
                            color={Color.bgColor.LUSH}
                            style={styles.btnOrder}
                            title={t("cart:txtBtnOrder")}
                            titleStyle={styles.titleStyle}
                            titleTotal={t("cart:txtTotalPrice")}
                            totalPrice={currencyFormat(totalPrice)}
                            onPress={() => { }} />
                    </View>
                </>
            }
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    headerStyle: { borderBottomWidth: 0 },
    footer: {
        flex: 0.15,
        borderTopWidth: 0,
        shadowColor: Color.colorApp.DARKORANGE,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    btnOrder: {
        marginTop: 15,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
})