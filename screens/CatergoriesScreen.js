import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATERGORIES } from '../data/dummyData';

const CatergoriesScreen = ({ navigation }) => {
    const renderCatergory = (data) => {
        return (
            <View style={styles.gridItem}>
                <Text>
                    {data.index + 1} - {data.item.title}
                </Text>
            </View>
        );
    };

    return <FlatList data={CATERGORIES} numColumns={2} renderItem={renderCatergory} />;
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        height: 150,
        margin: 15,
    },
})

export default CatergoriesScreen;