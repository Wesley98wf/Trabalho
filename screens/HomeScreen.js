import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from '../components/Home';
import Mensagem from './Mensagem';

export default function HomeScreen({navigation}) {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}> 
        <Text style={styles.texto}> E-MAILS </Text>
        <FontAwesome5 name="envelope" size={25} color="black" />
        
      </View>
      <Home navigation= {navigation}/>
      <Mensagem navigation={navigation}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,

  },
  header: {
    height:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4169e1',
  } ,
  texto: {
    fontWeight: 'bold',
    alignItems:'center',
    textAlignVertical:'center',
  },


});
