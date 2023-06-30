import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ItemProductSearch from './itemProductSearch'

const ProductSearch = (productList: any) => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={productList.productList}
            renderItem={({ item }) => <ItemProductSearch item={item} />}
            keyExtractor={item => item.uid}
            style={styles.containerFlatList}
        />
    )
}

export default ProductSearch

const styles = StyleSheet.create({
    containerFlatList: {
        paddingHorizontal: 10,
        marginTop: 5
    }
})