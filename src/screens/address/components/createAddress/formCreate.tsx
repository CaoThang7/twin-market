import React from 'react'
import TextInputComponent from '@components/text_input'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from "react-i18next"

interface ListItemTextInput {
    country: string
    city: string
    street: string
    pincode: string
    onChangeCountry: Function
    onChangeCity: Function
    onChangeStreet: Function
    onChangePincode: Function
}

const FormCreate: React.FC<ListItemTextInput> = (props) => {
    const { t } = useTranslation()

    return (
        <View>
            <TextInputComponent
                placeholder={t("address:txtPlaceholderCountry")}
                valueTextInput={props.country}
                onChangeText={props.onChangeCountry}
                keyboardType={'default'}
            />
            <View style={styles.boxTextInput}>
                <TextInputComponent
                    placeholder={t("address:txtPlaceholderCity")}
                    valueTextInput={props.city}
                    onChangeText={props.onChangeCity}
                    keyboardType={'default'}
                />
            </View>
            <View style={styles.boxTextInput}>
                <TextInputComponent
                    placeholder={t("address:txtPlaceholderStreet")}
                    valueTextInput={props.street}
                    onChangeText={props.onChangeStreet}
                    keyboardType={'default'}
                />
            </View>
            <View style={styles.boxTextInput}>
                <TextInputComponent
                    placeholder={t("address:txtPlaceholderPincode")}
                    valueTextInput={props.pincode}
                    onChangeText={props.onChangePincode}
                    keyboardType={'default'}
                />
            </View>
        </View>
    )
}

export default FormCreate

const styles = StyleSheet.create({
    boxTextInput: { marginTop: 5 }
})