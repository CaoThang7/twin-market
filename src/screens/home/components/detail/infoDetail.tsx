import React, { useRef } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native'
import Color from "@common/color"
import ItemImage from './itemImage'
import Carousel from 'react-native-snap-carousel'
import { useSelector } from "react-redux"
import { ProductItemProps } from '@models/product'
import { AirbnbRating } from 'react-native-ratings'
import { currencyFormat } from '@utils/currencyFormat'
import { imgEmptyProductDetail } from '@common/imgEmpty'
import { selectValueTheme } from "@redux/selector/theme"
const { width: screenWidth } = Dimensions.get('window')

const InfoDetail = ({ productDetail }: { productDetail: ProductItemProps }) => {
    const carouselRef = useRef(null);
    const dataImageDetail: any = productDetail.image ? productDetail.image : imgEmptyProductDetail
    const mode = useSelector(selectValueTheme)

    return (
        <View>
            <Carousel
                loop
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 20}
                data={dataImageDetail}
                renderItem={({ item }) => <ItemImage item={item} />}
                hasParallaxImages={true}
                layout={'stack'}
                layoutCardOffset={10}
            />
            <View style={styles.boxItemInfo}>
                <Text style={[styles.txtName, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {productDetail.name}
                </Text>
                <Text style={styles.txtQuantityOrder}>
                    {`Quantity Order: ${productDetail.quantityOrder}`}
                </Text>
                <Text style={[styles.txtPrice, { color: mode ? Color.colorApp.WHITE : Color.colorApp.BLACK }]}>
                    {currencyFormat(productDetail.price)}
                </Text>
                <AirbnbRating
                    defaultRating={productDetail.rating}
                    showRating={false}
                    isDisabled={true}
                    size={30}
                    starContainerStyle={styles.starContainerStyle}
                />
            </View>
            <View style={[styles.lineHorizontal, { borderBottomColor: mode ? Color.colorApp.WHITE : Color.colorApp.LIGHTGREY }]} />
            <View style={styles.boxDescription}>
                <Text numberOfLines={8} style={styles.txtDescription}>
                    {productDetail.description}
                </Text>
            </View>
        </View>
    )
}

export default InfoDetail

const styles = StyleSheet.create({
    boxItemInfo: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        marginTop: 10
    },
    txtName: {
        fontSize: 18,
        fontWeight: '500'
    },
    txtQuantityOrder: {
        fontSize: 16,
        marginTop: 5,
        color: Color.colorApp.DRAKGREY
    },
    txtPrice: {
        marginTop: 5,
        fontSize: 28,
        fontWeight: 'bold'
    },
    lineHorizontal: {
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 1,
        opacity: 0.1
    },
    boxDescription: {
        marginTop: 5,
        paddingHorizontal: 10,
    },
    txtDescription: {
        fontSize: 18,
        marginTop: 5,
        color: Color.colorApp.DRAKGREY
    },
    starContainerStyle: { marginRight: 178 }
})