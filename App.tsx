/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d54f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

/*import React from 'react';
import { Image, View } from 'react-native';
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 35, backgroundColor: 'powderblue' }} />
      <View style={{ height: 300, backgroundColor: 'white', justifyContent:"center", alignItems:"center" }}>
        <Image
          source=
          {{ uri: "https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-cavalo-colorido-e-moderno_173159-67.jpg" }}
          style={{ width: 300, height: 300}}>
      </Image>
      </View>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
    </View>
  );
}*/


import React, {useState} from 'react';
import { Image, View, StyleSheet, TextInput,Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import logocavalo from './logocavalo.jpg';

export default function App() {
  

  return (
     

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerprincipal}>

      <View style={styles.container1} />

      <ScrollView style={{flex: 1}} >

        

        <View style={styles.container2}>
          <Image
            source={logocavalo}
            
            style={{ width: 200, height: 200 }}>
          </Image>
        </View>
        
        <View style={styles.container3}>

            <View style={styles.caixa}>
                
                <Text style= {styles.label}>Login</Text>
                
                <TextInput
                style={styles.input}  
                
                keyboardType="email-address"
                placeholder='Digite seu login'
                />
            </View>

            <View style={styles.caixa}>
                
                <Text style= {styles.label}>Senha</Text>

                <TextInput
                      style={styles.input}
                      placeholder='Digite sua senha'
                      secureTextEntry
                />
            </View>

            <TouchableOpacity 
                style = {styles.botao}
                onPress={() => {}}
            >
                <Text style= {styles.buttonText}>Login</Text>
            </TouchableOpacity>

            
        </View>
      
      </ScrollView>

    </KeyboardAvoidingView>

    

    
  );
}

const styles =  StyleSheet.create({

     containerprincipal: {
          flex: 1
     },
     
     container1: {
          height: 35,
          backgroundColor: 'powderblue'
     },
     
     container2: {
          height: 210,
          backgroundColor: 'white',
          justifyContent: "center",
          alignItems: "center"
     },
     
     container3: {
          height: 360,
          backgroundColor: 'skyblue',
          alignItems: 'center'
     },

     caixa:{
          flexDirection:"row",
          alignItems: 'center',
          marginTop:20,
          width: 300,
          justifyContent:'space-between'
     },

     label: {
          color: "#0984e3"
     },

     input: {
          width: 250,
          height: 40,
          backgroundColor: 'skyblue',
          borderRadius:10,
          borderColor: "#0984e3",
          borderWidth:2,
          paddingLeft:20
     },

     botao:{
          width:300,
          height:40,
          marginTop:20,
          backgroundColor: '#192a56',
          borderRadius:10,
          justifyContent:'center',
          alignItems: 'center',
          elevation: 2 /*Sombra*/
     },

     buttonText:{
          fontSize:20,
          color: '#0984e3',
          
        }
})


/*import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import { logocavalo } from '.';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>

          <Text style={styles.header}>Header</Text>
           
          <TextInput placeholder="Username" style={styles.textInput} />
          

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>

      </TouchableWithoutFeedback>
    
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default KeyboardAvoidingComponent;*/
