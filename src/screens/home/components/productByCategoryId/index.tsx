import React, { useState, useEffect } from 'react'
import Color from "@common/color"
import ItemCard from './itemCard'
import Loading from '@components/loading'
import { useSelector } from "react-redux"
import { Icon, Header } from "react-native-elements"
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, FlatList } from 'react-native'
import { RootStackParamList } from '@navigation/mainStack'
import { findProductByCategoriesId } from '@services/product'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductListByCategoryId'>;

const ProductByCategoryId = ({ route }: Props) => {
    const mode = useSelector(selectValueTheme)
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [productList, setProductList] = useState<any[]>([])

    useEffect(() => {
        getProductListByCategoriesId()
    }, [])

    const getProductListByCategoriesId = async () => {
        const dataProduct = await findProductByCategoriesId(route.params.categoriesId)
        setProductList(dataProduct)
        setLoading(false)
    }

    const onGoBackProfile = () => {
        navigation.goBack()
    }

    if (loading) {
        return <Loading color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK} />
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <Header
                containerStyle={styles.headerStyle}
                leftComponent={
                    <Icon
                        onPress={onGoBackProfile}
                        name={'chevron-back-outline'}
                        type="ionicon"
                        color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK}
                        size={36}
                    />
                }
                centerComponent={{
                    text: route.params.title,
                    style: {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK,
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
                backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
            />
            {/* Body */}
            <View style={styles.body}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={productList}
                    renderItem={({ item }) => <ItemCard item={item} colorBg={route.params.colorBg} />}
                    keyExtractor={item => item.uid}
                />
            </View>
        </View>
    )
}

export default ProductByCategoryId

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        paddingHorizontal: 10,
    },
    headerStyle: { borderBottomWidth: 0 },
})