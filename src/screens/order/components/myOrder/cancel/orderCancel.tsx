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
import OrderCancelCard from './orderCancelCard'
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { findOrderCancelByUserId } from '@services/order'

const MyOrderListCancel = () => {
    const { userInfo } = useAuth()
    const navigation: any = useNavigation()
    const mode = useSelector(selectValueTheme)
    const [loading, setLoading] = useState(true)
    const [myOrderListCancel, setMyOrderListCancel] = useState<any[]>([])

    useEffect(() => {
        getOrderCancelByUserId()
    }, [userInfo])

    const getOrderCancelByUserId = async () => {
        const data = await findOrderCancelByUserId(userInfo?.providerData[0].uid)
        setMyOrderListCancel(data)
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

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            {myOrderListCancel.length == 0
                ? <MyOrderEmpty />
                : <>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={myOrderListCancel}
                        renderItem={({ item }) => <OrderCancelCard item={item} onPress={() => onGoMyOrderDetail(item.orderId)} />}
                        keyExtractor={item => item.orderId}
                        style={styles.containerFlatList}
                    />
                </>
            }
        </View>
    )
}

export default MyOrderListCancel

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    containerFlatList: {
        height: '100%',
        marginTop: 5,
    }
})