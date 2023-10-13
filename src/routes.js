import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Cadastrar from './screens/Cadastrar';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Buscar from './screens/Buscar';
import Conta from './screens/Conta';
import Perfil from './screens/Perfil';
import Plantas from './screens/Plantas';
import Climas from './screens/Climas';
import Milho from './screens/Milho';
import Equatorial from './screens/Equatorial'

export default function routes() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Tab.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
      
        
        <Tab.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
         
       <Tab.Screen name="Buscar" component={Buscar} options={{ headerShown: false }} />
        <Tab.Screen name="Conta" component={Conta} options={{ headerShown: false }} />
        <Tab.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        <Tab.Screen name="Plantas" component={Plantas} options={{ headerShown: false }} />
        <Tab.Screen name="Climas" component={Climas} options={{ headerShown: false }} />
        <Tab.Screen name="Milho" component={Milho} options={{ headerShown: false }} />
        <Tab.Screen name="Equatorial" component={Equatorial} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}