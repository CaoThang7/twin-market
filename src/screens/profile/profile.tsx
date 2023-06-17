import React, { useCallback, useState, useEffect } from 'react'
import Color from "@common/color"
import imgurl from '@common/imgurl'
import useAuth from '@hooks/useAuth'
import firebase from "firebase/compat/app"
import BodyProfile from './components/bodyProfile'
import MySpeedDial from './components/mySpeedDial'
import LogOutDiaLog from '@components/logout_dialog'
import HeaderProfile from './components/headerProfile'
import WithoutAccount from './components/withoutAccount'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { pickImage } from '@utils/imagePicker'
import { userProfile } from '@models/userProfile'
import { StyleSheet, SafeAreaView } from 'react-native'
import { selectValueTheme } from "@redux/selector/theme"
import { useFocusEffect } from "@react-navigation/native"
import { findUserById, uploadImageFirebaseStorage } from '@services/user'

const Profile = () => {
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const mode = useSelector(selectValueTheme)
    const [profile, setProfile] = useState<userProfile | null>(null)
    const [isDialog, setIsDialog] = useState(false);
    const [image, setImage] = useState<any>({
        uri: imgurl.imgAvatar,
        fileName: null,
    })

    useFocusEffect(
        useCallback(() => {
            fetchUser()
        }, [userInfo]),
    )

    useEffect(() => {
        fillData()
    }, [profile])

    const fetchUser = async () => {
        if (userInfo) {
            const providerData = userInfo.providerData[0]
            const user = await findUserById(providerData.uid)
            setProfile(user)
        }
    }

    const fillData = () => {
        if (profile?.photoUrl == null) {
            setImage({ uri: imgurl.imgAvatar })
        } else {
            setImage({ ...image, uri: profile?.photoUrl })
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

    const onChooseImage = async () => {
        const res: any = await pickImage()
        if (res.canceled == true) {
            alert("Cancel success!")
        } else {
            const { uri, fileName } = getImages(res)
            setImage({ uri, fileName })
            uploadImageFirebaseStorage(profile?.id, uri)
        }
    };

    const getImages = (res: any) => {
        const uri = res.assets[0].uri
        const fileName = res.assets[0].fileName
        return { uri, fileName }
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
                image={image.uri}
            />
            <BodyProfile />
            <MySpeedDial
                toggleDialogLogOut={toggleDialogLogOut}
                onChooseImage={onChooseImage}
            />
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