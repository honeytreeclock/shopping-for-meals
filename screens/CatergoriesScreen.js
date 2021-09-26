import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CatergoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>This is the catergories screen</Text>
            <Button
                title="Go to the meals screen"
                onPress={() => navigation.navigate('CatergoryMeal')}
            />
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

export default CatergoriesScreen;