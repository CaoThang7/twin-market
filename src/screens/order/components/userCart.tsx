import React from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import OrderCard from './orderCard'

const UserCart = ({ cartList }: { cartList: any }) => {
    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={cartList}
                renderItem={({ item }) => <OrderCard item={item} />}
                keyExtractor={item => item.cartId}
                style={styles.containerFlatList}
            />
        </View>
    )
}

export default UserCart

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    containerFlatList: {
        height: '100%',
        marginTop: 5,
    }
})