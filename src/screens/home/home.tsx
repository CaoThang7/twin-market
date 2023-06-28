import { StyleSheet, View } from 'react-native'
import React from 'react'
import Color from "@common/color"
import Banner from './components/banner'
import Categories from './components/categories'
import ProductList from './components/productList'
import LeftComponent from './components/leftComponent'
import RightComponent from './components/rightComponent'
import { ScrollView } from 'react-native-virtualized-view'
import { selectValueTheme } from "@redux/selector/theme"
import { Header } from "react-native-elements"
import { useSelector } from "react-redux"

const Home = () => {
  const mode = useSelector(selectValueTheme)

  return (
    <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          containerStyle={styles.containerStyleHeader}
          leftComponent={<LeftComponent />}
          rightComponent={<RightComponent />}
          backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
        />
        <Banner />
        <Categories />
        <ProductList />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80
  },
  containerStyleHeader: { borderBottomWidth: 0 },
})