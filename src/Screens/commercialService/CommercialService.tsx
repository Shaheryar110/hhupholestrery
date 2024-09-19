import { StyleSheet, Text, View } from 'react-native';
import { Box, ScrollView } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import React from 'react'
import BookNowButton from '../../Components/Common/BookNowButton';

const CommercialService = () => {
    return (
        <ScrollView>
            <View style={styles.main} >
                <Box sx={{ width: "100%", height: "35%" }} >
                    <Image source={require("../../Components/images/commercial.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                <Box sx={styles.contentBox} >
                    <Box sx={{
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        paddingBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }} >

                        <Text style={styles.contentHeading} >Commercial Service</Text>
                        <Box sx={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5
                        }} >
                            <StarRatingDisplay
                                rating={4.5}
                                starSize={20}
                                starStyle={styles.star}
                            />
                            <Text  >(320 Reviews)</Text>
                        </Box>
                    </Box>
                    <Box sx={styles.mainContent} >

                        <Text style={styles.pageheading} >Commercial Upholstery Services in Indianapolis, IN</Text>
                        <Box sx={styles.line} ></Box>
                        <Text>
                            Commercial upholstery is a fantastic option for those business owners that want to be able to keep using the items that they have already purchased. Commercial upholstery from Hughey Hartman Upholstery allows you to make the most of the furniture that you have already purchased, give it new life, and change up the overall style.
                        </Text>
                        <Box sx={{ marginVertical: 20, width: "45%" }} >

                            <BookNowButton />
                        </Box>
                    </Box>
                </Box>
            </View>
        </ScrollView>
    )
}

export default CommercialService

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: 900,
        paddingBottom: 90,

    },
    contentBox: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    contentHeading: {
        fontSize: 16
    },
    star: {
        marginHorizontal: -1,
    },
    mainContent: {
        paddingTop: 20,
    },
    pageheading: {
        color: "black",
        fontSize: 23,
        paddingBottom: 10,
    },
    line: {
        backgroundColor: "#FA641D",
        width: "30%",
        height: 1.5,
        marginBottom: 15
    }

})