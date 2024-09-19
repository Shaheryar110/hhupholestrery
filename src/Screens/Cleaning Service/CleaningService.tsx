import { StyleSheet, Text, View } from 'react-native';
import { Box, ScrollView } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import React from 'react'
import BookNowButton from '../../Components/Common/BookNowButton';

const CleaningService = () => {
    const lines = [
        'Thank you for your inquiry about getting an estimate for your project.',
        'Our hours are Monday thru Thursday, 9 to 4  Friday, 9 to 2',
        'If you come into our showroom at 8770 Commerce Park Pl  Suite C, Indianapolis, IN.  46268',
        'We have two rooms of books and resources for other fabrics to choose from.',
        'Your fabric must be chosen before Mr. Hughey comes to your house to review the project.',
        'Sometimes, we will quote from a picture.',
        'A PDF file will be sent to you outlining our proposal.',
        'If you want to move forward, please call our office with a 50% deposit.',
        'Three percent will be added for credit card purchases.',
        'When the fabric arrives, we will schedule a pickup or you can bring your project to us..',
        'Under normal conditions we can complete the work in a week to ten days.',
        'With current conditions, getting your furniture back to you can take up to three weeks.',
        'Typically, small jobs take little time.',
        'Thanks for reaching out to us, and we hope to hear from you soon.'
    ]
    return (
        <ScrollView>
            <View style={styles.main} >
                <Box sx={{ width: "100%", height: "35%" }} >
                    <Image source={require("../../Components/images/cleaning.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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

                        <Text style={styles.contentHeading} >Residential Service</Text>
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

                        <Text style={styles.pageheading} >Dear Prospective Client</Text>
                        <Box sx={styles.line} ></Box>
                        {lines.map((data, index) => {
                            return (
                                <Text key={index} style={{ width: "95%", paddingBottom: 5 }} >{data}</Text>
                            )
                        })}
                        <Text>
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

export default CleaningService

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: 900,
        paddingBottom: 190,
        marginBottom: 200

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