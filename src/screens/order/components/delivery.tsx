import React from 'react'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, View } from 'react-native'
import { currencyFormat } from '@utils/currencyFormat'
import { selectValueTheme } from "@redux/selector/theme"

const DeliveryServices = ({ totalPriceFinal, priceDelivery }: { totalPriceFinal: number, priceDelivery: number }) => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)

    return (
        <View style={styles.container}>
            <View style={styles.boxItem}>
                <Text style={[styles.txtItem, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {t("order:txtDelivery")}
                </Text>
                <Text style={[styles.txtItem, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {currencyFormat(priceDelivery)}
                </Text>
            </View>
            <View style={styles.boxItem}>
                <Text style={[styles.txtItem, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {t("order:txtTaxFees")}
                </Text>
                <Text style={[styles.txtItem, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {t("order:txtFree")}
                </Text>
            </View>
            <View style={styles.boxItem}>
                <Text style={[styles.txtTitleTotalPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {t("order:txtTotalPrice")}
                </Text>
                <Text style={[styles.txtTitleTotalPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {currencyFormat(totalPriceFinal)}
                </Text>
            </View>
        </View>
    )
}

export default DeliveryServices

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    boxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    txtItem: {
        fontSize: 16,
    },
    txtTitleTotalPrice: {
        fontWeight: 'bold',
        fontSize: 16
    },
})