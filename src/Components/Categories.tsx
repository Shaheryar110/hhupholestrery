import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, FlatList, HStack, Image, ScrollView } from '@gluestack-ui/themed'

import { NavigationProp } from '@react-navigation/native';
import QouteModal from './Common/QouteModal';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


interface CategoriesProps {
    navigation: NavigationProp<any, any>;
    searchQuery: string;
}

const Categories: React.FC<CategoriesProps> = ({ navigation, searchQuery }) => {
    const [open, setOpen] = useState(false);

    const OpenModal = () => {
        setOpen(!open);
    };

    const data = [
        {
            name: "Upholstery",
            image: <FontAwesome5 name='building' style={{ fontSize: 40 }} />
        },
        {
            name: "Furniture and Carpet Cleaning",
            image: <MaterialCommunityIcons name='table-furniture' style={{ fontSize: 40 }} />
        },
    ];

    const data1 = [
        {
            name: "Custom Furniture",
            image: <MaterialCommunityIcons name='bag-personal' style={{ fontSize: 40 }} />
        },
        {
            name: "Repairs",
            image: <MaterialIcons name='home-repair-service' style={{ fontSize: 40 }} />
        },
    ];

    const filteredData = [...data, ...data1].filter((item) =>
        item?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    const handleNaviagtions = (pageName: string) => {
        if (pageName === 'Upholstery') {
            navigation.navigate(pageName);
        } else if (pageName === 'Repairs') {
            navigation.navigate('contact');
        } else if (pageName === 'Furniture and Carpet Cleaning') {
            setOpen(!open);
        }
    };

    return (
        <Box sx={styles.categories}>
            <Text style={styles.heading}>Categories</Text>
            <Box style={styles.parentBox}>
                {filteredData.map((item, index) => (
                    <Pressable
                        onPress={() => { handleNaviagtions(item.name); }}
                        key={index}
                        style={{
                            width: "45%",
                            flexDirection: "column",
                            paddingVertical: 20,
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#FA641D",
                                borderRadius: 50,
                                width: 100,
                                height: 100,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {item.image}

                        </Box>
                        <Text
                            style={{
                                textAlign: "center",
                                color: "black",
                                fontSize: 17,
                                fontFamily: "Poppins",
                            }}
                        >
                            {item.name}
                        </Text>
                    </Pressable>
                ))}
            </Box>
            <QouteModal open={open} chnageState={OpenModal} />
        </Box>
    );
};

export default Categories;

const styles = StyleSheet.create({
    categories: {
        marginTop: 25,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 25,
        color: "black",
        fontFamily: "Poppins"
    },
    parentBox: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        flexWrap: "wrap"
    }
})