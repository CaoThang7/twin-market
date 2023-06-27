import { StyleSheet, View } from 'react-native'
import React from 'react'
import Color from "@common/color"
import Banner from './components/banner'
import LeftComponent from './components/leftComponent'
import RightComponent from './components/rightComponent'
import { selectValueTheme } from "@redux/selector/theme"
import { useTranslation } from "react-i18next"
import { Header } from "react-native-elements"
import { useSelector } from "react-redux"

const Home = () => {
  const { t } = useTranslation()
  const mode = useSelector(selectValueTheme)

  return (
    <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <Header
        containerStyle={styles.containerStyleHeader}
        leftComponent={<LeftComponent />}
        rightComponent={<RightComponent />}
        backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
      />
      <Banner />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyleHeader: { borderBottomWidth: 0 },
})