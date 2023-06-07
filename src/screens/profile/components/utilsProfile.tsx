import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { utilsProfile } from '@models/utilsUser'
import Color from "@common/color"
import CaretRight from 'react-native-vector-icons/AntDesign'
import UtilsIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const UtilsProfile = () => {

    const navigateMyUtils = (category: string) => {
        if (category === "theme") {
            console.log("theme")
        }
        if (category === "language") {
            console.log("language")
        }
        if (category === "support") {
            console.log("support")
        }
    }

    return (
        <View style={styles.boxUtilsUser}>
            {utilsProfile.map((e) =>
                <TouchableOpacity
                    style={styles.itemUtils}
                    key={e.name}
                    onPress={() => navigateMyUtils(e.category)}>
                    <UtilsIcon name={e.icon} color={Color.colorApp.WHITE} size={20} />
                    <View style={styles.itemRight}>
                        <Text style={styles.txtItemRight}>{e.name}</Text>
                        <CaretRight name='caretright' color={Color.colorApp.WHITE} size={20} />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default UtilsProfile

const styles = StyleSheet.create({
    boxUtilsUser: {
        backgroundColor: Color.colorApp.OPACITYBLACK,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20
    },
    itemUtils: {
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