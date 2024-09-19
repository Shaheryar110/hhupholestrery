import {
    Dimensions,
    GestureResponderEvent,
    Pressable,
    View,
    Image,
    ViewStyle,
    StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface IProps {
    carouselData: string[];
    isLoading?: boolean;
    isLooped?: boolean;
}

const { width: screenWidth } = Dimensions.get('window');

const BannerCarousel: React.FC<IProps> = ({
    carouselData,
    isLooped = false,
}) => {
    const [imageAspectRatio, setImageAspectRatio] = useState(3);
    const [slideIndex, setSlideIndex] = React.useState(0);

    const carouselRef = React.useRef(null);

    useEffect(() => {
        const imageUri = carouselData[0];
        if (imageUri !== '')
            Image.getSize(imageUri, (width, height) =>
                setImageAspectRatio(width / height),
            );
    }, [carouselData]);

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={carouselData}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                inactiveSlideScale={0.95}
                useScrollView={true}
                autoplay={true}
                loop={isLooped}
                vertical={false}
                autoplayInterval={3000}
                onSnapToItem={index => setSlideIndex(index)}
                renderItem={({ item, index }) => {
                    if (!item) return null; // Handle empty or undefined item cases
                    return (
                        <Pressable
                            style={[
                                styles.bannerContainer,
                                { aspectRatio: imageAspectRatio },
                            ]}
                            key={`${item}_${index}`}>
                            <Image
                                style={{ ...styles.bannerImage }}
                                source={{ uri: item }}
                                resizeMode={'contain'}
                                defaultSource={{
                                    uri: 'https://admin.broadwaypizza.com.pk/images/banner/zxcmnadi12412452134.jpg',
                                }}
                            />
                        </Pressable>
                    );
                }}
            />

        </View>
    );
};

export default BannerCarousel;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    bannerContainer: {
        width: '100%',

    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        resizeMode: 'contain',

    },
    paginationContainer: {
        paddingVertical: 0,
        marginTop: 8,
    },
    activePaginationDot: {
        width: 40,
        height: 5,
        borderRadius: 5,
        marginHorizontal: -5,
    },
    inActivePaginationDot: {
        width: 30,
        height: 10,
        borderRadius: 5,
        marginHorizontal: -12,
    },
});