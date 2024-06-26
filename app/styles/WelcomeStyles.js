import React from "react";
import { View, Text, StyleSheet } from "react-native";


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




export default welcomeStyles;

