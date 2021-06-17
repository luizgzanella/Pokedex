import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/Home';
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#EA5D60',
          },
          headerTintColor: '#fff',
          cardStyle: {backgroundColor: '#fff'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Pokédex'}}
        />
        <Stack.Screen name="Details" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
