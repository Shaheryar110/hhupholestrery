import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, ScrollView } from '@gluestack-ui/themed';
import { Image } from 'react-native';
import Header1 from '../../Components/Header1';
import VentureCard from './VentureCard';

const Feedback = () => {
    const otherVentures = [
        {
            heading: "usaottoman.com",
            desc: "Made-to-order upholstered ottomans in your choice of fabric. Select your style, pick your fabric, and enjoy the custom ottoman of your dreams.",
            url: "usa.jpg"
        },
        {
            heading: "savvydecor.com",
            desc: "Since its inception in 1978, Linda has built Savvy Decor into one of the premier design firms in the Indianapolis, Carmel area.",
            url: "savy.jpg"
        },
        {
            heading: "fabricforless.net",
            desc: "A web site designed to help clients make a fabric choice.",
            url: "ffl.jpg"
        },
        {
            heading: "outdoorcoverwarehouse.com",
            desc: "Outdoor Cover Warehouse has one of the largest selections of outdoor covers.",
            url: "out.png"
        },
        {
            heading: "linenforless.com",
            desc: "Let us bring your ideas to life! Creating spaces for better living.",
            url: "lfl.jpg"
        },
    ]
    const otherVentures1 = [
        {
            heading: "motoxtoys.com",
            desc: "Indy motorcycle news source",
            url: "moto.jpg"
        },
        {
            heading: "indyracingportal.com",
            desc: "The mission of Indy Racing Portal is to respect and build upon its heritage as a sharing site on Facebook, reporting on the breadth of motorsports.",
            url: "race.jpg"
        },
        {
            heading: "indymusicportal.com",
            desc: "Indiana local bands latest videos and event calendar. Find upcoming events and watch the remarkable performance made by talented Indiana rock bands.",
            url: "imp.jpg"
        },
        {
            heading: "larryhughey.com",
            desc: "Photography for music and racing",
            url: "larry.png"
        },
        {
            heading: "ampscamp.net",
            desc: "Ampscamp will be a very handy dolly system for musicians to bring gear or their amp into a gig.",
            url: "amp.png"
        },
    ]
    return (
        <ScrollView>
            <Header1 />
            <View style={styles.main} >
                <Image source={require("../../Components/images/hero.png")} style={{ width: "100%", height: "12%", objectFit: "fill", position: "absolute", top: 0 }} />
                <Box sx={{ alignItems: "center", width: "100%", height: "100%", display: "flex", marginTop: 160 }} >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 35, fontWeight: "600" }} >Other Venture</Text>
                    <Box sx={{ paddingTop: 110, paddingHorizontal: 20 }} >
                        <Text style={{ fontSize: 19, paddingBottom: 10, color: "black", fontWeight: "600" }} >UPHOLSTERY & RELATED INDUSTRIES.</Text>
                        {otherVentures.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <VentureCard head={data.heading} desc={data.desc} url={data.url} />
                                </React.Fragment>
                            )
                        })}
                        <Text style={{ fontSize: 17, paddingVertical: 10, color: "black", fontWeight: "600" }} >CREATIVE VENTURES & OTHER INTERESTS</Text>
                        {otherVentures1.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <VentureCard head={data.heading} desc={data.desc} url={data.url} />
                                </React.Fragment>
                            )
                        })}
                    </Box>
                </Box>

            </View>
        </ScrollView>
    )
}

export default Feedback

const styles = StyleSheet.create({
    main: {
        width: "100%",
        position: "relative",
        height: "100%",
        paddingBottom: 90,


    },
})