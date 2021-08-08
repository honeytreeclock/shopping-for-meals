import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavourtiesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the favourites screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavourtiesScreen;
