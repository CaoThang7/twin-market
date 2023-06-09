import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import { SpeedDial } from '@rneui/themed'
import { useTranslation } from "react-i18next"
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import NameNavigator from "@common/navigator"
import Color from "@common/color"

type dataProfile = {
    toggleDialogLogOut(): void,
    onChooseImage(): void
}

const MySpeedDial: React.FC<dataProfile> = (props) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false)
    const mode = useSelector(selectValueTheme)
    const titleInfo = t("profile:info")
    const titleChoosePhoto = t("profile:choosePhoto")
    const titleLogout = t("auth:logOut")
    const navigation: any = useNavigation();

    const gotoSettingProfile = () => {
        navigation.navigate(NameNavigator.STPROFILE)
    }

    return (
        <SpeedDial
            overlayColor={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
            style={styles.speedDiaStyle}
            buttonStyle={styles.btnSpeedDial}
            isOpen={open}
            icon={{ name: 'settings', color: '#fff' }}
            openIcon={{ name: 'close', color: '#fff' }}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
                icon={{ name: 'info', color: '#fff' }}
                title={titleInfo}
                titleStyle={[styles.titleSpeedDialAction, { backgroundColor: Color.colorApp.GREEN }]}
                onPress={gotoSettingProfile}
                buttonStyle={styles.btnSpeedDial}
            />
            <SpeedDial.Action
                icon={{ name: 'camera', color: '#fff' }}
                title={titleChoosePhoto}
                titleStyle={[styles.titleSpeedDialAction, { backgroundColor: Color.colorApp.CRIMSON }]}
                onPress={() => props.onChooseImage()}
                buttonStyle={styles.btnSpeedDial}
            />
            <SpeedDial.Action
                icon={{ name: 'logout', color: '#fff' }}
                title={titleLogout}
                titleStyle={[styles.titleSpeedDialAction, { backgroundColor: Color.colorApp.RED }]}
                onPress={() => props.toggleDialogLogOut()}
                buttonStyle={styles.btnSpeedDial}
            />
        </SpeedDial>
    )
}

export default MySpeedDial

const styles = StyleSheet.create({
    speedDiaStyle: {
        position: 'relative',
        paddingBottom: 30
    },
    btnSpeedDial: {
        backgroundColor: Color.colorApp.DARKORANGE,
    },
    titleSpeedDialAction: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
})