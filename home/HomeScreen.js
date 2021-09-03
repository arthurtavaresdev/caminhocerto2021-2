import React from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native'
// teste
import Constants from 'expo-constants'

import Logo from '../assets/logo.png'

export default () => {
  return (
    <View style={styles.viewMain}>
      {/* Este é o cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerTitulo}>
          <Text style={styles.titulo}>Caminho </Text>
          <Text style={[styles.titulo, styles.certo]}>Certo</Text>
        </View>
        <Image source={Logo} style={styles.logo}/>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          
          onPress={() => alert("Clique no TouchableOpacity")}
        >
          <Text>SOS</Text>
        </TouchableOpacity>

        <Button title="SOS" color="#24cbaf" onPress={() => alert('Olá')} />
        <Button title="Registro" />
        <Button title="Rastreio" />
      </View>
    </View>
  )

  // Teste

  /*
    mais de uma linha
    teste
  */
}
 // Teste
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: "center"
  },
  headerTitulo: {
    flexDirection: 'row'
  },
  logo: {
    backgroundColor: '#ccffff',
    borderRadius: 100,
    width: 100,
    height: 100
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  certo: {
    color: "#5cc4b6"
  },
  menu: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
    backgroundColor: 'red'
  }
})