import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { userProfile } from '@models/userProfile'
import { findUserById } from '@services/user'
import { Icon } from "react-native-elements"
import { useSelector } from "react-redux"
import imgurl from '@common/imgurl'
import Color from '@common/color'
import useAuth from '@hooks/useAuth'
import Infomation from './components/setting/infomation'
import FormUpdate from './components/setting/formUpdate'

const SettingProfile = () => {
  const [profile, setProfile] = useState<userProfile | null>(null)
  const [visFormUpdate, setVisFormUpdate] = useState(false)
  const { userInfo } = useAuth()
  const navigation = useNavigation()
  const mode = useSelector(selectValueTheme)

  useFocusEffect(
    useCallback(() => {
      fetchUser()
    }, [userInfo]),
  )

  const fetchUser = async () => {
    if (userInfo) {
      const providerData = userInfo.providerData[0]
      const user = await findUserById(providerData.uid)
      setProfile(user)
    }
  }

  const onGoBackProfile = () => {
    navigation.goBack()
  }

  const toggleFormUpdate = () => {
    setVisFormUpdate(!visFormUpdate)
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
      <ImageBackground
        source={{ uri: imgurl.bgSettingProfile }}
        style={styles.imgBG}>
        <View style={styles.itemIcon}>
          <Icon
            onPress={onGoBackProfile}
            name={'chevron-back-outline'}
            type="ionicon"
            color={Color.colorApp.BLACK}
            size={36}
          />
        </View>
      </ImageBackground>
      <View style={styles.boxProfile}>
        <View style={styles.boxAvatar}>
          <Image
            source={{ uri: profile?.photoUrl ? profile?.photoUrl : imgurl.imgAvatar }}
            style={styles.avatar}
          />
        </View>
        {visFormUpdate
          ?
          <FormUpdate
            id={profile?.id}
            fullName={profile?.fullName}
            email={profile?.email}
            phoneNumber={profile?.phoneNumber}
            photoUrl={profile?.photoUrl}
            image={''} />
          :
          <Infomation
            id={profile?.id}
            fullName={profile?.fullName}
            email={profile?.email}
            phoneNumber={profile?.phoneNumber}
            photoUrl={profile?.photoUrl}
            image={''} />
        }
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon
          onPress={toggleFormUpdate}
          name={visFormUpdate ? 'close' : 'add'}
          type="ionicon"
          color={Color.colorApp.WHITE}
          size={36}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SettingProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBG: {
    height: 150,
    width: "100%",
  },
  itemIcon: {
    position: 'absolute',
    left: 10
  },
  boxProfile: {
    flex: 1
  },
  boxAvatar: { alignItems: 'center' },
  avatar: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: Color.colorApp.DARKORANGE,
    borderWidth: 2,
    marginTop: -90,
  },
  floatingButton: {
    backgroundColor: Color.colorApp.DARKORANGE,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})