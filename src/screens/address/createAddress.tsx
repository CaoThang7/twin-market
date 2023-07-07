import React, { useState } from 'react'
import HeaderCreateAddress from './components/createAddress/headerCreateAddress'
import FormCreate from './components/createAddress/formCreate'
import ButtonComponent from '@components/button'
import Loading from '@components/loading'
import useAuth from '@hooks/useAuth'
import uuid from 'react-native-uuid'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { StyleSheet, View } from 'react-native'
import { createAddress } from '@services/address'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"

const CreateAddress = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [pincode, setPincode] = useState('')
    const [loading, setLoading] = useState(false)

    const uidAddress = uuid.v4()
    const { t } = useTranslation()
    const { userInfo } = useAuth()
    const navigation: any = useNavigation()
    const mode = useSelector(selectValueTheme)

    const onChangeCountry = (value: string) => {
        setCountry(value)
    }

    const onChangeCity = (value: string) => {
        setCity(value)
    }

    const onChangeStreet = (value: string) => {
        setStreet(value)
    }

    const onChangePincode = (value: string) => {
        setPincode(value)
    }

    const onGoBackAddress = () => {
        navigation.goBack()
    }

    const onSubmitCreateNewAddress = async () => {
        setLoading(true)
        const address = {
            uid: uidAddress,
            userId: userInfo?.providerData[0].uid,
            country: country,
            city: city,
            street: street,
            pincode: pincode
        }
        createAddress(address)
        setTimeout(() => {
            setLoading(false)
            onGoBackAddress()
        }, 2000);
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderCreateAddress onPress={onGoBackAddress} />
            {/* Body */}
            <View style={styles.body}>
                <FormCreate
                    country={country}
                    city={city}
                    street={street}
                    pincode={pincode}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeStreet={onChangeStreet}
                    onChangePincode={onChangePincode}
                />
            </View>
            {/* Footer */}
            <View style={[styles.footer, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
                <ButtonComponent
                    color={Color.bgColor.LUSH}
                    style={styles.btnOrder}
                    title={
                        loading
                            ? <Loading color={Color.colorApp.WHITE} />
                            : t("address:txtBtnSubmitCreateAddress")
                    }
                    titleStyle={styles.titleStyle}
                    onPress={onSubmitCreateNewAddress} />
            </View>
        </View>
    )
}

export default CreateAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        marginHorizontal: 20,
    },
    footer: {
        flex: 0.15,
        borderTopWidth: 0,
        shadowColor: Color.colorApp.DARKORANGE,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    btnOrder: {
        marginTop: 10,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
})