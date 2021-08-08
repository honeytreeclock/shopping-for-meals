import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const FlitersScreen = () => {
    return(
    <View>
        <Text style={styles.screen}>This is the filters screen</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FlitersScreen;