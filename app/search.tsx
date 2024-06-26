import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, GestureResponderEvent, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import signupStyles from './styles/SignupStyles';

import { StyleSheet, TextStyle, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
//import axios from '../api/axios';


const StarSetScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Star Set</Text>
      

      <Text style={styles.sectionHeader}>TOP Workers !</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://img.20mn.fr/wb0GX0XqSd2N4Y3ItfLEGik/1444x920_squeezie-youtubeur-chanteur-et-desormais-auteur-de-bd' }} // Replace with actual URL
          style={styles.profilePicture}
        />
        <Image
          source={{ uri: 'https://img.20mn.fr/wb0GX0XqSd2N4Y3ItfLEGik/1444x920_squeezie-youtubeur-chanteur-et-desormais-auteur-de-bd' }} // Replace with actual URL
          style={styles.profilePicture}
        />
        <Image
          source={{ uri: 'https://img.20mn.fr/wb0GX0XqSd2N4Y3ItfLEGik/1444x920_squeezie-youtubeur-chanteur-et-desormais-auteur-de-bd' }} // Replace with actual URL
          style={styles.profilePicture}
        />
      </View>

      <Text style={styles.sectionHeader}>Ce qui pourrait vous plaire</Text>
      <View style={styles.infoContainer}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>👶 Babysitting</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>🐶 Petsitting</Text>
        </View>
        <Text style={styles.descriptionText}>
          "J'aime aider, et je serais ravie de vous partager mon expérience"
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Voir Plus</Text>
      </TouchableOpacity>
    </ScrollView>
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  infoContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00FF00',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default StarSetScreen;




