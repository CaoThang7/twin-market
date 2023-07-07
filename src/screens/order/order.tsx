import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DeliveryServices from './components/delivery'
import HeaderOrder from './components/headerOrder'
import ButtonComponent from '@components/button'
import NameNavigator from '@common/navigator'
import UserCart from './components/userCart'
import useAuth from '@hooks/useAuth'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { findCartByUserId } from '@services/cart'
import { findAddressByUserId } from '@services/address'
import { useIsFocused } from '@react-navigation/native'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { BottomSheetOrder } from '@components/bottomsheet'

const OrderScreen = () => {
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const isFocused = useIsFocused()
    const navigation: any = useNavigation()
    const mode = useSelector(selectValueTheme)

    const [cartList, setCartList] = useState<any[]>([])
    const [isVisible, setIsVisible] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(t("order:txtNoSelectAddress"))

    const priceDelivery: number = 2;
    const totalPrice = cartList.reduce((sum, item) => sum + (item.products.price * item.quantity), 0)
    const totalPriceFinal: number = priceDelivery + totalPrice

    useEffect(() => {
        getCartByUserId()
        getAddressByUserId()
    }, [userInfo, isFocused])

    const getCartByUserId = async () => {
        const dataCart = await findCartByUserId(userInfo?.providerData[0].uid)
        setCartList(dataCart)
    }

    const getAddressByUserId = async () => {
        const addressId = await AsyncStorage.getItem('addressId');
        const dataAddress = await findAddressByUserId(userInfo?.providerData[0].uid)
        dataAddress.map((item: any) => {
            if (item.uid == addressId) {
                setSelectedAddress(item.street + ',' + item.city + ',' + item.country)
            }
        })
    }

    const onGoChooseAddress = () => {
        setIsVisible(false)
        navigation.navigate(NameNavigator.ADDRESS)
    }

    const onGoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.GHOSTWHITE }]}>
            {/* Header */}
            <HeaderOrder onPress={onGoBack} />
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
                onPressChooseAddress={onGoChooseAddress}
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