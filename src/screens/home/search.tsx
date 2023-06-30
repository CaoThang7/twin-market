import React, { useState, useEffect } from 'react'
import Color from "@common/color"
import SearchBar from './components/search/searchBar'
import ProductSearch from './components/search/productSearch'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, View } from 'react-native'
import { findProductByName } from '@services/product'
import { Icon, Header } from "react-native-elements"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const SearchScreen = () => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [productList, setProductList] = useState<any[]>([])
    const txtLetSearch: string = t("search:txtLetSearch")
    const txtTitle: string = t("search:titleSearch")

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
            <Header
                containerStyle={styles.headerStyle}
                leftComponent={
                    <Icon
                        onPress={onGoBackHomeScreen}
                        name={'chevron-back-outline'}
                        type="ionicon"
                        color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK}
                        size={36}
                    />
                }
                centerComponent={{
                    text: txtTitle,
                    style: {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK,
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
                backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
            />
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
    headerStyle: { borderBottomWidth: 0 },
    txtSearch: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: Color.colorApp.DRAKGREY
    }
})