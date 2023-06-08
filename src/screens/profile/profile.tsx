import React from 'react'
import { selectValueTheme } from "@redux/selector/theme"
import { StyleSheet, SafeAreaView } from 'react-native'
import { useSelector } from "react-redux"
import Color from "@common/color"
import BodyProfile from './components/bodyProfile'
import HeaderProfile from './components/headerProfile'

const Profile = () => {
    const mode = useSelector(selectValueTheme)

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