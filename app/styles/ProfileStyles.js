import React from "react";
import { View, Text, StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  bodyProfile: {
    margin: 0,
    padding: 0,
    backgroundColor: "#000A2E",
    fontFamily: "Outfit",
    overflowX: "hidden",
    color: "white",
    lineHeight: 25,
  },
  profile: {
    backgroundColor: "#000A2E",
    fontFamily: "Outfit",
    overflowX: "hidden",
    backgroundColor: "#000A2E",
    color: "white",
    lineHeight: 25,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100%",
    paddingTop : '30px'
  },
  content: {
    backgroundColor: "#000A2E",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    marginTop: 25,
  },
  qui: {
    fontSize: 40,
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    color : 'white'
  },
  photo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: "9vw",
    flexDirection: "row",
    paddingBottom: 30,
    paddingTop: 20,
    gap : '10vw', 
  },
  textAddUser: {
    textAlign: "center",
  },
  image: {
    width: 130,
    marginTop: 20,
  },
  profileAccount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap",
    flexDirection: "column",
    margin: "0 40px",
  },
  addUser: {
    width: '50vw',
    height: 180,
    borderRadius: 6,
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addUserForm: {
    width: "100vw",
    height: 180,
    borderRadius: 6,
    display: "flex",
    gap : '30px',
    flexDirection: "row",
    alignItems: "center",
    justifyContent : 'center',
    
  },
  headerAddUser: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: "40vw",
    color : 'white',
   
    marginRight : 'auto',
    marginLeft : 0

  },
  newProfileInput: {
    height: 40,
    borderRadius: 3,
    marginTop: 20,
    width : '40vw',
    backgroundColor : 'white'
  },
  checkboxAndText: {
    marginRight: "auto",
    marginLeft: 12,
    marginTop: 5,
  },

  addImage: {
    height : '30vw',
    width : '30vw',
    maxHeight : '120px',
    maxWidth : '120px',
    backgroundColor : 'grey',
    borderRadius : '10px'
  },

  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight : '10px',
    MarginTop : 20,
    paddingTop : 3,

  },
  checked: {
    backgroundColor: 'black',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },



});


export default profileStyles;

