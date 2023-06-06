import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileIcons from 'react-native-vector-icons/Feather'
import HomeIcons from 'react-native-vector-icons/Entypo'
import Profile from '@screens/profile/profile'
import NameStack from "@common/navigator"
import Home from '@screens/home/home'
import Color from "@common/color"

const Tab = createBottomTabNavigator();

const HomeTabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: Color.colorApp.DARKORANGE,
                tabBarInactiveTintColor: Color.colorApp.DRAKGREY,
                tabBarBackground: () => (
                    <View style={{
                        flex: 1,
                        backgroundColor: Color.colorApp.WHITE,
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