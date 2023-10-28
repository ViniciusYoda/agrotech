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
import Solos from './screens/Solos';
import Milho from './screens/Milho';
import Cafe from './screens/Cafe';
import CanaDeAcucar from './screens/CanaDeAcucar';
import Arroz from './screens/Arroz';
import Beterraba from './screens/Beterraba';
import Equatorial from './screens/Equatorial';
import Tropical from './screens/Tropical';
import SubTropical from './screens/SubTropical';
import Semiarido from './screens/Semiarido';
import Arenoso from './screens/Arenoso';
import Argiloso from './screens/Argiloso';
import Humoso from './screens/Humoso';
import TodasNoticias from './screens/TodasNoticias';
import TodasCotacao from './screens/TodasCotacao';

export default function routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Buscar"
          component={Buscar}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Conta"
          component={Conta}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Plantas"
          component={Plantas}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Climas"
          component={Climas}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Solos"
          component={Solos}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Milho"
          component={Milho}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cafe"
          component={Cafe}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="CanaDeAcucar"
          component={CanaDeAcucar}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Arroz"
          component={Arroz}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Beterraba"
          component={Beterraba}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Equatorial"
          component={Equatorial}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Tropical"
          component={Tropical}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="SubTropical"
          component={SubTropical}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Semiarido"
          component={Semiarido}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Arenoso"
          component={Arenoso}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Argiloso"
          component={Argiloso}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Humoso"
          component={Humoso}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TodasNoticias"
          component={TodasNoticias}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="TodasCotacao"
          component={TodasCotacao}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
