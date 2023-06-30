import React from 'react'
import Color from "@common/color"
import { useSelector } from "react-redux"
import { Icon } from "react-native-elements"
import NameNavigator from "@common/navigator"
import { StyleSheet, View } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { selectValueTheme } from "@redux/selector/theme"

const RightComponent = () => {
    const mode = useSelector(selectValueTheme)
    const navigation: any = useNavigation();

    const gotoSearchScreen = () => {
        navigation.navigate(NameNavigator.SEARCH)
    }

    return (
        <View style={styles.container}>
            <Icon
                onPress={gotoSearchScreen}
                name={'search'}
                type="ionicon"
                color={mode ? Color.colorApp.WHITE : Color.colorApp.BLACK}
                size={30}
            />
        </View>
    )
}

export default RightComponent

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 10
    }
})