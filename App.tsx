/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import StackNavigation from './src/Navigation/Navigation';
import 'react-native-gesture-handler';


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
