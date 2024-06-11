import React from "react";
import {FlatList, StyleSheet, View, StatusBar, Image} from 'react-native';

import MenuLista from './componentesList/MenuList';
import logo from '../../../assets/logo.png';
import Texto from '../../componentes/Texto';


export default function Index({ bolos }) {
    
    return <View style={styles.container}>
              <StatusBar/>
              <Image style={styles.logo}source ={logo} resizeMode="contain"/>
              <Texto style={styles.confeitadosText}>Conheça nossos produtos</Texto>
                  <FlatList   
                data={bolos.lista}
                renderItem={MenuLista}
                keyExtractor={bolos.lista.nome}
                numColumns={2}
              />
  </View>

}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "purple",
    flex:1,
  },
  logo: {
    width: "100%",
    height: "20%",
  },
  confeitadosText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    color: 'white',
  }
})