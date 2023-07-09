import React from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import MyOrderEmpty from '../myOrder/myOrderEmpty'
import OrderManagementCard from './orderManagementCard'

const OrderManagementList = ({ orderManagement }: { orderManagement: any }) => {
    return (
        <View style={styles.container}>
            {orderManagement.length == 0
                ? <MyOrderEmpty />
                : <>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={orderManagement}
                        renderItem={({ item }) => <OrderManagementCard item={item} />}
                        keyExtractor={item => item.orderId}
                        style={styles.containerFlatList}
                    />
                </>
            }
        </View>
    )
}

export default OrderManagementList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    containerFlatList: {
        height: '100%',
        marginTop: 5,
    }
})