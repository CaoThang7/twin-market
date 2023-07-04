import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'

type RightSwipeProps = {
    onPress(): void
}

const RightSwipeItem: React.FC<RightSwipeProps> = (props) => {
    const imgUrl = "https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnDelete} onPress={props.onPress}>
                <Image
                    source={{ uri: imgUrl }}
                    style={styles.imageDelete}
                />
            </TouchableOpacity>
        </View>
    )
}

export default RightSwipeItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 130,
        borderRadius: 10,
        marginTop: 5,
    },
    btnDelete: {
        borderRadius: 10,
        width: 130,
        height: 130,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageDelete: {
        width: 30,
        height: 30,
        tintColor: '#fff'
    }
})