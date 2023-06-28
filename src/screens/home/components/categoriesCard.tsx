import React, { useState, useCallback } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import Color from "@common/color"
import NameNavigator from "@common/navigator"
import { ItemProps } from '@models/categories'
import { useTranslation } from "react-i18next"
import { useNavigation } from "@react-navigation/native"
import { useFocusEffect } from "@react-navigation/native"

const CategoriesCard = ({ item }: { item: ItemProps }) => {
    const { t } = useTranslation()
    const [titleItem, setTitleItem] = useState(item.title)
    const txtTitleCrab: string = t("categories:titleItemCarb")
    const txtTitleFish: string = t("categories:titleItemFish")
    const txtTitleMeat: string = t("categories:titleItemMeat")
    const txtTitleVegetables: string = t("categories:titleItemVegetables")
    const txtTitleWater: string = t("categories:titleItemWater")
    const navigation: any = useNavigation();

    useFocusEffect(
        useCallback(() => {
            fillData()
        }, [
            txtTitleCrab,
            txtTitleFish,
            txtTitleMeat,
            txtTitleVegetables,
            txtTitleWater
        ]),
    )

    const fillData = () => {
        if (item.title == 'Crab') {
            setTitleItem(txtTitleCrab)
        }
        if (item.title == 'Fish') {
            setTitleItem(txtTitleFish)
        }
        if (item.title == 'Meat') {
            setTitleItem(txtTitleMeat)
        }
        if (item.title == 'Vegetables') {
            setTitleItem(txtTitleVegetables)
        }
        if (item.title == 'Water') {
            setTitleItem(txtTitleWater)
        }
    }

    const gotoProductListByCategoryId = () => {
        navigation.navigate(NameNavigator.PRODUCTLIST, {
            categoriesId: item.uid,
            title: titleItem,
            colorBg: item.colorBG
        })
    }

    return (
        <TouchableOpacity
            style={[styles.item, { backgroundColor: item.colorBG }]}
            onPress={gotoProductListByCategoryId}>
            <Image
                source={{ uri: item.image }}
                style={styles.imgCategoryCard}
            />
            <View style={styles.boxItemTitle}>
                <Text style={styles.txtTitle}>{titleItem}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriesCard

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        marginHorizontal: 3,
        height: 100,
        width: 100,
        borderRadius: 10
    },
    imgCategoryCard: {
        resizeMode: 'cover',
        width: 70,
        height: 70,
        left: 25,
        top: 5
    },
    boxItemTitle: {
        position: 'absolute',
        top: 80,
        left: 5,
        right: 0,
        bottom: 0,
    },
    txtTitle: {
        fontSize: 16,
        color: Color.colorApp.BLACK,
        fontWeight: '600'
    }
})