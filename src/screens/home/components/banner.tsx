import {
  View,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import { carouselItems } from '@common/carousel';
const { width: screenWidth } = Dimensions.get('window');

const Banner = () => {
  const carouselRef = useRef(null);

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.boxItem}>
        <Image
          source={{ uri: item.imgBanner }}
          style={styles.image}
        />
      </View>

    )
  }

  return (
    <View>
      <Carousel
        autoplay
        loop
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 20}
        data={carouselItems}
        renderItem={renderItem}
        hasParallaxImages={true}
        layout={'stack'}
        layoutCardOffset={18}
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  boxItem: {
    borderRadius: 10,
    height: 200,
  }
})