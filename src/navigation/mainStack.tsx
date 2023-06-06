import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import NameStack from "@common/navigator"
import HomeTabs from "./homeTabs"

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ gestureEnabled: false }}
            initialRouteName={NameStack.HOMETAB}>
            <Stack.Group>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.HOMETAB}
                    component={HomeTabs}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainStack

