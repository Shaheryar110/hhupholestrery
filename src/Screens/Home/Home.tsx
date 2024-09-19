import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header';
import { Box, ScrollView } from '@gluestack-ui/themed';
import SearchBox from '../../Components/SearchBox';
// import BannerCarousel from '../../Components/BannerCarousel';
import Categories from '../../Components/Categories';
import Services from '../../Components/Services';
import { HomeScreenProps } from '../../NavigationTypes/Types';
import BannerCarousel from './BannerCarousel';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {


    const data = [
        'https://firebasestorage.googleapis.com/v0/b/gofullthrottle-d3fab.appspot.com/o/slider.png?alt=media&token=8c26f5df-f490-4df8-9473-d19ec929c26d',
        'https://firebasestorage.googleapis.com/v0/b/gofullthrottle-d3fab.appspot.com/o/slider.png?alt=media&token=8c26f5df-f490-4df8-9473-d19ec929c26d',
        'https://firebasestorage.googleapis.com/v0/b/gofullthrottle-d3fab.appspot.com/o/slider.png?alt=media&token=8c26f5df-f490-4df8-9473-d19ec929c26d',

    ];
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <ScrollView>

            <View style={styles.main} >
                <Box sx={{ top: 0, left: 0, position: "absolute", width: "100%", height: "40%", zIndex: -99 }} >
                    <Image source={require("../../Components/images/hero.png")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                {/* <Header /> */}
                <SearchBox onSearch={handleSearch} />
                <Box style={{ width: "100%", paddingHorizontal: 20, alignItems: "center", justifyContent: "center", marginTop: 25 }} >
                    {/* <Image source={require("../../Components/images/slider.png")}
                        style={{ width: 330, height: 220 }} alt='oops' /> */}
                    <BannerCarousel carouselData={data} />
                </Box>
                <Categories navigation={navigation} searchQuery={searchQuery} />
            </View>
        </ScrollView>

    )
}

export default Home

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: "100%",
        paddingBottom: 90

    }
})