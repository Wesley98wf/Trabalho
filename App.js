import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';


import HomeScreen from "./screens/HomeScreen";
import Mensagem from "./screens/Mensagem";

const Stack = createStackNavigator();

export default function App ({navigation}){
  return(
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Mensagem" component={Mensagem} options={{title: 'Caixa De Entrada'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}