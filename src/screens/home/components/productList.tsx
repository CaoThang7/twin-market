import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from "@common/color"
import ProductCard from './productCard'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { selectValueTheme } from "@redux/selector/theme"
import { getALlProductUsuallyBuy } from '@services/product'

const ProductList = () => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    const [productList, setProductList] = useState<any[]>([])

    useEffect(() => {
        handleProductList()
    }, [])

    const handleProductList = async () => {
        let data = await getALlProductUsuallyBuy()
        setProductList(data)
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.txtProduct, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                {t("products:title")}
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={productList}
                renderItem={({ item }) => <ProductCard item={item} />}
                keyExtractor={item => item.uid}
                key={2}
                numColumns={2}
                style={styles.containerFlatList}
            />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    txtProduct: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 10,
    },
    containerFlatList: {
        paddingHorizontal: 5,
        marginTop: 5
    }
})