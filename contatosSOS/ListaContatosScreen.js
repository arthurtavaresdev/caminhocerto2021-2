import React from 'react'

import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native'
import Constants from 'expo-constants'

import HeaderSubTelas from './HeaderSubTelas'
import CardContato from './CardContato'
import FloatButton from './FloatButton'

import fotoFilha from '../assets/filha.png'

const listaContatos = [
  {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},

  {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},


  {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},

  {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},


  {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},

  {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},

   {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},


   {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},


   {nome: 'LARISSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'ANA LUÍSA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  {nome: 'NATÁLIA', tipo: 'FILHA', telefone: '(31) 99999-9999'},
  
]

export default () => {
  return (
    <View style={styles.container}>
      <HeaderSubTelas 
        titulo="Contatos SOS"
        acao={() => alert('Voltar para Home')}
      />
      <FlatList
        data={listaContatos}
        renderItem={({item}) =>
          <CardContato
            foto={fotoFilha}
            tipo={item.tipo}
            nome={item.nome}
            telefone={item.telefone}
          />
        }
        keyExtractor={(item, index) => index}
      />

      <FloatButton 
        acao={() => alert('Clicou no ADD')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },


  
  
})