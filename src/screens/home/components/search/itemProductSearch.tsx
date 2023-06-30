import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import Color from "@common/color"
import NameNavigator from "@common/navigator"
import { ProductItemProps } from '@models/product'
import { AirbnbRating } from 'react-native-ratings'
import { currencyFormat } from '@utils/currencyFormat'
import { useNavigation } from "@react-navigation/native"

const ItemProductSearch = ({ item }: { item: ProductItemProps }) => {
    const navigation: any = useNavigation();

    const gotoProductDetail = () => {
        navigation.navigate(NameNavigator.DETAILPRODUCT, {
            productId: item.uid
        })
    }

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: Color.colorApp.DARKORANGE }]}
            onPress={gotoProductDetail}>
            <View style={styles.boxItem}>
                <Image source={{ uri: item.image[0] }} style={styles.image} />
                <View style={styles.boxItemRight}>
                    <View style={styles.boxText}>
                        <Text style={styles.txtName}>{item.name}</Text>
                        <Text style={styles.txtPrice}>{currencyFormat(item.price)}</Text>
                        <Text style={styles.txtDescription} numberOfLines={1}>{item.description}</Text>
                    </View>
                    <AirbnbRating
                        defaultRating={item.rating}
                        showRating={false}
                        isDisabled={true}
                        size={30}
                        starContainerStyle={styles.starContainerStyle}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemProductSearch

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        borderRadius: 15,
        alignSelf: 'center',
        marginVertical: 5,
    },
    boxItem: {
        flexDirection: 'row',
        height: '100%',
        padding: 5
    },
    image: {
        width: '35%',
        height: '100%',
        borderRadius: 10,
    },
    boxText: {
        marginLeft: 5,
        flexDirection: 'column',
    },
    txtName: {
        fontSize: 18,
        fontWeight: '600',
    },
    txtPrice: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: '600',
        color: Color.colorApp.YELLOW
    },
    txtDescription: {
        fontSize: 18,
        marginTop: 2,
        width: 200,
        color: Color.colorApp.GHOSTBLACK
    },
    boxItemRight: { flexDirection: 'column' },
    starContainerStyle: { marginRight: 20 }
})