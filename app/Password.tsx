import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput,Button, TouchableOpacity, GestureResponderEvent } from "react-native";
import signupStyles from './styles/SignupStyles';

const strengths = [
    { length: 12, strength: "Very Strong" },
    { length: 8, strength: "Strong" },
    { length: 6, strength: "Medium" },
    { length: 4, strength: "Weak" },
    { length: 0, strength: "Very Weak" }
] as const;

const Password = () => {
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("Very Weak");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    
    let email =  "";
  
    useEffect(() => {
      // Votre code useEffect existant
  
    }, [password]);
  
    const inputHandler = (enteredValue : string) => {
      const trimmedValue = enteredValue.trim();
      setPassword(trimmedValue);
    };
  
    const handleSubmit = () => {
      
    };
  
    function handlePress(event: GestureResponderEvent): void {
        throw new Error("Function not implemented.");
    }

    return (
      <View style={{
        width : '100%',
        height : '100%',
        backgroundColor : '#000A2E',
        paddingHorizontal : '30px',
        alignItems : 'center',
        justifyContent : 'center',
        
      }}>
        <Text style={signupStyles.step}>Etape 2 sur 5</Text>
        <Text style={signupStyles.enter}>Créez votre mot de passe</Text>
        <View style={{width: '50%',
    height: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: '10px'
    }
            
        }></View>
        <Text style={signupStyles.description}>
          Cette adresse mail et ce mot de passe vous permettent de vous identifier pour lire vos livres préférés.
        </Text>
        
          <TextInput
            style={signupStyles.input}
            value='chapter@exemple.com'
            editable={false}
          />
          <TextInput
            style={signupStyles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={inputHandler}
            placeholder="Mot de passe"
            //required
          />
            <Text style={{ fontSize: 12, color : 'white', 
            marginTop : '10px'
        }}>utilisez au moins 8 caractères</Text>
          {/* Votre code existant pour l'affichage de la force du mot de passe */}

          <View style={signupStyles.progressBar}>
      <View
        style={[
          signupStyles.progressFill,
          { width: `${(password.length / 16) * 100}%` },
        ]}
      />
    </View>
    <View style={signupStyles.strengthText}>
      <Text  style={signupStyles.strengthText}>{passwordStrength}</Text>
    </View>
          
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              
              width: '90%',
              height: 50,
              backgroundColor: '#EAC702',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '30px',
              borderRadius : 20,
              paddingHorizontal : 30,
              paddingVertical : '30px'
              
              

            }}
          >
            <Text style={{ fontSize: 20, fontWeight : 'bold' }}>Suivant</Text>
          </TouchableOpacity>
          
         
       
      </View>
    );
  };

 
  
  const styles = {
    container: {
      flex: 1,
      padding: 20,
    },
    step: {
      // Styles pour l'étape
    },
    title: {
      // Styles pour le titre
    },
    description: {
      // Styles pour la description
    },
    input: {
      // Styles pour le TextInput
    },
    button: {
        width : '80%'
      // Styles pour le bouton
    },
    buttonStyle: {
        
    }
  };
  
  export default Password;
  