import React from "react"
import NameStack from "@common/navigator"
import HomeTabs from "./homeTabs"
import Support from "@screens/support"
import CartScreen from "@screens/cart/cart"
import MyOrder from "@screens/order/myOrder"
import Address from "@screens/address/address"
import OrderScreen from "@screens/order/order"
import SearchScreen from "@screens/home/search"
import DetailProduct from "@screens/home/detail"
import OrderDetail from "@screens/order/orderDetail"
import CreateAddress from "@screens/address/createAddress"
import SettingProfile from "@screens/profile/settingProfile"
import { createStackNavigator } from "@react-navigation/stack"
import ProductByCategoryId from "@screens/home/components/productByCategoryId"

export type RootStackParamList = {
    HomeTab: undefined
    Support: undefined
    SettingProfile: undefined
    ProductListByCategoryId: {
        categoriesId: string,
        title: string,
        colorBg: string
    }
    DetailProduct: {
        productId: string
    },
    SearchScreen: undefined,
    CartScreen: undefined,
    OrderScreen: undefined,
    Address: undefined,
    CreateAddress: undefined,
    MyOrder: undefined,
    OrderDetail: {
        orderId: string
    },
};

const Stack = createStackNavigator<RootStackParamList>()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ gestureEnabled: false }}
            initialRouteName={NameStack.HOMETAB}>
            {/* profile */}
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
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.STPROFILE}
                    component={SettingProfile}
                />
            </Stack.Group>
            {/* home */}
            <Stack.Group>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.PRODUCTLIST}
                    component={ProductByCategoryId}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.DETAILPRODUCT}
                    component={DetailProduct}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.SEARCH}
                    component={SearchScreen}
                />
            </Stack.Group>
            {/* cart */}
            <Stack.Group>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.CART}
                    component={CartScreen}
                />
            </Stack.Group>
            {/* order */}
            <Stack.Group>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.ORDER}
                    component={OrderScreen}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.ADDRESS}
                    component={Address}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.CREATEADDRESS}
                    component={CreateAddress}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.MYORDER}
                    component={MyOrder}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name={NameStack.ORDERDETAIL}
                    component={OrderDetail}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainStack

