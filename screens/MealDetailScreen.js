import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>This is the meal details screen</Text>
            <Button
                title="Return to the catergories screen"
                onPress={() => navigation.navigate('Catergories')}
            />
            <Button
                title="Return to the meal catergories screen"
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

export default MealDetailScreen;