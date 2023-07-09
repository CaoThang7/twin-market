import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, { useState, useEffect } from 'react'
import ShippingIcons from 'react-native-vector-icons/FontAwesome5'
import AddressIcons from 'react-native-vector-icons/FontAwesome5'
import UserIcons from 'react-native-vector-icons/Feather'
import Color from "@common/color"
import { findUserById } from '@services/user'
import { useTranslation } from "react-i18next"

const ShipInfomation = ({ orderDetail }: { orderDetail: any }) => {
    const { t } = useTranslation()
    const [dateOrder, setDateOrder] = useState('')
    const [profile, setProfile] = useState<any>({})

    useEffect(() => {
        dateFormat()
        getUserById()
    })

    const dateFormat = () => {
        if (orderDetail.dateOrder == undefined) {
            setDateOrder('')
        } else {
            const dateFormat = new Date(orderDetail.dateOrder.seconds * 1000 + orderDetail.dateOrder.nanoseconds / 1000000).toString()
            setDateOrder(dateFormat)
        }
    }

    const getUserById = async () => {
        const userId = orderDetail?.userId
        if (userId != undefined) {
            const profileUser = await findUserById(userId)
            setProfile(profileUser)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxShip}>
                <ShippingIcons name='shipping-fast' color={Color.colorApp.DARKORANGE} size={20} />
                <Text style={styles.txtTitleShip}>{t("orderDetail:titleShipInfo")}</Text>
            </View>
            <View style={styles.boxTextShip}>
                <Text style={styles.txtShipInfo}>{t("orderDetail:txtPayment")}: {orderDetail.payment}</Text>
                <Text style={styles.txtDateOrder} numberOfLines={1}>{t("orderDetail:txtDateOrder")}: {dateOrder}</Text>
            </View>
            <View style={styles.boxAddress}>
                <AddressIcons name='map-marker-alt' color={Color.colorApp.DARKORANGE} size={20} />
                <Text style={styles.txtTitleShip}>{t("orderDetail:titleAddress")}</Text>
            </View>
            <View style={styles.boxTextAddress}>
                <Text style={styles.txtAddress} numberOfLines={2}>{t("orderDetail:txtAddress")}: {orderDetail.address}</Text>
            </View>
            <View style={styles.boxUserInfo}>
                <UserIcons name='user' color={Color.colorApp.DARKORANGE} size={20} />
                <Text style={styles.txtTitleShip}>{t("orderDetail:titleInfoUser")}</Text>
            </View>
            <View style={styles.boxTextUser}>
                <Text style={styles.txtFullname}>{t("orderDetail:txtFullName")}: {profile.fullName}</Text>
                <Text style={styles.txtEmail}>{t("orderDetail:txtEmail")}: {profile.email}</Text>
                <Text style={styles.txtPhone}>{t("orderDetail:txtPhone")}: {orderDetail.userId}</Text>
            </View>
        </View>
    )
}

export default ShipInfomation

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    boxShip: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtTitleShip: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '600',
        color: Color.colorApp.DARKORANGE
    },
    boxAddress: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    boxTextShip: { marginTop: 10 },
    boxTextAddress: { marginTop: 10 },
    txtShipInfo: {
        fontSize: 15,
        color: Color.colorApp.DRAKGREY
    },
    txtDateOrder: {
        fontSize: 15,
        color: Color.colorApp.DRAKGREY,
        marginTop: 10
    },
    txtAddress: {
        fontSize: 15,
        color: Color.colorApp.DRAKGREY
    },
    boxUserInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    boxTextUser: {
        marginTop: 10
    },
    txtFullname: {
        fontSize: 15,
        color: Color.colorApp.DRAKGREY,
        fontWeight: 'bold'
    },
    txtEmail: {
        fontSize: 15,
        color: Color.colorApp.DRAKGREY,
        marginTop: 10,
    },
    txtPhone: {
        fontSize: 15,
        color: Color.colorApp.DRAKGREY,
        marginTop: 10,
    }
})