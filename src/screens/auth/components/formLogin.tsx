import React, { useRef, useState } from 'react'
import TextInputComponent from '@components/text_input'
import ButtonComponent from '@components/button'
import NameNavigator from "@common/navigator"
import firebase from 'firebase/compat/app'
import Loading from '@components/loading'
import Color from "@common/color"
import { useTranslation } from "react-i18next"
import { phoneValid } from '@common/validator'
import { StyleSheet, View } from 'react-native'
import { firebaseConfig } from 'firebase.config'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import { useNavigation } from "@react-navigation/native"
import { createUser, findUserById } from '@services/user'

const FormLogin = () => {
    const { t } = useTranslation()
    const [phone, setPhone] = useState('')
    const recaptchaVerifier = useRef(null)
    const [verificationId, setVerificationId] = useState<any>(null)
    const [code, setCode] = useState('')
    const [sms, setSms] = useState(false)
    const [dialog, setDialog] = useState({
        isLoading: false,
    })

    const navigation: any = useNavigation();

    const onChangePhone = (value: string) => {
        setPhone(value)
    }

    const onChangeCode = (value: string) => {
        setCode(value)
    }

    const showLoadingDialog = () => {
        setDialog((prev) => ({ ...prev, isLoading: true }))
    }

    const hideLoadingDialog = () => {
        setDialog((prev) => ({ ...prev, isLoading: false }))
    }

    const onSubmitLogin = async () => {
        if (phoneValid(`+84${phone}`)) {
            try {
                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                const verificationId = await phoneProvider.verifyPhoneNumber(
                    `+84${phone}`,
                    recaptchaVerifier.current!
                )
                setVerificationId(verificationId);
                setSms(true)
            } catch (error) {
                if (error) {
                    setSms(false)
                    alert("Cancel Success!")
                }
            }
        }
    }

    const confirmCode = async () => {
        showLoadingDialog()
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
        await firebase.auth().signInWithCredential(credential)
            .then((result) => {
                if (result) {
                    hideLoadingDialog()
                    setCode('')
                    const providerData = result.user?.providerData[0]
                    createNewUserWithData(providerData)
                    navigation.navigate(NameNavigator.HOMETAB)
                }
            })
            .catch((error) => {
                hideLoadingDialog()
                alert("Invalid code.")
            })
    }

    const createNewUserWithData = async (data: any) => {
        const user = {
            id: data.uid,
            fullName: data?.displayName,
            email: data?.email,
            phoneNumber: data.phoneNumber,
            photoUrl: data?.photoURL,
        }
        const userId = await findUserById(data.uid)
        // checkUserExistByUid
        if (userId == null || !userId) {
            createUser(user)
        }
    }

    return (
        <View style={styles.boxFormLogin}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />
            {sms ?
                <>
                    <TextInputComponent
                        placeholder={t("auth:yourCode")}
                        valueTextInput={code}
                        onChangeText={onChangeCode}
                        keyboardType={'numeric'}
                    />
                    <View style={styles.boxBtnLogin}>
                        <ButtonComponent
                            color={Color.bgColor.ORANGECORAL}
                            style={styles.btnLoginNow}
                            title={dialog.isLoading ? <Loading color={Color.colorApp.WHITE} /> : t("auth:confirmCode")}
                            titleStyle={styles.titleStyle}
                            onPress={confirmCode}
                        />
                    </View>
                </>
                :
                <>
                    <TextInputComponent
                        placeholder={t("auth:yourNumber")}
                        valueTextInput={phone}
                        onChangeText={onChangePhone}
                        keyboardType={'numeric'}
                    />
                    <View style={styles.boxBtnLogin}>
                        <ButtonComponent
                            color={Color.bgColor.CHERRY}
                            style={styles.btnLoginNow}
                            title={t("account:txtBtnLogin")}
                            titleStyle={styles.titleStyle}
                            onPress={onSubmitLogin}
                        />
                    </View>
                </>
            }
        </View>
    )
}

export default FormLogin

const styles = StyleSheet.create({
    boxFormLogin: { marginTop: 0 },
    btnLoginNow: {
        marginTop: 10,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
    boxBtnLogin: {
        marginVertical: 5
    }
})