import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderProfile from './components/headerProfile'
import BodyProfile from './components/bodyProfile'
import Color from "@common/color"

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderProfile />
            <BodyProfile />
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorApp.WHITE
    }
})