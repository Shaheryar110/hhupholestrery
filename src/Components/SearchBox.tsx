import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Image } from '@gluestack-ui/themed'
import InputFeild from './Common/InputFeild'

interface SearchBoxProps {
    onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = (text: string) => {
        setQuery(text);
        onSearch(text);
    };

    return (
        <View style={styles.searchBox} >
            <Text style={{ color: "white", fontSize: 16 }} >Location</Text>
            <Box sx={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 3 }} >
                <Image source={require("../Components/images/location.png")} style={{ width: 16, height: 18 }} alt='oops' />
                <Text style={{ color: "white", fontSize: 22, fontWeight: 600 }} >New York , USA</Text>
            </Box>
            <InputFeild value={query}
                onChangeText={handleSearch} />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    searchBox: {
        padding: 30,
    }
})