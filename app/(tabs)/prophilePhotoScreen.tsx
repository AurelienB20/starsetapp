import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signupStyles from '../styles/SignupStyles';
import welcomeStyles from '../styles/welcomestyles';
import { StyleSheet, TextStyle, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
//import axios from '../api/axios';


const ProfilePhotoScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.headerText}>PHOTO DE PROFIL</Text>
      <Text style={styles.subHeaderText}>
        Un petit sourire pour la caméra ! Cheeeeeese 📸
      </Text>
      <View style={{
            width : '100%',
            height : 50,
            
          }}>

        </View>
      <View style={styles.photoContainer}>
        <Image
          source={{ uri: 'https://img.20mn.fr/wb0GX0XqSd2N4Y3ItfLEGik/1444x920_squeezie-youtubeur-chanteur-et-desormais-auteur-de-bd' }} // Replace with the actual placeholder image URL
          style={styles.profilePhoto}
        />
      </View>
      <View style={{
            width : '100%',
            height : 50,
            
          }}>

        </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Choisir sa photo</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Star Set</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  photoContainer: {
    width: 300,
    height: 300,
    borderRadius: 100,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#DDDDDD',
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

export default ProfilePhotoScreen;