import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

import Texto from '../../../componentes/Texto';





export default function MenuLista({ item: { nome, preco, imagem } }) {
  return  <View style={styles.container}>
    
    <Card mode='elevated' style={styles.card}>
        <Card.Content >
          <Texto style={styles.name}>{nome}</Texto>
          <Texto style={styles.pre}>{preco}</Texto>
          {/* <Image source={imagem} style={styles.imagem}/> */}
        </Card.Content>
        <Card.Cover style={styles.im} source={imagem} />
        {/* <Texto style={styles.titulo}>{ti}</Texto> */}
      
      </Card>
    </View>
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "purple",
    flex:1,
  },
  titulo: {
    fontSize: 20,
  },
    im: {
       widthfull: 100,
       justifyContent: 'center',
       width: "100%",
       height: "100%",
      
   },
  card: {
    width: "100%",
    flexDirection: 'row',
    paddingTop: 10,
    margin: 30,
    height: 300,
    borderRadius: 10,
    elevation: 4,
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  pre:{
    fontSize: 15,
    fontWeight: 'bold'
  },
});



