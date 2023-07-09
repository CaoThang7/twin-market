import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import React from 'react'
import Color from "@common/color"
import imgurl from '@common/imgurl'
import { useTranslation } from "react-i18next"

const MyOrderEmpty = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgMyOrderEmpty}
                source={{ uri: imgurl.imgMyOrderEmpty }}
            />
            <Text style={styles.txtMyOrderEmpty}>{t("orderDetail:txtMyOrderEmpty")}</Text>
        </View>
    )
}

export default MyOrderEmpty

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        height: '100%',
    },
    imgMyOrderEmpty: {
        height: 150,
        width: 150,
    },
    txtMyOrderEmpty: {
        fontSize: 16,
        color: Color.colorApp.DRAKGREY
    }
})