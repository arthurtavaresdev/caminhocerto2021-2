import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Constants from 'expo-constants'

import HeaderSubTelas from '../contatosSOS/HeaderSubTelas'
import BotaoCustomizado from '../home/BotaoCustomizado'

export default ({navigation, route}) => {
  const {titulo, contato} = route.params

  return(
    <View style={styles.viewMain}>
      <HeaderSubTelas
        titulo={`${contato.tipo} ${contato.nome}`}
        acao={() => navigation.goBack()}
      />
      <View style={styles.mapa}>
        <Text>{titulo}</Text>
        <Text>{contato.telefone}</Text>
      </View>
      <View style={styles.botoes}>
        <BotaoCustomizado 
          titulo={`Discar ${contato.telefone}`}
          cor='red'
        />
        <BotaoCustomizado 
          titulo='ENVIAR LOCALIZAÇÃO'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  mapa: {
    flex: 1
  },
  botoes: {
    padding: 10,
    height: 220,
    justifyContent: 'space-evenly'
  }
})