import React from 'react'
import Color from "@common/color"
import AppInfo from './components/appInfo'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { Icon, Header } from "react-native-elements"
import { StyleSheet, View } from 'react-native'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

const Support = () => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    const navigation = useNavigation()
    const txtTitle: string = t("profile:support")

    const onGoBackProfile = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <Header
                containerStyle={styles.headerStyle}
                leftComponent={
                    <Icon
                        onPress={onGoBackProfile}
                        name={'chevron-back-outline'}
                        type="ionicon"
                        color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK}
                        size={36}
                    />
                }
                centerComponent={{
                    text: txtTitle,
                    style: {
                        color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK,
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}
                backgroundColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
            />
            {/* Body */}
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
    headerStyle: { borderBottomWidth: 0 },
})