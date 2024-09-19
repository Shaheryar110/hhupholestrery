import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'
import { UpholsteryScreenProps } from '../../NavigationTypes/Types'

const Upholstery: React.FC<UpholsteryScreenProps> = ({ navigation }) => {
    const data = [
        {
            img: require("../../Components/images/cat1.png"),
            name: "Commercial Service"
        },
        {
            img: require("../../Components/images/residential.png"),
            name: "Residential Service"
        },
    ];
    const redirections = (pageName: string) => {
        if (pageName === "Residential Service") {
            navigation.navigate('cleaningService')
        } else {
            navigation.navigate('BottomTab', { screen: 'contact' })
        }
    }
    return (
        <Box sx={styles.mainBox} >
            <Text style={styles.heading} >Select Service</Text>
            <Box style={styles.flexBox} >
                {data.map((item, index) => {
                    return (
                        <Pressable onPress={() => { redirections(item.name) }} key={index} style={{ width: "50%", flexDirection: "column", paddingVertical: 20, justifyContent: "center", alignItems: "center", gap: 10 }} >
                            <Box sx={{ backgroundColor: "#FA641D", borderRadius: 50, width: 140, height: 140, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} >

                                <Image source={item.img} alt="oops" style={{ width: index === 1 ? 80 : 60, height: index === 1 ? 80 : 60 }} />
                            </Box>
                            <Text style={{ textAlign: "center", color: "black", fontSize: 19, fontFamily: "Poppins", fontWeight: "600" }} >{item.name}</Text>
                        </Pressable>
                    )
                })}

            </Box>


        </Box>
    )
}

export default Upholstery

const styles = StyleSheet.create({
    mainBox: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    heading: {
        fontSize: 35,
        fontWeight: "700",
        textAlign: "center"
    },
    flexBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        paddingVertical: 15,
        width: "100%",
        paddingHorizontal: 15
    }
})