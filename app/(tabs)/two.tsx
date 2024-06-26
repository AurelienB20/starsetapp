import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signupStyles from '../styles/SignupStyles';
import { StyleSheet, TextStyle, Image } from 'react-native';
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

          top : 80,
          marginBottom : 50
        }}></View>

        <View style={{
            width : '100%',
            height : 30,
          
      
        }}>

        </View>
        <Text
          style={signupStyles.titleprofilechoice}
        >
          Quel profil souhaitez vous créér
        </Text>
        
        <View style={{
            width : '100%',
            height : 100,
          
      
          }}>

        </View>
       
          
        
        <View style={signupStyles.typeofprofile}>
          <View style={signupStyles.square}>
            <Image 
              source={require('../../assets/images/loupe.png')}
              style={{
                width: 50,
                height: 50
              }}
              />
            <Text style={signupStyles.squaretitle}>User</Text>
          </View>
          <View style={signupStyles.square}>
            <Image source={require('../../assets/images/loupe.png')} style={{
              width: 50,
              height: 50
            }} />
            <Text style={signupStyles.squaretitle}>Worker</Text>
          </View>
        </View>
       
        <Text style={{ fontSize: 16, color: 'black', 
          position: 'absolute', 
          bottom: 30, 
          left: 0, 
          right: 0, 
          textAlign: 'center'
        }}>
          <strong>Star set</strong>
        </Text>
        
     
      
    </View>
  );
};

export default Email;