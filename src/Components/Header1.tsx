import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabParamList } from '../NavigationTypes/Types'

const Header1: React.FC = () => {
    const navigation = useNavigation<NavigationProp<BottomTabParamList>>();
    return (
        <View style={styles.header} >
            <Pressable style={styles.iconBox} onPress={() => { navigation.goBack() }}  >
                <Ionicons name="arrow-back" size={20} color="#fff" />
            </Pressable>
            {/* <Box sx={styles.iconBox} >
                <Ionicons name="arrow-back" size={20} color="#fff" />
            </Box> */}
        </View>
    )
}

export default Header1

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        position: "absolute",
        zIndex: 99,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

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