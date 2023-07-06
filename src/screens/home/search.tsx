import React, { useState, useEffect } from 'react'
import Color from "@common/color"
import SearchBar from './components/search/searchBar'
import HeaderSearch from './components/search/headerSearch'
import ProductSearch from './components/search/productSearch'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from 'react-native'
import { findProductByName } from '@services/product'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const SearchScreen = () => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [productList, setProductList] = useState<any[]>([])
    const txtLetSearch: string = t("search:txtLetSearch")

    useEffect(() => {
        searchProductByName()
    }, [search])

    const onChangeSearch = (value: string) => {
        setSearch(value)
    }

    const searchProductByName = async () => {
        if (search) {
            const dataProduct = await findProductByName(search)
            setProductList(dataProduct)
        }
    }

    const onGoBackHomeScreen = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderSearch onPress={onGoBackHomeScreen} />
            <SearchBar
                search={search}
                onChangeSearch={onChangeSearch}
            />
            <View style={styles.body}>
                {
                    search.length == 0
                        ? <Text style={styles.txtSearch}>{txtLetSearch}</Text>
                        : <ProductSearch productList={productList} />
                }
            </View>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    txtSearch: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: Color.colorApp.DRAKGREY
    }
})