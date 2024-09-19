import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { Box, Input, InputField, ScrollView, Textarea, TextareaInput } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import React from 'react'
import BookNowButton from '../../Components/Common/BookNowButton';
import Header1 from '../../Components/Header1';

const Contact = () => {
    return (
        <ScrollView>
            <Header1 />
            <View style={styles.main} >
                <Image source={require("../../Components/images/hero.png")} style={{ width: "100%", height: "50%", objectFit: "fill", position: "absolute", top: 0 }} />
                <Box sx={{ alignItems: "center", width: "100%", height: "100%", display: "flex", marginTop: 160 }} >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 45, fontWeight: "600" }} >Contact</Text>
                    <Box sx={{ paddingTop: 90, gap: 10 }} >
                        <Input
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}
                        >
                            <InputField style={{ color: "black" }} placeholder="your Full Name..." />
                        </Input>
                        <Input
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}
                        >
                            <InputField placeholder="Email Address" />
                        </Input>
                        <Input
                            variant="outline"
                            size="md"
                            isDisabled={false}
                            isInvalid={false}
                            isReadOnly={false}
                        >
                            <InputField placeholder="Phone Number" />
                        </Input>
                        <Textarea
                            size="md"
                            isReadOnly={false}
                            isInvalid={false}
                            isDisabled={false}
                            style={{ width: "100%" }}
                        >
                            <TextareaInput placeholder="Tell Us More About Your Requirments" />
                        </Textarea>
                        <Pressable style={styles.btn}  >
                            <Text style={{ color: "white", fontSize: 17 }} >Send</Text>
                        </Pressable>
                    </Box>
                </Box>

            </View>
        </ScrollView>
    )
}

export default Contact

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: 700,
        paddingBottom: 90,


    },
    btn: {
        paddingVertical: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: "#FA641D",
        justifyContent: "center",
        alignItems: "center",
        elevation: 3
    }
})