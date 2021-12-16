import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen'
import HoroScopeScreen from './screens/HoroScopeScreen'
import JokeScreen from './screens/jokeScreen'
import NewsScreen from './screens/NewsScreen'
import WeatherScreen from './screens/WeatherScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  HoroScopeScreen:HoroScopeScreen,
  JokeScreen:JokeScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen
})
const AppContainer = createAppContainer(AppNavigator)

