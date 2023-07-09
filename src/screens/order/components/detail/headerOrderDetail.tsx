import React from 'react'
import Color from "@common/color"
import { StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { Icon, Header } from "react-native-elements"
import { selectValueTheme } from "@redux/selector/theme"

const HeaderOrderDetail = ({ onPress }: { onPress(): void }) => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)
    const txtTitle: string = t("orderDetail:titleHeaderOrderDetail")

    return (
        <Header
            containerStyle={styles.headerStyle}
            leftComponent={
                <Icon
                    onPress={onPress}
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
    )
}

export default HeaderOrderDetail

const styles = StyleSheet.create({
    headerStyle: { borderBottomWidth: 0 },
})