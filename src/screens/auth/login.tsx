import React from 'react'
import Color from "@common/color"
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { Icon, Header } from "react-native-elements"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
const { width } = Dimensions.get("window")
import imgLogoApp from '@common/imgurl'
import FormLogin from './components/formLogin'

const Login = () => {
  const { t } = useTranslation()
  const mode = useSelector(selectValueTheme)
  const navigation = useNavigation()
  const txtTitle: string = t("auth:logIn")

  const onGoBackWithoutAccount = () => {
    navigation.goBack()
  }

  return (
    <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <Header
        containerStyle={styles.headerStyle}
        leftComponent={
          <Icon
            onPress={onGoBackWithoutAccount}
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
      {/* Body */}
      <View style={styles.body}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logoTop}
            source={{ uri: mode ? imgLogoApp.logoAppBlack : imgLogoApp.logoAppWhite }}
          />
        </View>
        <FormLogin />
        <Text style={styles.txtOr}>{t("auth:orUse")}</Text>
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
  headerStyle: { borderBottomWidth: 0 },
  boxLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoTop: { width: 100, height: 100, marginTop: width / 10 - 40 },
  txtOr: {
    textAlign: "center",
    color: Color.colorApp.DRAKGREY,
    marginTop: width / 20,
    fontSize: 18,
  },
})