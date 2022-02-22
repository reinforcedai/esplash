import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import StoreScreen from '../screens/Store';
import ContactScreen from '../screens/Contact';


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
      />

      <Stack.Screen
        name="Store"
        component={StoreScreen}
      />

      <Stack.Screen
        name="Contact"
        component={ContactScreen}
      />

    </Stack.Navigator>
  );
}

export default StackNavigator
