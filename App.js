import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn);

class App extends Component {

  componentDidMount() {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
      )
  }

}
export default App
