import React, { Component } from 'react';
import { Image,Text, View, StyleSheet } from 'react-native';
import logo from '../assets/images.jpg'
import logo1 from '../assets/photo-1528122819723-9dca3a31295d.jpg'
import logo2 from '../assets/2021_EarthDay_Hero.jpg.jpeg'
import logo3 from '../assets/Featured-Sustainability-Ep-5-RS.jpg'
import logo4 from '../assets/GettyImages-541068872-250e5ed5ed604b26b1791f3c99924a58.jpg'
import logo5 from '../assets/gruene_erde_arquiplay77_fotolia_48622587_l_0.jpg'
import logo6 from '../assets/http___cdn.cnn_.com_cnnnext_dam_assets_190802090113-01-robinson-tower-min.jpg'
import logo7 from '../assets/2018-07-04-16-49-7_cropped_90.jpg'

export default class NewsScreen extends Component {
  render() {
    return (
       <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 159 ,padding:50,marginVertical:20}} /> 
      <Image source={logo1} style={{ width: 305, height: 200,marginVertical:20 }} /> 
      <Image source={logo2} style={{ width: 305, height: 159,marginVertical:20 }} /> 
      <Image source={logo3} style={{ width: 305, height: 159,marginVertical:20 }} /> 
      <Image source={logo4} style={{ width: 305, height: 200,marginVertical:20 }} /> 
      <Image source={logo5} style={{ width: 305, height: 159,marginVertical:20 }} /> 
      <Image source={logo6} style={{ width: 305, height: 159,marginVertical:20 }} /> 
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
