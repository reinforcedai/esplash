import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import colors from '../src/styles';


const StoreScreen = () => {
  return (
    <ScrollView>
      
      <Card>
        <Card.Image
          style={styles.image}
          source={require('../assets/images/water.png')}
        />
        <Card.Title style={styles.text}>Fountain Water</Card.Title>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Place Order"
          onPress={() => console.log('hello')}
        />
      </Card>

      <Card>
        <Card.Image
          style={{ width: 300, height: 150, padding: 0, marginBottom: 10 }}
          source={require('../assets/images/prayer.png')}
        />
        <Card.Title style={styles.text}>Prayer Booklet</Card.Title>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Place Order"
          onPress={() => console.log('hello')}
        />
      </Card>

      <Card>
        <Card.Image
          source={require('../assets/images/oil.png')}
        />
        <Card.Title style={styles.text}>Covenant Oil</Card.Title>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Place Order"
          onPress={() => console.log('hello')}
        />
      </Card>

      <Card>
        <Card.Image
          source={require('../assets/images/balm.png')}
        />
        <Card.Title style={styles.text}>Healing Balm</Card.Title>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Place Order"
          onPress={() => console.log('hello')}
        />
      </Card>

      <Card>
        <Card.Image
          source={require('../assets/images/tshirt.jpeg')}
        />
        <Card.Title style={styles.text}>Ephphata Vests</Card.Title>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Place Order"
          onPress={() => console.log('hello')}
        />
      </Card>

      <Card>
        <Card.Image
          source={require('../assets/images/towel.jpeg')}
        />
        <Card.Title style={styles.text}>Ephphata Mantle</Card.Title>
        <Button
          buttonStyle={styles.buttonStyle}
          title="Place Order"
          onPress={() => console.log('hello')}
        />
      </Card>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 150,
    padding: 0,
    marginBottom: 10
  },
  text: {
    marginVertical: 20,
    color: colors.accent
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#21277B'
  },
});

export default StoreScreen
