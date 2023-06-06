import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import MainStack from "./mainStack"
import NameStack from "@common/navigator"

const Stack = createStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NameStack.MAIN} component={MainStack} />
        </Stack.Navigator>
    )
}

export default RootStack