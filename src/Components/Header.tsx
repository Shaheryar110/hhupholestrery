import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Image } from '@gluestack-ui/themed'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Header = () => {
    return (
        <View style={styles.header} >
            <Box sx={styles.navBox} >
                <Image source={require("../Components/images/menu.png")} style={{ width: 20, height: 20 }} alt='oops' />
                <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }} >Home</Text>
            </Box>

            <Box sx={styles.iconBox} >

                <FontAwesome name="bell" size={20} color="#fff" />
            </Box>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 30,

    },
    navBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    iconBox: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FA641D",
        alignItems: "center", justifyContent: "center",
        opacity: 0.8
    }
})