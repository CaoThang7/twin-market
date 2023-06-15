import React, { useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from "react-redux"
import Color from "@common/color"
import BodyProfile from './components/bodyProfile'
import HeaderProfile from './components/headerProfile'
import useAuth from '@hooks/useAuth'
import WithoutAccount from './components/withoutAccount'

const Profile = () => {
    const mode = useSelector(selectValueTheme)
    const { userInfo } = useAuth()

    useFocusEffect(
        useCallback(() => {

        }, [userInfo]),
    )

    if (userInfo === null) {
        return <WithoutAccount />
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderProfile />
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