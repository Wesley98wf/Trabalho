import React , { useEffect, useState} from 'react';
import {View,Text,StyleSheet,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';




export default function Mensagem ({route,navigation}){
    const { id } = route?.params || {};

    const [mensagem, setMensagem]=useState([]); 

    useEffect(() => {
        async function getData(){
            const response=await fetch('https://mobile.ect.ufrn.br:3002/emails/');
            const mensagem= await response.json();
            setMensagem(mensagem);
        
        }
        getData();
    },[]);

    function renderItem({item}) {
        return ( 
                <View style={styles.titulo}>
            
                <Text style={styles.Titulo}> {item.tittle}  </Text>
                <View style={styles.informaçao}> 
                <Image style={styles.imgfoto} source={{uri: item.picture}} />
                <Text style={styles.conteudo}> <Text style={styles.de }> De: </Text> {item.from} <Text style={styles.para }> Para: </Text> {item.to}  {item.time} </Text>

                </View>
               
                <View style={styles.email}>
                    <Text style={styles.email1}> {item.body}</Text>

                </View>
              
              </View>

            
        )
    }
  

    return (
        <View style={styles.container}>   
            <FlatList
                data={mensagem}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
     
  
    },
    titulo:{
        width:400,
        flex:1,
        fontWeight: 'bold',
        alignItems:'center',
        backgroundColor:'#4169e1',
        borderBottomWidth: 2,
        
    },

    informaçao:{
        width:400,
        height: 200,
        textDecorationLine:'underline',
        alignItems:'center',
        backgroundColor:'#4169e1',
        borderBottomWidth: 2,
    },
    email:{
        width:400,
        height:500,
        backgroundColor:'#4169e1',
        borderBottomWidth: 2,
        
        
    },


    Titulo:{
        fontSize:40,
        fontWeight: 'bold',
        color:'white',
        textDecorationLine:'underline',

    },
    conteudo:{
        fontSize:30,
        fontWeight: 'bold',
        color:'white',
        

    },
    email1:{
        color:'white',
        fontSize:40,

    },
    de:{
        color:'black',
    },
    para:{
        color:'black',
    },
    imgfoto: {
        width: 70,
        height: 70,
        borderRadius: 45,
    }








});

