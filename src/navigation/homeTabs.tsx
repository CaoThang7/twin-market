import React from 'react'
import { View } from 'react-native'
import { useSelector } from "react-redux"
import { selectValueTheme } from "@redux/selector/theme"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderIcons from 'react-native-vector-icons/AntDesign'
import OrderManagement from '@screens/order/orderManagement'
import ProfileIcons from 'react-native-vector-icons/Feather'
import HomeIcons from 'react-native-vector-icons/Entypo'
import Profile from '@screens/profile/profile'
import NameStack from "@common/navigator"
import Home from '@screens/home/home'
import Color from "@common/color"

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    const mode = useSelector(selectValueTheme)

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: Color.colorApp.DARKORANGE,
                tabBarInactiveTintColor: Color.colorApp.DRAKGREY,
                tabBarBackground: () => (
                    <View style={{
                        flex: 1,
                        backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }} />
                ),
                tabBarStyle: {
                    position: 'absolute',
                    height: 70,
                    borderRadius: 25,
                    borderTopWidth: 0,
                    shadowColor: Color.colorApp.DARKORANGE,
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 5,
                    shadowOpacity: 1.0,
                    elevation: 10,
                    paddingBottom: 10
                },
                tabBarHideOnKeyboard: true
            }}>
            <Tab.Screen
                name={NameStack.HOME}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcons name='shop' color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name={NameStack.ORDERMANAGEMENT}
                component={OrderManagement}
                options={{
                    headerShown: false,
                    tabBarLabel: 'OrderManagement',
                    tabBarIcon: ({ color, size }) => (
                        <OrderIcons name='copy1' color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name={NameStack.PROFILE}
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <ProfileIcons name="user" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTabs