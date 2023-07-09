import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { OrderItemProps } from '@models/order'
import { currencyFormat } from '@utils/currencyFormat'
import { selectValueTheme } from "@redux/selector/theme"
import BarcodeIcons from 'react-native-vector-icons/FontAwesome'

const OrderManagementCard = ({ item }: { item: OrderItemProps }) => {
    const mode = useSelector(selectValueTheme)
    const [bgLabelStatusOrder, setBgLabelStatusOrder] = useState<string>('#FFFFE0')
    const [txtLabelStatusOrder, setTxtLabelStatusOrder] = useState<string>('#EEB027')
    const dateFormat = new Date(item.dateOrder.seconds * 1000 + item.dateOrder.nanoseconds / 1000000).toString()

    useEffect(() => {
        if (item.status == 'pending') {
            setBgLabelStatusOrder('#FFFFE0')
            setTxtLabelStatusOrder('#EEB027')
        }
        if (item.status == 'success') {
            setBgLabelStatusOrder('#C3F3DC')
            setTxtLabelStatusOrder(Color.colorApp.GREEN)
        }
        if (item.status == 'cancel') {
            setBgLabelStatusOrder('#FEE8E8')
            setTxtLabelStatusOrder(Color.colorApp.RED)
        }
    })

    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: mode ? '#282828' : Color.colorApp.WHITE }]}>
            <View style={styles.boxItemCode}>
                <BarcodeIcons name='barcode' color={mode ? 'white' : 'black'} size={20} />
                <Text style={styles.txtOrderId} numberOfLines={1}>{item.orderId.substring(0, 32)}</Text>
            </View>
            {item.cartItem.map((e) => {
                return (
                    <View style={styles.boxItemProduct} key={e.cartId}>
                        <Text style={[styles.txtNameProduct, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                            {e.products.name}
                        </Text>
                        <Text style={[styles.txtQuantityProduct, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                            X{e.quantity}
                        </Text>
                    </View>
                )
            })}
            <View style={styles.boxInfoOrder}>
                <Text style={styles.txtDateOrder}>{dateFormat}</Text>
                <Text style={styles.txtAddress} numberOfLines={1}>{item.address}</Text>
            </View>
            <View style={styles.boxTotalPrice}>
                <Text style={[styles.txtTitleTotalPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    Total Price
                </Text>
                <Text style={[styles.txtTotalPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {currencyFormat(item.totalPrice)}
                </Text>
            </View>
            <View style={styles.labelStatus}>
                <View style={styles.labelOrder}>
                    <Text style={styles.txtLabelOrder}>order</Text>
                </View>
                <View style={[styles.labelStatusOrder, { backgroundColor: bgLabelStatusOrder }]}>
                    <Text style={[styles.txtStatusUserOrder, { color: txtLabelStatusOrder }]}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default OrderManagementCard

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: Color.colorApp.DARKORANGE,
        shadowOffset: { width: 5, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        marginVertical: 10
    },
    boxItemCode: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    boxItemProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtNameProduct: {
        fontWeight: '500',
        fontSize: 18
    },
    txtQuantityProduct: {
        fontWeight: '500',
        fontSize: 18,
    },
    boxInfoOrder: {
        marginTop: 5
    },
    txtDateOrder: {
        color: Color.colorApp.BLUE,
    },
    txtAddress: {
        marginTop: 5,
        color: Color.colorApp.DRAKGREY
    },
    boxTotalPrice: {
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtTitleTotalPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtTotalPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtOrderId: {
        marginLeft: 5,
        color: Color.colorApp.DRAKGREY
    },
    labelStatus: {
        marginTop: 5,
        flexDirection: 'row'
    },
    labelOrder: {
        height: 30,
        width: 70,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: Color.colorApp.GHOSTWHITE,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtLabelOrder: {
        color: 'black',
        fontWeight: 'bold'
    },
    labelStatusOrder: {
        height: 30,
        width: 70,
        marginBottom: 10,
        marginLeft: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtStatusUserOrder: {
        fontWeight: 'bold'
    }
})