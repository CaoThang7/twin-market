import React from 'react'
import Color from "@common/color"
import MyOrderListCancel from './cancel/orderCancel'
import MyOrderListPending from './pending/myOrderList'
import MyOrderListSuccess from './success/orderSuccess'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { selectValueTheme } from "@redux/selector/theme"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const TabViewOrder = () => {
    const { t } = useTranslation()
    const mode = useSelector(selectValueTheme)

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Color.colorApp.DARKORANGE,
                tabBarInactiveTintColor: Color.colorApp.DRAKGREY,
                tabBarIndicatorStyle: {
                    backgroundColor: Color.colorApp.DARKORANGE
                },
                tabBarStyle: {
                    backgroundColor: mode ? Color.colorApp.BLACK : Color.colorApp.WHITE
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Tab.Screen name={t("order:txtTabOrderPending")} component={MyOrderListPending} />
            <Tab.Screen name={t("order:txtTabOrderSuccess")} component={MyOrderListSuccess} />
            <Tab.Screen name={t("order:txtTabOrderCancel")} component={MyOrderListCancel} />
        </Tab.Navigator>
    )
}

export default TabViewOrder
