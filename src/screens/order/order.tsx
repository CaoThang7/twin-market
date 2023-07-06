import React, { useState, useEffect } from 'react'
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import UserCart from './components/userCart'
import ButtonComponent from '@components/button'
import DeliveryServices from './components/delivery'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { findCartByUserId } from '@services/cart'
import { Icon, Header } from "react-native-elements"
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { BottomSheetOrder } from '@components/bottomsheet'

const OrderScreen = () => {
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const navigation = useNavigation()
    const mode = useSelector(selectValueTheme)

    const [cartList, setCartList] = useState<any[]>([])
    const [isVisible, setIsVisible] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(t("order:txtNoSelectAddress"))

    const priceDelivery: number = 2;
    const txtTitle: string = t("order:titleHeader")
    const totalPrice = cartList.reduce((sum, item) => sum + (item.products.price * item.quantity), 0)
    const totalPriceFinal: number = priceDelivery + totalPrice

    const onGoBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        getCartByUserId()
    }, [userInfo])

    const getCartByUserId = async () => {
        const dataCart = await findCartByUserId(userInfo?.providerData[0].uid)
        setCartList(dataCart)
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.GHOSTWHITE }]}>
            <Header
                containerStyle={[styles.headerStyle, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.GHOSTWHITE }]}
                leftComponent={
                    <Icon
                        onPress={onGoBack}
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
            <View style={styles.body}>
                <UserCart cartList={cartList} />
            </View>
            {/* Footer */}
            <View style={[styles.footer, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
                <DeliveryServices
                    totalPriceFinal={totalPriceFinal}
                    priceDelivery={priceDelivery}
                />
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btnOrder}
                    title={t("order:titleHeader")}
                    titleStyle={styles.titleStyle}
                    onPress={() => setIsVisible(true)} />
            </View>
            <BottomSheetOrder
                isVisible={isVisible}
                onPress={() => setIsVisible(false)}
                onPressConfirm={() => { }}
                onPressChooseAddress={() => { }}
                titleOrder={t("order:txtOrder")}
                txtBtn={t("profile:textBtnCancel")}
                txtBtnConfirm={t("order:txtBtnConfirm")}
                txtAddress={selectedAddress!}
                titlePayment={t("order:titlePayment")}
                titleCash={t("order:titleCash")}
                subTitleCash={t("order:subTitleCash")}
                titleAddress={t("order:titleAddress")}
                txtChooseAddress={t("order:txtChooseAddress")}
            />
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    headerStyle: { borderBottomWidth: 0 },
    footer: {
        flex: 0.35,
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
        marginTop: 10,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
})