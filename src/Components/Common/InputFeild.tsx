import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input, InputIcon } from '@gluestack-ui/themed'
import { InputField } from '@gluestack-ui/themed'
import { InputSlot } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';


type Iprops = {
    value: string;
    onChangeText: (text: string) => void;
}

const InputFeild: React.FC<Iprops> = ({ value, onChangeText }) => {
    return (
        // <View style={styles.inputBox} >
        // </View>
        <Input sx={{ marginTop: 10, backgroundColor: "white", paddingHorizontal: 10, borderRadius: 12 }} >
            <InputField sx={{ color: "black", fontStyle: 'italic', }} placeholder="Search Here..." value={value} onChangeText={onChangeText} />
            <InputSlot>
                <InputIcon><Image source={require("../images/searchicon.png")} style={{ width: 15, height: 15, objectFit: "cover" }} alt='ops' /></InputIcon>
            </InputSlot>
        </Input>
    )
}

export default InputFeild

const styles = StyleSheet.create({
    inputBox: {
        width: "100%", marginTop: 5,
        borderRadius: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 10
    }
})