import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signupStyles from '../styles/SignupStyles';
import { StyleSheet, TextStyle } from 'react-native';
import { CheckBox } from 'react-native-elements';
//import axios from '../api/axios';


const Email = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const handleEmail = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };

  const handleSubmit = async () => {
    /*try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/email-exist',
        withCredentials: true,
        data: {
          email: email,
        },
      });

      console.log(response.data);
      if (!response.data.exists) {
        //navigation.navigate('Password', { email: email });
      } else {
        setEmail('');
      }

      // Traiter la réponse ici si nécessaire
    } catch (err) {
      console.error(err);
    }*/
  };

  function toggleCheckbox(event: GestureResponderEvent): void {
    setIsChecked(!isChecked)
  }

  return (
    <View style={{
      width : '100%',
      height : '100%',
      backgroundColor : '#FFFFFF',
      paddingHorizontal : 10,
      
      flex: 1, 
      alignItems: 'center',
      
    }}>
    
      <View style={{
          width: 100,
          height: 100,
          backgroundColor: "#A0A0FF",
          borderRadius: 50,
          marginBottom : 70,
          top : 80,
        }}></View>


        <View style={{
            width : '100%',
            height : 30,
          
      
        }}></View>
        
        <Text
          style={signupStyles.enter}
        >
          Connectez vous !
        </Text>
        <View style={{width: '50%',
    height: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    

    }
            
        }></View>
        <Text
          style={signupStyles.description}
        >
          Laissez-nous identifier votre profil, Star Set n'attends plus que vous !
        </Text>
       
          <TextInput
            style={signupStyles.input}
            onChangeText={handleEmail}
            
            placeholder="chapter@exemple.com"
            placeholderTextColor="#808080"
          />
          <TextInput
            style={signupStyles.input}
            onChangeText={handleEmail}
            
            placeholder="mot de passe"
            placeholderTextColor="#808080"
          />

          
        <View style={{
            width : '100%',
            height : 150,
          
      
        }}></View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={signupStyles.connexionbutton}
          >
            <Text style={{ fontSize: 20, fontWeight : 'bold', }}>Connexion</Text>
          </TouchableOpacity>
        
        
      
      
    </View>
  );
};

export default Email;