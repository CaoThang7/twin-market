import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import React from 'react'
import Color from "@common/color"
import imgLogoApp from '@common/imgurl'
import { useSelector } from "react-redux"
import { selectValueTheme } from "@redux/selector/theme"
const { width } = Dimensions.get("window")

const LeftComponent = () => {
    const mode = useSelector(selectValueTheme)

    return (
        <View style={styles.container}>
            <View style={styles.boxLogo}>
                <Image
                    style={styles.logoTop}
                    source={{ uri: mode ? imgLogoApp.logoAppBlack : imgLogoApp.logoAppWhite }}
                />
            </View>
            <View style={styles.boxText}>
                <Text style={[styles.txtTwin, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>Twin</Text>
                <Text style={[styles.txtMarket, { color: mode ? Color.colorApp.OPACITYWHITE : Color.colorApp.OPACITYBLACK }]}>Market</Text>
            </View>
        </View>
    )
}

export default LeftComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: 300,
    },
    boxLogo: {
        alignItems: "center",
        justifyContent: "center",
    },
    logoTop: {
        width: 80,
        height: 80,
        marginTop: width / 10 - 47
    },
    boxText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -10
    },
    txtTwin: {
        fontWeight: 'bold',
        fontSize: 22
    },
    txtMarket: {
        fontSize: 22,
    }
})