import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { myOnlineShopping } from '@models/utilsUser'
import CaretRight from 'react-native-vector-icons/AntDesign'
import Cart from 'react-native-vector-icons/FontAwesome'
import Bill from 'react-native-vector-icons/AntDesign'
import Color from "@common/color"

const MyShopping = () => {

    const navigateMyShopping = (category: string) => {
        if (category === "order") {
            console.log("order")
        }
        if (category === "cart") {
            console.log("cart")
        }
    }

    return (
        <View style={styles.boxUserShopping}>
            {myOnlineShopping.map((e) =>
                <TouchableOpacity
                    style={styles.itemShopping}
                    key={e.id}
                    onPress={() => navigateMyShopping(e.category)}>
                    {e.category == 'order' ?
                        <>
                            <Bill name='copy1' color={Color.colorApp.WHITE} size={20} />
                        </>
                        :
                        <>
                            <Cart name='shopping-basket' color={Color.colorApp.WHITE} size={18} />
                        </>
                    }
                    <View style={styles.itemRight}>
                        <Text style={styles.txtItemRight}>{e.name}</Text>
                        <CaretRight name='caretright' color={Color.colorApp.WHITE} size={20} />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default MyShopping

const styles = StyleSheet.create({
    boxUserShopping: {
        backgroundColor: Color.colorApp.OPACITYBLACK,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    itemShopping: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 10,
    },
    itemRight: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    txtItemRight: {
        color: Color.colorApp.WHITE,
        fontSize: 18,
    },
})