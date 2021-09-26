import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CatergoryMealsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>This is the meal catergory screen</Text>
            <Button
                title="Go to the meal detail catergory screen"
                onPress={() => navigation.push('MealDetails')}
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

export default CatergoryMealsScreen;