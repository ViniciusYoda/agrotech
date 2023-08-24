import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Cadastrar from './screens/Cadastrar';
import Login from './screens/Login';
import Servicos from './screens/Servicos';
import Buscar from './screens/Buscar';
import Conta from './screens/Conta';
import Perfil from './screens/Perfil';

export default function Rotas() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
         <Tab.Screen name="Servicos" component={Servicos} options={{ headerShown: false }} />
       <Tab.Screen name="Buscar" component={Buscar} options={{ headerShown: false }} />
        <Tab.Screen name="Conta" component={Conta} options={{ headerShown: false }} />
        <Tab.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}