import React from 'react';
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';

import Constants from 'expo-constants';

import Header from './Header'
import BotaoCustomizado from './BotaoCustomizado'

export default () => {
  return (
    <View style={styles.viewMain}>
      {/* Este é o cabeçalho */}
      <Header />
      <View style={styles.menu}>
        <BotaoCustomizado 
          titulo='SOS'
          cor='red'
          acao={() => alert('SOS')}
        />
        <BotaoCustomizado 
          titulo='Registro'
          acao={() => alert('Registro')}
        />

        <BotaoCustomizado 
          titulo='Rastreio'
          acao={() => alert('Rastreio')}
        />

        {/* 
        <Button title="SOS" color="#24cbaf" onPress={() => alert('Olá')} />
        <Button title="Registro" />
        <Button title="Rastreio" />
        */}
      </View>
    </View>
  );

  // Teste

  /*
    mais de uma linha
    teste
  */
};
// Teste
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  menu: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
  }
});