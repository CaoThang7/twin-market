import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import Loading from '@components/loading'
import MyOrderEmpty from '../myOrderEmpty'
import NameNavigator from '@common/navigator'
import OrderPendingCard from './orderPendingCard'
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { findOrderPendingByUserId } from '@services/order'

const MyOrderListPending = () => {
    const { userInfo } = useAuth()
    const navigation: any = useNavigation()
    const mode = useSelector(selectValueTheme)
    const [loading, setLoading] = useState(true)
    const [myOrderListPending, setMyOrderListPending] = useState<any[]>([])

    useEffect(() => {
        getOrderPendingByUserId()
    }, [userInfo])

    const getOrderPendingByUserId = async () => {
        const data = await findOrderPendingByUserId(userInfo?.providerData[0].uid)
        setMyOrderListPending(data)
        setLoading(false)
    }

    const onGoMyOrderDetail = (orderId: any) => {
        navigation.navigate(NameNavigator.ORDERDETAIL, {
            orderId: orderId
        })
    }

    if (loading) {
        return <Loading color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK} />
    }

    console.log(myOrderListPending.length)

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            {myOrderListPending.length == 0
                ? <MyOrderEmpty />
                : <>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={myOrderListPending}
                        renderItem={({ item }) => <OrderPendingCard item={item} onPress={() => onGoMyOrderDetail(item.orderId)} />}
                        keyExtractor={item => item.orderId}
                        style={styles.containerFlatList}
                    />
                </>
            }
        </View>
    )
}

export default MyOrderListPending

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    containerFlatList: {
        height: '100%',
        marginTop: 5,
    }
})