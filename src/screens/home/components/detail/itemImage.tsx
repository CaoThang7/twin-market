import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const ItemImage = ({ item }: any) => {
    return (
        <View style={styles.boxItemImage}>
            <Image
                source={{ uri: item }}
                style={styles.image}
            />
        </View>

    )
}

export default ItemImage

const styles = StyleSheet.create({
    boxItemImage: {
        borderRadius: 10,
        height: 250,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'stretch',
        borderRadius: 10,
    },
})