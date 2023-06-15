import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SocialContainer = () => {
    return (
        <View style={styles.container}>
            <Text>SocialContainer</Text>
        </View>
    )
}

export default SocialContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
})