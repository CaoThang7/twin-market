import React from 'react'
import Color from "@common/color"
import AppInfo from './components/appInfo'
import HeaderSupport from './components/headerSupport'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View } from 'react-native'
import { useSelector } from "react-redux"

const Support = () => {
    const mode = useSelector(selectValueTheme)
    const navigation = useNavigation()

    const onGoBackProfile = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderSupport onPress={onGoBackProfile} />
            <View style={styles.body}>
                <AppInfo />
            </View>
        </View>
    )
}

export default Support

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        marginHorizontal: 20,
    },
})