import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Image, ScrollView } from '@gluestack-ui/themed';

interface IProps {
    data: {
        name: string;
        image: any;
    }[];
    heading: string;
    handleViewAllPress: () => void;
}

const Services: React.FC<IProps> = ({ data, heading, handleViewAllPress }) => {

    return (
        <Box sx={styles.categories} >
            <Box sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }} >

                <Text style={styles.heading} >{heading}</Text>
                <Text style={{ color: "#FA641D", fontSize: 17 }} onPress={handleViewAllPress} >View All</Text>
            </Box>
            <ScrollView horizontal >
                {data.map((item, index) => {
                    return (
                        <Box key={index} sx={{ paddingHorizontal: 10, width: 180, flexDirection: "column", paddingVertical: 20, justifyContent: "center", alignItems: "flex-start", gap: 20 }} >
                            <Box sx={{ borderRadius: 40, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >

                                <Image source={item.image} alt="oops" style={{ width: 150, height: 150 }} />
                            </Box>
                            <Text style={{ color: "black", fontSize: 16, fontFamily: "Poppins" }} >{item.name}</Text>
                        </Box>
                    )
                })}
            </ScrollView>
        </Box>
    )
}

export default Services

const styles = StyleSheet.create({
    categories: {
        marginTop: 25,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 25,
        color: "black",
        fontFamily: "Poppins"
    }
})