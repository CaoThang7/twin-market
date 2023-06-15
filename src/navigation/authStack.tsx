import React from "react"
import NameNavigator from "@common/navigator"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "@screens/auth/login"

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={NameNavigator.LOGIN}
            screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen
                options={{ headerShown: false }}
                name={NameNavigator.LOGIN}
                component={Login}
            />
        </Stack.Navigator>
    )
}

export default AuthStack