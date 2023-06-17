import React, { useCallback, useState } from 'react'
import { useFocusEffect } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { StyleSheet, SafeAreaView } from 'react-native'
import { userProfile } from '@models/userProfile'
import { useTranslation } from "react-i18next"
import { findUserById } from '@services/user'
import { useSelector } from "react-redux"
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import BodyProfile from './components/bodyProfile'
import HeaderProfile from './components/headerProfile'
import WithoutAccount from './components/withoutAccount'
import MySpeedDial from './components/mySpeedDial'
import LogOutDiaLog from '@components/logout_dialog'
import firebase from "firebase/compat/app"

const Profile = () => {
    const { t } = useTranslation();
    const [profile, setProfile] = useState<userProfile | null>(null);
    const [isDialog, setIsDialog] = useState(false);
    const { userInfo } = useAuth()
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

    const toggleDialogLogOut = () => {
        setTimeout(() => {
            setIsDialog(!isDialog)
        }, 200);
    }

    const onSignOut = () => {
        setIsDialog(!isDialog)
        firebase.auth()
            .signOut()
    }

    if (userInfo === null) {
        return <WithoutAccount />
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderProfile
                id={profile?.id}
                fullname={profile?.fullname}
                email={profile?.email}
                phoneNumber={profile?.phoneNumber}
                photoUrl={profile?.photoUrl}
            />
            <BodyProfile />
            <MySpeedDial toggleDialogLogOut={toggleDialogLogOut} />
            <LogOutDiaLog
                isVisible={isDialog}
                onBackdropPress={toggleDialogLogOut}
                onLogOut={onSignOut}
                colorTitle={Color.colorApp.BLACK}
                titleDiaLog={t("auth:titleWantLogout")}
                title={t("auth:descriptionWantLogout")}
                txtBtnYes={t("auth:btnYes")}
                txtBtnNo={t("auth:btnClose")}
                colorBtnYes={Color.colorApp.RED}
                colorBtnNo={Color.colorApp.BLACK}
            />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})