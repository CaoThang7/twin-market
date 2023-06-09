import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BottomSheetTheme, BottomSheetLanguage } from '@components/bottomsheet'
import { selectValueTheme } from "@redux/selector/theme"
import { useDispatch, useSelector } from "react-redux"
import { toggleDarkMode } from "@redux/slices/theme"
import { changeLanguage } from "@redux/slices/language"
import { utilsProfile } from '@models/utilsUser'
import { useTranslation } from "react-i18next"
import Color from "@common/color"
import CaretRight from 'react-native-vector-icons/AntDesign'
import UtilsIcon from 'react-native-vector-icons/MaterialCommunityIcons'

type BottomSheetComponentProps = {};

const UtilsProfile: React.FunctionComponent<BottomSheetComponentProps> = () => {
    const { t } = useTranslation();
    const [valueLng, setValueLng] = useState('en');
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleLanguage, setIsVisibleLanguage] = useState(false);
    const dispatch = useDispatch();
    const mode = useSelector(selectValueTheme)

    const navigateMyUtils = (category: string) => {
        if (category === "theme") {
            setIsVisible(true)
        }
        if (category === "language") {
            setIsVisibleLanguage(true)
        }
        if (category === "support") {
            console.log("support")
        }
    }

    const onChangeLanguage = (value: string) => {
        setValueLng(value)
        dispatch(changeLanguage(value))
    }

    return (
        <View style={[styles.boxUtilsUser, { backgroundColor: mode ? Color.colorApp.WHITE : Color.colorApp.OPACITYBLACK }]}>
            {utilsProfile.map((e) =>
                <TouchableOpacity
                    style={styles.itemUtils}
                    key={e.name}
                    onPress={() => navigateMyUtils(e.category)}>
                    <UtilsIcon
                        name={e.icon}
                        color={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
                        size={20}
                    />
                    <View style={styles.itemRight}>
                        <Text
                            style={[
                                styles.txtItemRight,
                                {
                                    color: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE
                                }
                            ]}>
                            {t(`profile:${e.name}`)}
                        </Text>
                        <CaretRight
                            name='caretright'
                            color={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            )}
            <BottomSheetTheme
                isVisible={isVisible}
                onPress={() => setIsVisible(false)}
                valueSwitch={mode}
                onValueChange={() => dispatch(toggleDarkMode())}
                titleTheme={t("profile:titleTheme")}
                txtBtn={t("profile:textBtnCancel")}
                txtNameTheme={t("profile:textNameTheme")}
            />
            <BottomSheetLanguage
                isVisible={isVisibleLanguage}
                onPress={() => setIsVisibleLanguage(false)}
                valueRadio={valueLng}
                onValueChange={(value: string) => onChangeLanguage(value)}
                titleLanguage={t("profile:titleLanguage")}
                txtBtn={t("profile:textBtnCancel")}
            />
        </View>
    )
}

export default UtilsProfile

const styles = StyleSheet.create({
    boxUtilsUser: {
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20
    },
    itemUtils: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 10,
    },
    itemRight: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    txtItemRight: {
        fontSize: 18,
    },
})