import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { selectValueTheme } from "@redux/selector/theme"
import { useSelector } from "react-redux"
import { Avatar } from '@rneui/themed';
import Color from "@common/color"
import imgurl from '@common/imgurl';

const HeaderProfile = () => {
    const mode = useSelector(selectValueTheme)

    return (
        <View style={styles.boxProfile}>
            <Avatar
                size={90}
                rounded
                source={{ uri: imgurl.imgAvatar }}
                avatarStyle={{
                    borderWidth: 2,
                    borderColor: Color.colorApp.DARKORANGE,
                }}
            />
            <View style={styles.txtStyle}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>lycaothang</Text>
                <Text style={[styles.txtEmail, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>thangly2k1@gmail.com</Text>
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
        alignItems: 'center',
    },
    txtName: {
        fontWeight: "bold",
        fontSize: 22
    },
    txtEmail: {
        fontSize: 22
    },
})