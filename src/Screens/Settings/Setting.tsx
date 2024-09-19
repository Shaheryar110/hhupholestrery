import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { Box, ScrollView } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import React from 'react'
import BookNowButton from '../../Components/Common/BookNowButton';
import Header1 from '../../Components/Header1';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomTabParamList, RootBottomTabParams, SettingsScreenProps } from '../../NavigationTypes/Types';
const { width } = Dimensions.get('window');

const Setting: React.FC<SettingsScreenProps> = ({ navigation }) => {

    type PageDataType = {
        text: string;
        url: keyof BottomTabParamList;
        icon: React.ReactNode;
    };
    const pagesData: PageDataType[] = [

        {
            text: 'Other Venture',
            url: 'Feedback',
            icon: <MaterialIcons name="reviews" style={styles.iconStyle} />,
        },
        {
            text: 'Privacy Policy',
            url: 'Privacy',
            icon: <MaterialIcons name="privacy-tip" style={styles.iconStyle} />,
        },
    ];

    return (
        <ScrollView>
            <Header1 />
            <View style={styles.main} >
                {/* <Box sx={{ width: "100%", height: "50%"}} > */}
                <Image source={require("../../Components/images/hero.png")} style={{ width: "100%", height: "65%", objectFit: "fill", position: "absolute", top: 0 }} />
                {/* </Box> */}
                <Box sx={{ alignItems: "center", width: "100%", height: "100%", display: "flex", marginTop: 160 }} >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 45, fontWeight: "600" }} >Settings</Text>
                    <Box sx={{ paddingTop: 100 }} >
                        <Box sx={styles.pagesBox} >
                            {pagesData.map((item, index) => {
                                return (
                                    <Pressable
                                        onPress={() => {
                                            navigation.navigate(item.url);
                                        }}
                                        style={styles.singlePage}
                                        key={index}>
                                        {item.icon}
                                        <Text style={styles.pageText}>{item.text}</Text>
                                    </Pressable>
                                );
                            })}
                        </Box>

                    </Box>
                </Box>

            </View>
        </ScrollView>
    )
}

export default Setting

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: 600,
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
    },
    pagesBox: {
        paddingVertical: 20,
        width: width,
        paddingHorizontal: 30,
    },
    iconStyle: { color: 'grey', fontSize: 20 },
    singlePage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        paddingBottom: 10,
        paddingTop: 20,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
    },
    pageText: {
        color: "grey",
        fontSize: 20,
    },

})