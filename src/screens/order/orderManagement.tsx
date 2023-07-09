import React, { useState, useEffect } from 'react'
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import { useSelector } from "react-redux"
import { Header } from "react-native-elements"
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { findOrderByUserId } from '@services/order'
import { selectValueTheme } from "@redux/selector/theme"
import { ScrollView } from 'react-native-virtualized-view'
import OrderManagementList from './components/orderManagement/orderManagementList'

const OrderManagement = () => {
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const mode = useSelector(selectValueTheme)
    const [orderManagement, setOrderManagement] = useState<any[]>([])
    const txtTitle: string = t("order:titleOrderManagement")

    useEffect(() => {
        getOrderByUserId()
    }, [userInfo])

    const getOrderByUserId = async () => {
        const data = await findOrderByUserId(userInfo?.providerData[0].uid)
        setOrderManagement(data)
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.GHOSTWHITE }]}>
            <Header
                containerStyle={styles.containerStyleHeader}
                centerComponent={{
                    text: txtTitle,
                    style: {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK,
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
                backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.GHOSTWHITE}
            />
            {/* Body */}
            <ScrollView style={styles.body}>
                <OrderManagementList orderManagement={orderManagement} />
            </ScrollView>
        </View>
    )
}

export default OrderManagement

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
    },
    containerStyleHeader: { borderBottomWidth: 0 },
})