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

const AddressEmpty = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgAddressEmpty}
                source={{ uri: imgurl.imgAddressEmpty }}
            />
            <Text style={styles.txtAddressEmpty}>{t("address:txtAddressEmpty")}</Text>
        </View>
    )
}

export default AddressEmpty

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    imgAddressEmpty: {
        height: 150,
        width: 150,
    },
    txtAddressEmpty: {
        marginTop: 10,
        fontSize: 16,
        color: Color.colorApp.DRAKGREY
    }
})