import { StyleSheet, View } from 'react-native'
import React from 'react'
import MyShopping from './myShopping'
import UtilsProfile from './utilsProfile'

const BodyProfile = () => {

    return (
        <View style={styles.container}>
            <MyShopping />
            <UtilsProfile/>
        </View>
    )
}

export default BodyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
})