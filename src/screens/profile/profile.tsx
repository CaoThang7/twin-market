import React, { useCallback, useState } from 'react'
import { useFocusEffect } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { StyleSheet, SafeAreaView } from 'react-native'
import { userProfile } from '@models/userProfile'
import { findUserById } from '@services/user'
import { useSelector } from "react-redux"
import Color from "@common/color"
import useAuth from '@hooks/useAuth'
import BodyProfile from './components/bodyProfile'
import HeaderProfile from './components/headerProfile'
import WithoutAccount from './components/withoutAccount'

const Profile = () => {
    const mode = useSelector(selectValueTheme)
    const { userInfo } = useAuth()
    const [profile, setProfile] = useState<userProfile | null>(null);

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
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})