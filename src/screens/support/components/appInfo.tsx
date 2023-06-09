import React from 'react'
import app from 'app.json'
import Color from "@common/color"
import mainApp from 'package.json'
import settingExpo from '.expo/settings.json'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, View } from 'react-native'
import { selectValueTheme } from "@redux/selector/theme"

const AppInfo = () => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)

    return (
        <View style={styles.container}>
            {/* name app */}
            <View style={styles.boxInfoApp}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>{t("appInfo:nameApp")}</Text>
                <Text style={styles.txtValue}>{app.expo.name}</Text>
            </View>
            {/* version */}
            <View style={styles.boxInfoApp}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>{t("appInfo:version")}</Text>
                <Text style={styles.txtValue}>{app.expo.version}</Text>
            </View>
            {/* hostType */}
            <View style={styles.boxInfoApp}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>{t("appInfo:hostType")}</Text>
                <Text style={styles.txtValue}>{settingExpo.hostType}</Text>
            </View>
            {/* lanTyp */}
            <View style={styles.boxInfoApp}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>{t("appInfo:lanTyp")}</Text>
                <Text style={styles.txtValue}>{settingExpo.lanType}</Text>
            </View>
            {/* Main */}
            <View style={styles.boxInfoApp}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>{t("appInfo:main")}</Text>
                <Text style={styles.txtValue}>{mainApp.main}</Text>
            </View>
            {/* Device */}
            <View style={styles.boxInfoApp}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>{t("appInfo:device")}</Text>
                <Text style={styles.txtValue}>Android/IOS</Text>
            </View>
        </View>
    )
}

export default AppInfo

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    boxInfoApp: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10
    },
    txtName: {
        fontSize: 16,
    },
    txtValue: {
        color: Color.colorApp.DRAKGREY
    }
})