import React, { useEffect, useState } from 'react'
import Color from "@common/color"
import CategoriesCard from './categoriesCard'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { getALlCategories } from '@services/categories'
import { selectValueTheme } from "@redux/selector/theme"
import { StyleSheet, Text, View, FlatList } from 'react-native'

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
    marginTop: 25,
    paddingHorizontal: 10
  },
  txtCategory: {
    fontSize: 20,
    fontWeight: '600',
  }
})