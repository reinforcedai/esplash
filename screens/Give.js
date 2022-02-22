import * as React from 'react';

import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import colors from '../src/styles';


const GiveScreen = () => {
  return (
    <ScrollView>
      
      <Card>
        <Card.Title style={styles.text}>
        YOU CAN ALSO MAKE YOUR  PARTNERSHIP DIRECT  TRANSFER PAYMENT HERE
        </Card.Title>
        <Text style={styles.text}>
          Acct name: EPHPHATA GLOBAL MINISTRIES
        </Text>
        <Text style={styles.text}>
          Bank name: Zenith Bank
        </Text>
        <Text style={styles.text}>
          Account Number: 1211447347
        </Text>
        <Text style={styles.text}>
          Sort Code: 057150893
        </Text>
        <Text style={styles.text}>
          Swift Code: ZEIBNGL
        </Text>
      </Card>
      
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  
  text: {
    marginVertical: 10,
    color: colors.accent
  },
});

export default GiveScreen
