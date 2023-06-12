import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import imgLogoApp from '@common/imgurl'
import ButtonComponent from '@components/button'
import Color from "@common/color"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { selectValueTheme } from "@redux/selector/theme"

const WithoutAccount = () => {
  const { t } = useTranslation();
  const mode = useSelector(selectValueTheme);

  return (
    <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <View style={styles.boxInfo}>
        <ImageBackground
          source={{ uri: mode ? imgLogoApp.logoAppBlack : imgLogoApp.logoAppWhite }}
          imageStyle={styles.imageStyle}
          style={styles.styleBackground}>
          <View style={styles.imageChildStyle}>
            <Text
              style={[
                styles.txtTitle,
                {
                  color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK
                }
              ]}>
              {t("account:txtNameApp")}
            </Text>
          </View>
        </ImageBackground>
        <Text
          style={[
            styles.txtDescription,
            {
              color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK
            }
          ]}>
          {t("account:txtDescription")}
        </Text>
      </View>
      <ButtonComponent
        color={Color.bgColor.CHERRY}
        style={styles.btnLoginNow}
        title={t("account:txtBtnLogin")}
        titleStyle={styles.titleStyle}
        onPress={() => { }}
      />
    </View>
  )
}

export default WithoutAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxInfo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  imageChildStyle: {
    position: "absolute",
    bottom: 10,
    right: 52,
  },
  imageStyle: {
    borderRadius: 230 / 2,
  },
  styleBackground: {
    width: 230,
    height: 230,
  },
  txtTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  txtDescription: {
    fontSize: 18,
    bottom: 10
  },
  btnLoginNow: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  titleStyle: {
    color: Color.colorApp.WHITE,
    fontSize: 18,
    fontWeight: 'bold'
  },
})