import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import QouteModal from './QouteModal'

const BookNowButton = () => {
    const [open, setOpen] = useState(false)
    const OpenModal = () => {
        setOpen(!open);

    }

    return (
        <>

            <Pressable style={styles.btn} onPress={OpenModal} >
                <Text style={{ color: "white", fontSize: 17 }} >Book Now</Text>
            </Pressable>
            <QouteModal open={open} chnageState={OpenModal} />
        </>
    )
}

export default BookNowButton

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: "#FA641D",
        justifyContent: "center",
        alignItems: "center"
    }
})