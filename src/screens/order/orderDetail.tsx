import React, { useState, useEffect } from 'react'
import HeaderOrderDetail from './components/detail/headerOrderDetail'
import ShipInfomation from './components/detail/shipInfomation'
import ProductOrder from './components/detail/productOrder'
import Loading from '@components/loading'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { StyleSheet, View } from 'react-native'
import { findOrderById } from '@services/order'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from '@navigation/mainStack'
import { ScrollView } from 'react-native-virtualized-view'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'OrderDetail'>;

const OrderDetail = ({ route }: Props) => {
    const navigation: any = useNavigation()
    const mode = useSelector(selectValueTheme)
    const [loading, setLoading] = useState(true)
    const [orderDetail, setOrderDetail] = useState<any | undefined>({})

    useEffect(() => {
        getMyOrderDetail()
    }, [])

    const getMyOrderDetail = async () => {
        const data = await findOrderById(route.params.orderId)
        setOrderDetail(data)
        setLoading(false)
    }

    const onGoBackMyOrder = () => {
        navigation.goBack()
    }

    if (loading) {
        return <Loading color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK} />
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderOrderDetail onPress={onGoBackMyOrder} />
            <ScrollView style={styles.body}>
                <ShipInfomation orderDetail={orderDetail} />
                <ProductOrder
                    orderDetail={orderDetail}
                    shipping={orderDetail.shipping}
                    totalPrice={orderDetail.totalPrice}
                />
            </ScrollView>
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
})