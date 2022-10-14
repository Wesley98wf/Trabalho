import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Home({navigation}){

    const [Home,setHome]=useState([]);

    useEffect(function(){
        async function getData(){
         const response= await fetch('https://mobile.ect.ufrn.br:3002/emails');
         const Home = await response.json();
         setHome(Home);
      
        }
        getData();
       
 
    },[]);
 
    function renderItem({item}) {
    return(
        <View style={styles.home}>
          
            <View style={styles.perfil} onTouchStart={() => navigation.navigate('Mensagem',{ id: item.id })}>
          <Image style={styles.imgfoto} source={{uri: item.picture}} />
          
          <View style={styles.usuario}>
            <Text style={styles.para}> Para: {item.to} </Text>
            <Text style={styles.de}> De: {item.from} </Text>
            
            <Text > {item.tittle} </Text>
            <Text style={styles.separaçao}>  {item.summary} </Text>
           </View>

           
            <View style={styles.espaço}> 
            <Text> {item.time}</Text>
            <View style={item.star ? styles.true : styles.false } 
            />
            
                <FontAwesome5 name="star" size={15} color="black" />
    
            </View>
    
        </View>
      </View>

    );
}


return (
    <View style={styles.home}>
        <FlatList
            data={Home}
            renderItem={renderItem}
            keyExtractor={item => item.id} /> 

    </View> 


)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },

    home: {
        flex: 1000,
        backgroundColor: '#4169e1',
        justifyContent: 'space-between',
    
      },
    
      perfil: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:  5,
        flexDirection: 'row',   
      },
    
      usuario: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'center',   
      },
    
      imgfoto: {
        width: 70,
        height: 70,
        borderRadius: 45,
      },

      separaçao: {
        textDecorationLine:'underline'
      },
      de:{
        fontWeight: 'bold',
      },
      para:{
        fontWeight: 'bold',
      },
      true:{
        
      },
      false:{

      },

  });
  