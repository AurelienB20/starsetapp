import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signupStyles from './styles/SignupStyles';
import welcomeStyles from './styles/welcomestyles';
import { StyleSheet, TextStyle, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
//import axios from '../api/axios';


const SummaryScreen = () => {
  const [isSelected, setSelection] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>RÉCAPITULATIF</Text>
      
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://img.20mn.fr/wb0GX0XqSd2N4Y3ItfLEGik/1444x920_squeezie-youtubeur-chanteur-et-desormais-auteur-de-bd' }} // Replace with the actual profile picture URL
          style={styles.profilePicture}
        />
      </View>
      <View style={{
            width : '100%',
            height : 50,
            
      }}></View>

      <View style={styles.infoContainer}>
        <View style={styles.daterow}>
          <View style={styles.date}>
            <Text style={styles.infoText}><strong>9/12/2024</strong></Text>
          </View>
          
          <Text style={styles.infoText}>➔</Text>
          <View style={styles.date}>
            <Text style={styles.infoText}><strong>9/12/2024</strong></Text>
          </View>
        </View>

        <View style={styles.daterow}>
          <View style={styles.date}>
            <Text style={styles.infoText}><strong>19 : 00</strong></Text>
          </View>
          
          <Text style={styles.infoText}>➔</Text>
          <View style={styles.date}>
            <Text style={styles.infoText}><strong>21 : 00</strong></Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.case}>
            <Text style={styles.infoText}>19 avenue Charles De Gaulles</Text>
          </View>
          
          
          <View style={styles.case}>
            <Text style={styles.infoText}>77420</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.date}>
            <Text style={styles.infoText}>Lagny-sur-marne</Text>
          </View>

        </View>

      </View>

      <TextInput
        style={styles.input}
        placeholder="Ajouter une instruction ou information primordiale"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          
          
          style={styles.checkbox}
        />
        <Text style={styles.label}>Me faire un rappel</Text>
      </View>

      <View style={styles.totalpurchase}>
        <Text style={styles.totalText}><strong>Total achat:</strong></Text>
        <Text style={styles.totalText}><strong>30,00€</strong></Text>
      </View>
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Étape suivante</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  profileContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  step: {
    alignItems: 'center',
  },
  stepText: {
    fontSize: 24,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
    textAlign: 'center'
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontSize: 16,
    color: '#000',
  },
  totalText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00FF00',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },

  daterow : {
    width : '100%',
    
    flexDirection : 'row',
    justifyContent: 'space-between'
  },

  row : {
    width : '100%',
    
    flexDirection : 'row',
    justifyContent: 'flex-start'
  },

  date : {
    width : 150,
    margin : 3,
    padding : 5,
    backgroundColor:  '#D3D3D3',
    borderRadius : 10
  },

  case : {
    
    margin : 3,
    padding : 5,
    paddingHorizontal: 15,
    backgroundColor:  '#D3D3D3',
    borderRadius : 10
  },

  totalpurchase : {
    width : "100%",
    flexDirection : "row",
    margin : 10,
    padding : 10,
    justifyContent : 'space-between',
    fontSize : 200
  },

  purchasetext : {

  }
});

export default SummaryScreen;