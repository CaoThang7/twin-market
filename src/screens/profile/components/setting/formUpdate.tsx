import React, { useState } from 'react'
import { emailValid, fullnameValid } from '@common/validator'
import { useNavigation } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"
import { StyleSheet, Text, View } from 'react-native'
import { useAppSelector } from "@hooks/useTypeRedux"
import { userProfile } from '@models/userProfile'
import { useTranslation } from "react-i18next"
import { updateUser } from '@services/user'
import Color from "@common/color"
import Loading from '@components/loading'
import NameNavigator from "@common/navigator"
import ButtonComponent from '@components/button'
import SuccessDialog from '@components/successDialog'
import TextInputComponent from '@components/text_input'

const FormUpdate: React.FC<userProfile> = (props) => {
    const { t } = useTranslation()
    const navigation: any = useNavigation();
    const mode = useAppSelector(selectValueTheme);
    const [fullName, setFullName] = useState(props.fullName || '')
    const [email, setEmail] = useState(props.email || '')
    const [dialog, setDialog] = useState({
        isSuccess: false,
        isLoading: false,
    })

    const onChangeFullName = (value: string) => {
        setFullName(value)
    }

    const onChangeEmail = (value: string) => {
        setEmail(value)
    }

    const showLoadingDialog = () => {
        setDialog((prev) => ({ ...prev, isLoading: true }))
    }

    const hideLoadingDialog = () => {
        setDialog((prev) => ({ ...prev, isLoading: false }))
    }

    const showSuccessDialog = () => {
        setDialog((prev) => ({ ...prev, isSuccess: true }))
    }

    const hideSuccessDialog = () => {
        setDialog((prev) => ({ ...prev, isSuccess: false }))
    }

    const onMoveProfile = () => {
        navigation.navigate(NameNavigator.PROFILE)
    }

    const onSubmitUpdate = async () => {
        const data = {
            fullName: fullName,
            email: email
        }
        if (fullnameValid(fullName) && emailValid(email)) {
            showLoadingDialog()
            updateUser(props.id, data).then(() => {
                hideLoadingDialog()
                showSuccessDialog()
            })
        }
    }

    return (
        <View style={styles.container}>
            <TextInputComponent
                placeholder={t("settings:enterFullName")}
                valueTextInput={fullName}
                onChangeText={onChangeFullName}
                keyboardType={'default'}
            />
            <Text>{''}</Text>
            <TextInputComponent
                placeholder={t("settings:enterEmail")}
                valueTextInput={email}
                onChangeText={onChangeEmail}
                keyboardType={'default'}
            />
            <View style={styles.boxBtnUpdate}>
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btnUpdate}
                    title={dialog.isLoading ? <Loading color={Color.colorApp.WHITE} /> : t("settings:btnUpdate")}
                    titleStyle={styles.titleStyle}
                    onPress={onSubmitUpdate}
                />
            </View>
            <SuccessDialog
                isVisible={dialog.isSuccess}
                title={t("settings:updateSuccess")}
                titleButton={t("settings:titleBtnSuccess")}
                onPress={onMoveProfile}
                onBackdropPress={hideSuccessDialog}
                bgColor={mode ? Color.colorApp.GHOSTBLACK : Color.colorApp.GHOSTWHITE}
            />
        </View>
    )
}

export default FormUpdate

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    btnUpdate: {
        marginTop: 10,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxBtnUpdate: {
        marginVertical: 2
    }
})