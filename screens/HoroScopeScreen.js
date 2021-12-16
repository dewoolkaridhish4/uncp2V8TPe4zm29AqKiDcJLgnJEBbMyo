import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HoroScopeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>1. Reduce your food waste
Reduce your grocery bills by finding out how to avoid food waste. The average Victorian household throws out approximately $2,200 worth of food each year. Food thrown into your garbage bin ends up in landfill, and breaks down in a way that can create greenhouse gasses. 2. Use reusable cups such as keep cups
Australians consume more than 50,000 cups of coffee every half hour, and an estimated 3 billion takeaway hot drink cups every year. Sadly these cups, which are made from virgin materials rather than recycled paper, cannot be put in your kerbside or workplace recycling bins. Take a cup with you or have your drink to stay.

3. Install a water efficient showerhead
Save money and energy with a water-efficient showerhead which uses 40 per cent less water. Free replacement of old showerheads with water saving showerheads is an eligible activity under the Victorian Energy Saver Scheme. Speak to your local water retailer to see whether they can do this for you.

Learn to save water.

4. Turn the thermostat down
Save on heating bills by keeping the heating temp at home between 18 and 20 degrees in the colder months. Every degree you pump up the heater means more of the pollution causing climate change, and an increase to your heating bill by around 10 percent per degree.

Use your heating system efficiently.

5. Say no to straws and plastic bags
Australians use around 10 million plastic bags every day, contributing to an estimated 8 million tonnes of plastic dumped into the ocean every year. Plastic straws are also to blame, and are one of the most common items found on beach shores all over the world. All of this plastic fills our landfill, harms our wildlife, and can take lifetimes to break down. Remember to say ‘no bag please’ in supermarkets and other shops, and ‘no straws please’ in bars and restaurants.

Learn more about plastic bags.

Learn more about straws.

6. Switch imported for Australian made
Let’s face it – you don’t need your brioche to be made in Paris. It’s probably just as tasty from a local bakery and certainly fresher. When we buy imported goods, more of the pollution causing climate change is produced because of the distance those goods need to travel. Buying Australian made, and where possible Victorian made, means fewer miles travelled so less climate harming pollution.

Shop locally.

7. Walk, bike and use public transport whenever possible
Walking and cycling is good for your health and the health of the environment. Think about walking or cycling to work, to make exercise and reducing carbon emissions part of your day. If neither of these are an option, think about taking public transport or carpooling. While you’re at it, avoid air travel as much as possible and carbon offset your flights.

Learn more about sustainable transport and travel.

8. Upgrade your lights
Light emitting diodes (LEDs) and compact fluorescent lamps (CFLs) will cost you far less to run than halogen and other incandescent lights. Energy-efficient CFLs can also last up to ten times longer than traditional ones. The light from these bulbs will give off light as bright as your old bulbs while saving you money.

Learn more about energy efficient lighting.

9. Go paper free
Reduce the paper clutter in your home and save some trees by going paper free. Almost everything from your phone bill to your credit card statement can be viewed online. Contact your banks, utility providers and other service providers to go paperless. And while you’re at it, switch to recycled toilet paper.

Learn more about eco-friendly toilet paper

10. Recycle and dispose of waste properly
You might be surprised by what you can recycle or dispose of safely. Our Detox your Home program collects toxic household chemicals such as solvents, poisons and cleaning products. Thirty permanent drop-off sites accept batteries, fluorescent lights and paint. From smoke detectors to televisions, let’s make sure nothing goes to landfill unnecessarily. Contact your local council or transfer station to find out what other products are accepted.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})