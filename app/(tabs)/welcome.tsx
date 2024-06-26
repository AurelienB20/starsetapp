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
    <View style={welcomeStyles.container}>
      <View style={welcomeStyles.profilePictureContainer}>
        <Image
          source={{ uri: 'https://example.com/profile-picture.jpg' }} // Replace with the actual profile picture URL
          style={welcomeStyles.profilePicture}
        />
      </View>

      <Text style={welcomeStyles.welcomeText}>Bienvenue Viriya Chip!</Text>

      <Text style={welcomeStyles.descriptionText}>
        Quelques <Text style={welcomeStyles.linkText}>documents</Text> sont indispensables pour <Text style={welcomeStyles.linkText}>finaliser</Text> votre compte et <Text style={welcomeStyles.linkText}>commencer vos activités</Text>
      </Text>

      <View style={welcomeStyles.documentContainer}>
        <View style={welcomeStyles.documentRow}>
          <View style={welcomeStyles.documentItemGreen}>
            <Text style={welcomeStyles.documentText}>Pièce d’identité</Text>
          </View>
        </View>
        <View style={welcomeStyles.documentRow}>
          <View style={welcomeStyles.documentItemYellow}>
            <Text style={welcomeStyles.documentText}>Extrait Kbis, INSEE, etc...</Text>
          </View>
        </View>
        <View style={welcomeStyles.documentRow}>
          <View style={welcomeStyles.documentItemGreen}>
            <Text style={welcomeStyles.documentText}>Extrait Kbis, INSEE, etc...</Text>
          </View>
        </View>
        <View style={welcomeStyles.documentRow}>
          <View style={welcomeStyles.documentItemGray}>
            <Text style={welcomeStyles.documentText}>Extrait Kbis, INSEE, etc...</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={welcomeStyles.button}>
        <Text style={welcomeStyles.buttonText}>Suivant</Text>
      </TouchableOpacity>

      <Text style={welcomeStyles.footerText}>Star Set</Text>
    </View>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profilePictureContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#A0A0FF",
    borderRadius: 50,
    marginTop: 80,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  linkText: {
    color: '#0000EE',
  },
  documentContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  documentRow: {
    width: '90%',
    marginVertical: 10,
  },
  documentItemGreen: {
    backgroundColor: '#00FF00',
    padding: 10,
    borderRadius: 5,
  },
  documentItemYellow: {
    backgroundColor: '#FFFF00',
    padding: 10,
    borderRadius: 5,
  },
  documentItemGray: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 5,
  },
  documentText: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#00FF00',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
});

export default Email;