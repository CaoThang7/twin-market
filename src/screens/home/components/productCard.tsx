import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import React, { useState, useCallback } from 'react'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { ProductItemProps } from '@models/product'
import { currencyFormat } from '@utils/currencyFormat'
import { selectValueTheme } from "@redux/selector/theme"
import { useFocusEffect } from "@react-navigation/native"

const ProductCard = ({ item }: { item: ProductItemProps }) => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    const [nameItem, setNameItem] = useState(item.name)
    const txtNameCrab: string = t("products:kingCrabCanada")
    const txtNameVegetables: string = t("products:tomatoJapan")
    const txtNameFish: string = t("products:salmon")
    const txtNameMeat: string = t("products:kobeBeef")

    useFocusEffect(
        useCallback(() => {
            fillData()
        }, [
            txtNameCrab,
            txtNameVegetables,
            txtNameFish,
            txtNameMeat
        ]),
    )

    const fillData = () => {
        if (item.name == 'King Crab Canada') {
            setNameItem(txtNameCrab)
        }
        if (item.name == 'Salmon') {
            setNameItem(txtNameFish)
        }
        if (item.name == 'Kobe Beef') {
            setNameItem(txtNameMeat)
        }
        if (item.name == 'Tomato Japan') {
            setNameItem(txtNameVegetables)
        }
    }

    return (
        <TouchableOpacity style={[styles.item, { backgroundColor: mode ? Color.colorApp.GHOSTBLACK : '#FDF5E6' }]}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image[0] }} style={styles.image} />
            </View>
            <Text
                style={[
                    styles.nameText,
                    {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK
                    }
                ]}>
                {nameItem}
            </Text>
            <Text style={styles.priceText}>{currencyFormat(item.price)}</Text>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    item: {
        width: Dimensions.get('window').width / 2 - 15,
        backgroundColor: '#FDF5E6',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 20,
    },
    imageContainer: {
        margin: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    nameText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    priceText: {
        color: 'red',
        fontWeight: '600',
        marginLeft: 10,
        marginBottom: 5
    },
})