import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {  Text, Image } from 'react-native-elements';

import colors from '../src/styles';


const CharityScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
     
      <View>
        <Image
          containerStyle={styles.img}
          source={require('../assets/images/charity.jpeg')}
        />
        <Text style={styles.text}>Given to the needy</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  text: {
    color: colors.secondary,
    marginVertical: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    textAlign: "center",
  },
  img: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },

});

export default CharityScreen
