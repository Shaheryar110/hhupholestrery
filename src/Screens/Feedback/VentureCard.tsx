import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';

interface Iprops {
    head: string;
    desc: string;
    url: string;
}
const imageMap: { [key: string]: any } = {
    'usa.jpg': require('../../Components/images/usa.jpg'),
    'savy.jpg': require('../../Components/images/savy.png'),
    'ffl.jpg': require('../../Components/images/ffl.jpg'),
    'out.png': require('../../Components/images/out.png'),
    'lfl.jpg': require('../../Components/images/lfl.jpg'),

    'moto.jpg': require('../../Components/images/moto.jpg'),
    'larry.png': require('../../Components/images/larry.png'),
    'imp.jpg': require('../../Components/images/imp.jpg'),
    'amp.png': require('../../Components/images/amp.png'),
    'race.jpg': require('../../Components/images/race.jpg'),
};
const VentureCard: React.FC<Iprops> = ({ head, desc, url }) => {
    return (
        <View style={styles.card} >
            <Image source={imageMap[url]} style={{ width: 100, height: 100, objectFit: "contain" }} />
            <Text style={{ fontSize: 20, fontWeight: "600", color: "black", paddingVertical: 10 }} >{head}</Text>
            <Text>{desc}</Text>
        </View>
    )
}

export default VentureCard

const styles = StyleSheet.create({
    card: {
        padding: 15,
        borderRadius: 1,
        elevation: 1,
        marginVertical: 5
    }
})