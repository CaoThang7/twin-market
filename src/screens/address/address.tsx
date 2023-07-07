import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HeaderAddress from './components/address/headerAddress'
import AddressList from './components/address/addressList'
import ButtonComponent from '@components/button'
import NameNavigator from '@common/navigator'
import useAuth from '@hooks/useAuth'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { findAddressByUserId } from '@services/address'

const Address = () => {
  const { t } = useTranslation()
  const { userInfo } = useAuth()
  const isFocused = useIsFocused()
  const navigation: any = useNavigation()
  const mode = useSelector(selectValueTheme)
  const [addressList, setAddressList] = useState<any[]>([]);

  useEffect(() => {
    getAddressByUserId()
  }, [userInfo, isFocused])

  const getAddressByUserId = async () => {
    const dataAddress = await findAddressByUserId(userInfo?.providerData[0].uid)
    const addressId = await AsyncStorage.getItem('addressId');
    const newArrData = dataAddress.map((item: any) => {
      if (item.uid == addressId) {
        return {
          ...item,
          selected: true
        }
      }
      return {
        ...item,
        selected: false
      }
    })
    setAddressList(newArrData)
  }

  const onGoBackOrder = () => {
    navigation.goBack()
  }

  const onGoAddNewAddress = () => {
    navigation.navigate(NameNavigator.CREATEADDRESS)
  }

  return (
    <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <HeaderAddress onPress={onGoBackOrder} />
      {/* Body */}
      <View style={styles.body}>
        <AddressList
          addressList={addressList}
          setAddressList={setAddressList}
        />
      </View>
      {/* Footer */}
      <View style={[styles.footer, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
        <ButtonComponent
          color={Color.bgColor.CHERRY}
          style={styles.btnOrder}
          title={t("address:txtBtnCreateAddress")}
          titleStyle={styles.titleStyle}
          onPress={onGoAddNewAddress} />
      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  footer: {
    flex: 0.15,
    borderTopWidth: 0,
    shadowColor: Color.colorApp.DARKORANGE,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  btnOrder: {
    marginTop: 10,
  },
  titleStyle: {
    color: Color.colorApp.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
})