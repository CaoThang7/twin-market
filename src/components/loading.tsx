import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"

type ListLoading = {
    color: string
}

const Loading: React.FC<ListLoading> = (props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator style={styles.indicatorStyle} size="large" color={props.color} />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    indicatorStyle: {
        marginTop: 8
    }
})