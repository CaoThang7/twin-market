import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import NameStack from "@common/navigator"
import HomeTabs from "./homeTabs"
import Support from "@screens/support"

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
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.SUPPORT}
                    component={Support}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainStack

