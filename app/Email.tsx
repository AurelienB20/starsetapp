import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signupStyles from './styles/SignupStyles';
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
      backgroundColor : '#000A2E',
      paddingHorizontal : '10px'
    }}>
    
        
    

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,
      marginHorizontal: '3vw'
    
    }}>
      <Text style={signupStyles.step}>Etape 1 sur 5</Text>
        <Text
          style={signupStyles.enter}
        >
          Libérer votre imagination avec nos livres à volonté et bien plus encore !
        </Text>
        <View style={{width: '50%',
    height: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '20px',
    

    }
            
        }></View>
        <Text
          style={signupStyles.description}
        >
          Cette adresse mail vous permet de vous identifier pour lire vos livres préférés
        </Text>
        <View style={{ marginVertical: 20 }}>
          <TextInput
            style={signupStyles.input}
            onChangeText={handleEmail}
            
            placeholder="chapter@exemple.com"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              
              width: '90vw',
              height: 50,
              backgroundColor: '#EAC702',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
              borderRadius : 25,
              marginHorizontal : '10px',
              
              

            }}
          >
            <Text style={{ fontSize: 20, fontWeight : 'bold' }}>Suivant</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
      style={[signupStyles.checkbox, isChecked && signupStyles.checked]}
      onPress={toggleCheckbox}
    >
      {isChecked && <Text style={signupStyles.checkmark}>✓</Text>}
    </TouchableOpacity>
          <Text style={{ fontSize: 12, color: 'white' }}>
            Oui, je voudrais recevoir des offres spéciales de Chapter par mail.
          </Text>
        </View>
      </View>
      
    </View>
  );
};

export default Email;