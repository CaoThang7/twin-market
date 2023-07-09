import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { myOnlineShopping } from '@models/utilsUser'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import Color from "@common/color"
import NameNavigator from "@common/navigator"
import Bill from 'react-native-vector-icons/AntDesign'
import Cart from 'react-native-vector-icons/FontAwesome'
import CaretRight from 'react-native-vector-icons/AntDesign'

const MyShopping = () => {
    const { t } = useTranslation();
    const navigation: any = useNavigation()
    const mode = useSelector(selectValueTheme)

    const navigateMyShopping = (category: string) => {
        if (category === "order") {
            navigation.navigate(NameNavigator.MYORDER)
        }
        if (category === "cart") {
            navigation.navigate(NameNavigator.CART)
        }
    }

    return (
        <View style={[styles.boxUserShopping, { backgroundColor: mode ? Color.colorApp.WHITE : Color.colorApp.OPACITYBLACK }]}>
            {myOnlineShopping.map((e) =>
                <TouchableOpacity
                    style={styles.itemShopping}
                    key={e.id}
                    onPress={() => navigateMyShopping(e.category)}>
                    {e.category == 'order' ?
                        <>
                            <Bill
                                name='copy1'
                                color={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
                                size={20}
                            />
                        </>
                        :
                        <>
                            <Cart
                                name='shopping-basket'
                                color={mode ? Color.colorApp.BLACK : Color.colorApp.WHITE}
                                size={18}
                            />
                        </>
                    }
                    <View style={styles.itemRight}>
                        <Text
                            style={[
                                styles.txtItemRight,
                                {
                                    color: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE,
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
        </View>
    )
}

export default MyShopping

const styles = StyleSheet.create({
    boxUserShopping: {
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    itemShopping: {
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