import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNavigator, createStackNavigator } from '@react-navigation/stack';
import CalculatorScreen from './src/screens/CalculatorScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculator">
        <Stack.Screen name ="Calculator Screen" component={CalculatorScreen} options={{
          title: 'Calculator',
          headerStyle:{
            backgroundColor: '#282828',
          },
          headerTintColor: 'gray',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;