import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SuccessDialog from '@components/successDialog'
import DeliveryServices from './components/delivery'
import HeaderOrder from './components/headerOrder'
import ButtonComponent from '@components/button'
import Toast from 'react-native-toast-message'
import NameNavigator from '@common/navigator'
import UserCart from './components/userCart'
import Loading from '@components/loading'
import useAuth from '@hooks/useAuth'
import uuid from 'react-native-uuid'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { createOrder } from '@services/order'
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { findCartByUserId } from '@services/cart'
import { showToastErrorAddress } from '@utils/toast'
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

    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [cartList, setCartList] = useState<any[]>([])
    const [successOrder, setSuccessOrder] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(t("order:txtNoSelectAddress"))

    const orderId = uuid.v4()
    const priceDelivery: number = 2
    const dateOrder: Date = new Date()
    const totalPrice = cartList.reduce((sum, item) => sum + (item.products.price * item.quantity), 0)
    const totalPriceFinal: number = priceDelivery + totalPrice
    const titleError: string = t("address:txtErrorToastAddress")
    const subTitleError: string = t("address:txtSubErrorToastAddress")

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

    const handleSubmitOrder = () => {
        if (selectedAddress == t("order:txtNoSelectAddress")) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                showToastErrorAddress(titleError, subTitleError)
            }, 2000);
        } else {
            setLoading(true)
            const order = {
                orderId: orderId,
                userId: userInfo?.providerData[0].uid,
                shipping: {
                    "priceDelivery": priceDelivery
                },
                payment: {
                    "cash": true,
                    "paypal": false,
                    "visa": false
                },
                cartItem: cartList,
                address: selectedAddress,
                dateOrder: dateOrder,
                totalPrice: totalPriceFinal,
                status: 'pending'
            }
            createOrder(order)
            setTimeout(() => {
                setLoading(false)
                setIsVisible(false)
                setSuccessOrder(true)
            }, 2000);
        }
    }

    const onGoChooseAddress = () => {
        setIsVisible(false)
        navigation.navigate(NameNavigator.ADDRESS)
    }

    const onGoBackHomeTab = () => {
        navigation.navigate(NameNavigator.HOMETAB)
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
                onPressConfirm={handleSubmitOrder}
                onPressChooseAddress={onGoChooseAddress}
                titleOrder={t("order:txtOrder")}
                txtBtn={t("profile:textBtnCancel")}
                txtBtnConfirm={loading
                    ? <Loading color={Color.colorApp.WHITE} />
                    : t("order:txtBtnConfirm")
                }
                txtAddress={selectedAddress!}
                titlePayment={t("order:titlePayment")}
                titleCash={t("order:titleCash")}
                subTitleCash={t("order:subTitleCash")}
                titleAddress={t("order:titleAddress")}
                txtChooseAddress={t("order:txtChooseAddress")}
            />
            <SuccessDialog
                isVisible={successOrder}
                title={t("order:txtOrderSuccess")}
                titleButton={t("order:titleBtnOrderSuccess")}
                onPress={onGoBackHomeTab}
                onBackdropPress={() => setSuccessOrder(false)}
                bgColor={mode ? Color.colorApp.GHOSTBLACK : Color.colorApp.GHOSTWHITE}
            />
            <Toast />
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