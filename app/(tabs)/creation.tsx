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
      flex: 1, alignItems: 'center', justifyContent: 'center' ,
      marginHorizontal: 3
    }}>
    
        
    

      
     
        <Text
          style={signupStyles.enter}
        >
          Création par Email !
        </Text>
        <View style={{width: '50%',
    height: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    

    }
            
        }></View>
        <Text
          style={signupStyles.subtitle}
        >
          Laissez-nous identifier votre profil, Star Set n'attends plus que vous !
        </Text>
        
          <TextInput
            style={signupStyles.inputemailcreation}
            onChangeText={handleEmail}
            
            placeholder="chapter@exemple.com"
            placeholderTextColor="#808080"
          />
          <TextInput
            style={signupStyles.inputpassword}
            onChangeText={handleEmail}
            
            placeholder="mot de passe"
            placeholderTextColor="#808080"
          />
          <TextInput
            style={signupStyles.inputpassword}
            onChangeText={handleEmail}
            
            placeholder="confirmation mot de passe"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={signupStyles.submitbutton}
          >
            <Text style={{ fontSize: 20, fontWeight : 'bold', }}>Connexion</Text>
          </TouchableOpacity>
        
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
  );
};

export default Email;