import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';
import Entypo from "react-native-vector-icons/Entypo"
import { Box, Input, InputField, Textarea, TextareaInput } from '@gluestack-ui/themed';

interface Iprops {
    open: boolean;
    chnageState: () => void;
}


const QouteModal: React.FC<Iprops> = ({ open, chnageState }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    chnageState()
                }}>
                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Pressable style={styles.iconBox} onPress={() => { chnageState() }}  >
                            <Entypo name="cross" size={20} color="#fff" />
                        </Pressable>
                        <Text style={{ fontSize: 20, color: "black" }} >Schedule Appointment</Text>
                        <Box sx={{ width: 250, paddingTop: 20, gap: 10 }} >
                            <Input
                                variant="outline"
                                size="md"
                                isDisabled={false}
                                isInvalid={false}
                                isReadOnly={false}
                            >
                                <InputField placeholder="your Full Name" />
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
                                <Text style={{ color: "white", fontSize: 17 }} >Book Now</Text>
                            </Pressable>
                        </Box>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

export default QouteModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: "relative"

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    iconBox: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#FA641D",
        alignItems: "center", justifyContent: "center",
        opacity: 0.8,
        position: "absolute",
        top: 10,
        right: 10
    },
    btn: {
        paddingVertical: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: "#FA641D",
        justifyContent: "center",
        alignItems: "center"
    }
});