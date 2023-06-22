import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '@common/color'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { userProfile } from '@models/userProfile'
import { selectValueTheme } from "@redux/selector/theme"

const Infomation: React.FC<userProfile> = (props) => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)

    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={[
                        styles.txtFullName,
                        {
                            color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK
                        }
                    ]}>
                    {props.fullName ? props.fullName : t("settings:nofullName")}
                </Text>
            </View>
            <View style={styles.itemEmail}>
                <Text
                    style={[
                        styles.txtEmail,
                        {
                            color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK
                        }
                    ]}>
                    {props.email ? props.email : t("settings:noEmail")}
                </Text>
            </View>
            <View style={styles.itemPhone}>
                <Text style={styles.txtPhone}>{props.phoneNumber ? props.phoneNumber : "phone"}</Text>
            </View>
        </View>
    )
}

export default Infomation

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtFullName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    itemEmail: { marginTop: 10 },
    txtEmail: { fontSize: 18 },
    itemPhone: {
        marginTop: 10,
        backgroundColor: 'green'
    },
    txtPhone: {
        fontSize: 18,
        color: 'white'
    }
})