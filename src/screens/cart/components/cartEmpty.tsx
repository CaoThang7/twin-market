import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import React from 'react'
import imgurl from '@common/imgurl'
import { useTranslation } from "react-i18next"

const CartEmpty = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <Image
                style={styles.imgCartEmpty}
                source={{ uri: imgurl.imgCartEmpty }}
            />
            <Text style={styles.txtCartEmpty}>{t("cart:txtCartEmpty")}</Text>
        </View>
    )
}

export default CartEmpty

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    imgCartEmpty: {
        height: 200,
        width: 200
    },
    txtCartEmpty: {
        fontSize: 16
    }
})