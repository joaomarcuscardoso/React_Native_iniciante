import React, { Component} from 'react';
import { StyleSheet, View } from 'react-native';

import Simples from '../componentes/Simples'
import ParImpar from '../componentes/ParImpar'
import {Inverter, MegaSena } from '../componentes/Multi'
import Contador from '../componentes/Contador'
import Plataformas from '../componentes/Plataformas'
import Events from '../componentes/Events'
import {Avo} from '../componentes/ComunicacaoDireta'
import TextoSincronizado from '../componentes/ComunicacaoIndireta'
import ListaFlex from '../componentes/ListaFlex'
import Flex from '../componentes/flex'

export default class App extends React.Component {
  render() {  
    return (
      <View style={styles.container}>
        <Flex />
   {/*      <ListaFlex title="Lista flex box"/>
   <Avo nome="João" sobrenome="Silva" />
        <TextoSincronizado title="Texto Sicronizado" />
       <Events/>
        <Simples texto="flexBox"/>
        <ParImpar numero={30} />
        <Inverter texto="My react native"/>
        <MegaSena />
        <Contador numeroInicial={100} />
        
        <Plataformas /> */}
        
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
