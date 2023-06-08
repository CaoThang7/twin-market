import React from "react"
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { selectValueTheme } from "@redux/selector/theme"
import { useSelector } from "react-redux"
import MainStack from "./mainStack"
import NameStack from "@common/navigator"

const Stack = createStackNavigator()

const RootStack = () => {
    const mode = useSelector(selectValueTheme)

    return (
        <NavigationContainer theme={mode ? DarkTheme : DefaultTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={NameStack.MAIN} component={MainStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack