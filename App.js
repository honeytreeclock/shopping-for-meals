import React from 'react';
import { StyleSheet } from 'react-native';
import CatergoriesScreen from './screens/CatergoriesScreen';
import FiltersScreen from './screens/FiltersScreen';
import CatergoryMealsScreen from './screens/CatergoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavourtiesScreen from './screens/FavourtiesScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, ShadowsIntoLight_400Regular } from '@expo-google-fonts/shadows-into-light';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    ShadowsIntoLight_400Regular,
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Catergories">
          <Stack.Screen name="Catergories" component={CatergoriesScreen}></Stack.Screen>
          <Stack.Screen name="CatergoryMeal" component={CatergoryMealsScreen}></Stack.Screen>
          <Stack.Screen name="MealDetails" component={MealDetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
  } else {
    return <AppLoading />
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  writing: {
    fontFamily: 'ShadowsIntoLight_400Regular',
    fontSize: 40,
  },
});