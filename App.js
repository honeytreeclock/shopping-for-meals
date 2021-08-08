import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CatergoriesScreen from './screens/CatergoriesScreen';
import FiltersScreen from './screens/FiltersScreen';
import CatergoryMealsScreen from './screens/CatergoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavourtiesScreen from './screens/FavourtiesScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <CatergoriesScreen></CatergoriesScreen>
      <FiltersScreen></FiltersScreen>
      <CatergoryMealsScreen></CatergoryMealsScreen>
      <MealDetailScreen></MealDetailScreen>
      <FavourtiesScreen></FavourtiesScreen>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
