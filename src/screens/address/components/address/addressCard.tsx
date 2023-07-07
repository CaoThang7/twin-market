import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import Color from "@common/color"
import { ItemAddress } from '@models/address'
import { useTranslation } from "react-i18next"

const AddressCard = (
    {
        item,
        saveAddress,
        selected
    }: {
        item: ItemAddress,
        saveAddress: Function,
        selected: boolean
    }
) => {

    const { t } = useTranslation()

    return (
        <View style={[styles.container, { backgroundColor: '#FFEFD5' }]}>
            <View style={styles.boxItem}>
                <View style={styles.boxItemRight}>
                    <View style={styles.boxText}>
                        <Text style={styles.txtCountry}>Country: {item.country}</Text>
                        <Text style={styles.txtItem}>City: {item.city}</Text>
                        <Text style={styles.txtItem}>Street: {item.street}</Text>
                        <Text style={styles.txtItem}>Pincode: {item.pincode}</Text>
                    </View>
                </View>
                {selected == true ? (
                    <Text style={styles.txtSelected}>{t("address:txtSelected")}</Text>
                ) : (
                    <TouchableOpacity style={styles.btnDefault}
                        onPress={() => saveAddress()}>
                        <Text style={styles.txtDefault}>{t("address:txtBtnDefault")}</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default AddressCard

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        borderRadius: 15,
        alignSelf: 'center',
        marginVertical: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    boxItem: {
        flexDirection: 'row',
        height: '100%',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxText: {
        marginLeft: 5,
        flexDirection: 'column',
    },
    txtCountry: {
        fontSize: 18,
        fontWeight: '600',
    },
    txtItem: {
        fontSize: 18,
        fontWeight: '400',
    },
    boxItemRight: { flexDirection: 'column' },
    btnDefault: {
        marginRight: 5,
        backgroundColor: 'green',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    txtSelected: {
        fontSize: 16,
        color: Color.colorApp.DARKORANGE,
        marginRight: 10,
        fontWeight: 'bold'
    },
    txtDefault: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
})