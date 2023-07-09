import React from 'react'
import Color from "@common/color"
import TabViewOrder from './components/myOrder/tabView'
import HeaderMyOrder from './components/myOrder/headerMyOrder'
import { selectValueTheme } from "@redux/selector/theme"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View } from 'react-native'
import { useSelector } from "react-redux"

const MyOrder = () => {
    const mode = useSelector(selectValueTheme)
    const navigation: any = useNavigation()

    const onGoBackProfile = () => {
        navigation.goBack()
    }

    return (
        <View style={[styles.container, { backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE }]}>
            <HeaderMyOrder onPress={onGoBackProfile} />
            <View style={styles.body}>
                <TabViewOrder />
            </View>
        </View>
    )
}

export default MyOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
})