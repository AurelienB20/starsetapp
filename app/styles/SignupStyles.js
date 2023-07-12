import { StyleSheet, TextStyle } from 'react-native';

const signupStyles = StyleSheet.create({
    root: {
      "--dark": "#000A2F",
      "--main": "#001359",
      "--light": "#002FD9",
    },
    bodySignup: {
      margin: 0,
      padding: 0,
      backgroundColor: "var(--dark)",
      fontFamily: "Outfit",
      overflowX: "hidden",
      backgroundColor: "#000A2E",
      color: "white",
      lineHeight: "25px",
    },
    email: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "90vw",
      height: "97vh",
    },
    emailBackground: {},
    emailContent: {
      margin: "80px 0",
      height: "100vh",
      width: "80vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "center",
      zIndex: 2,
      backgroundColor : '#000A2E',
      marginHorizontal : '30px'

    },
    step: {
      marginRight: "auto",
      marginLeft: "2vw",
      color : 'white',
      marginBottom : '2vh',
     
    },
    stepText: {
      marginBottom: "2px",
      fontSize: "13px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    enter: {
        fontWeight: 'bold',
        textAlign: 'center',
        
        fontSize: 20,
        marginTop: 0,
        marginHorizontal : 20,
        
        
        color : 'white'
    },
    description: {
      marginTop: "20px",
      fontSize: "13px",
      textAlign: "center",
      color : 'white',
      marginHorizontal : "10px"
    },
    emailInput: {
      fontFamily: "Outfit",
      width: "380px",
      minWidth: "300px",
      display: "inline-block",
      backgroundColor: "white",
      borderRadius: "5px",
      border: "2px thin #002FD9",
      color: "black",
      textAlign: "center",
      fontSize: "15px",
      padding: "10px",
      transition: "all 0.5s",
      marginTop: "20px",
      border: 0,
      marginHorizontal : '10px'
    },


    input: {
      fontFamily: "Outfit",
      width: '90vw',
      maxWidth : "600px",
      display: "inline-block",
      backgroundColor: "white",
      borderRadius: "5px",
      border: "2px thin #002FD9",
      color: "black",
      textAlign: "center",
      fontSize: "15px",
      padding: "10px",
      transition: "all 0.5s",
      marginTop: "20px",
      marginHorizontal : '10px',
      border: 0,
      paddingHorizontal : '30px',
    },
    inputLeft: {
      width: "120px",
    },
    inputRight: {
      fontFamily: "Outfit",
      width: "240px",
      display: "inline-block",
      backgroundColor: "white",
      borderRadius: "5px",
      border: "2px thin #002FD9",
      color: "black",
      textAlign: "center",
      fontSize: "15px",
      padding: "10px",
      transition: "all 0.5s",
      marginTop: "20px",
      border: 0,
    },
    inputRow: {
      display: "flex",
      flexDirection: "row",
      
      
      
      
    },
    minimum: {
      height: "30px",
      marginTop: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "12px",
    },
    ads: {
      height: "30px",
      marginTop: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "12px",
    },
    submit: {
      borderRadius: "4px",
      fontSize: "16px",
      height: "50px",
      marginTop: "25px",
      width: "100%",
      backgroundColor: "#002FD9",
      color: "#fff",
      border: 0,
    },
    emailAndButton: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
    },
    offerTitle: {
      fontSize: "40px",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: "bold",
      marginBottom: 0,
    },
    offers: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems : 'center',
      gap: "4px",
      flexDirection: "row",
      width: "95vw",
      marginTop : '15px'
      
    },
    offer: {
      height: "360px",
      width: "260px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#000A2F",
      position: "relative",
    },
    offerName: {
      fontSize: "26px",
      textAlign: "center",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: "bold",
      marginBottom: 5,
      marginTop : '10px'
    },
    offerInfo: {
      textAlign: "center",
      marginBottom: 0,
    },
    offerBottom: {
      position: "absolute",
      bottom: 0,
      left: "20px",
      width: "80%",
    },
    offerPrice: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "#000A2E",
      marginBottom: '10px'
    },
    perMonth: {
      fontSize: "16px",
      fontWeight: "initial",
    },
    discover: {
      color: "rgb(255, 166, 0)",
      textAlign: "center",
      fontWeight: "bold",
      marginBottom : '6px'
    },
    errorMessage: {
      color: "red",
    },

    imageBackground: {
        width : '100%',
        heigth : '100%'
      },
  
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal : '10px'
      },
      checked: {
        backgroundColor: 'black',
      },
      checkmark: {
        color: 'white',
        fontWeight: 'bold',
      },
    
      progressBar: {
        width: '85vw',
        height: 6,
        marginTop: 20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 5,
      },
      progressFill: {
        height: "100%",
        backgroundColor: "#002FD9",
        maxWidth: "100%",
      },
      strengthText: {
        display: "flex",
        justifyContent: "center",
        color : 'white',
        marginTop : '10px'
      },

      li : {
        fontSize : '16px'
      }

  });

export default signupStyles;