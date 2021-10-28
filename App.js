import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './home/HomeScreen';
import ListaContatosScreen from './contatosSOS/ListaContatosScreen';
import LigarScreen from './ligacao/LigarScreen';
import RastreioScreen from './rastreio/RastreioScreen';
import DicasScreen from './dicas/DicasScreen';
import CadastroContatoScreen from './cadastroContato/CadastroContatosScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="cadastroContatos"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="lista-contatos" component={ListaContatosScreen} />
        <Stack.Screen
          name="ligacao-sos"
          component={LigarScreen}
          initialParams={{ titulo: 'Ligar para contato SOS' }}
        />
        <Stack.Screen name="rastreio" component={RastreioScreen} />
        <Stack.Screen name="dicas" component={DicasScreen} />
        <Stack.Screen
          name="cadastroContatos"
          component={CadastroContatoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
