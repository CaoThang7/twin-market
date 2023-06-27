import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from "react-redux"
import { getALlCategories } from '@services/categories'
import { selectValueTheme } from "@redux/selector/theme"
import { useTranslation } from "react-i18next"
import CategoriesCard from './categoriesCard'
import Color from "@common/color"

const Categories = () => {
  const { t } = useTranslation()
  const mode = useSelector(selectValueTheme)
  const [categoryList, setCategoryList] = useState<any[]>([])

  useEffect(() => {
    handleCategoryList()
  }, [])

  const handleCategoryList = async () => {
    let data = await getALlCategories()
    setCategoryList(data)
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.txtCategory, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
        {t("categories:title")}
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => <CategoriesCard item={item} />}
        keyExtractor={item => item.uid}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 10
  },
  txtCategory: {
    fontSize: 20,
    fontWeight: '600',
  }
})