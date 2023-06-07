import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/themed';
import Color from "@common/color"

const HeaderProfile = () => {
    return (
        <View style={styles.boxProfile}>
            <Avatar
                size={90}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <View style={styles.txtStyle}>
                <Text style={styles.txtName}>lycaothang</Text>
                <Text style={styles.txtEmail}>thangly2k1@gmail.com</Text>
            </View>
        </View>
    )
}

export default HeaderProfile

const styles = StyleSheet.create({
    boxProfile: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    txtName: {
        color: Color.colorApp.BLACK,
        fontWeight: "bold",
        fontSize: 22
    },
    txtEmail: {
        color: Color.colorApp.BLACK,
        fontSize: 22
    },
})