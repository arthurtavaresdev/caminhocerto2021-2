import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default ({titulo, acao, cor='#24cbaf'}) => (
  <TouchableOpacity
    style={[styles.botao, { backgroundColor: cor }]}
    onPress={acao}>
    <Text style={styles.textoBotao}>{titulo.toUpperCase()}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  botao: {
    height: 70,
    backgroundColor: '#24cbaf',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 3,
  },
  textoBotao: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
  },
})