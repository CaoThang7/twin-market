import React from 'react'
import Color from "@common/color"
import imgLogoApp from '@common/imgurl'
import FormLogin from './components/formLogin'
import HeaderLogin from './components/headerLogin'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
const { width } = Dimensions.get("window")

const Login = () => {
  const mode = useSelector(selectValueTheme)
  const navigation = useNavigation()

  const onGoBackWithoutAccount = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <HeaderLogin onPress={onGoBackWithoutAccount} />
      {/* Body */}
      <View style={styles.body}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoTop}
            source={{ uri: mode ? imgLogoApp.logoAppBlack : imgLogoApp.logoAppWhite }}
          />
        </View>
        <FormLogin />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
  },
  boxLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoTop: {
    width: 100,
    height: 100,
    marginTop: width / 10 - 40
  },
})