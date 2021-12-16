import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class WeatherScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Light-Powered Soft Robots Could Remove Oil Spills.......
        Large Future Changes in Climate Variability.......
        Scientists give new lease of life to e-waste plastics......
        Researchers Develop Advanced Catalysts for Clean Hydrogen Production
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
