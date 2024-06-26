import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import signupStyles from './styles/SignupStyles';


const Perso = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [native, setNative] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [tel, setTel] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const navigation = useNavigation();

 

  useEffect(() => {
    // Pour effectuer des modifications sur le body, vous pouvez utiliser d'autres méthodes spécifiques à React Native
    return () => {
      // Nettoyage de l'effet
    };
  }, []);

  const handleFirstName = (value: React.SetStateAction<string>) => {
    setFirstName(value);
  };

  const handleLastName = (value: React.SetStateAction<string>) => {
    setLastName(value);
  };

  const handleCountryCode = (value: React.SetStateAction<string>) => {
    setCountryCode(value);
  };

  const handleTel = (value: React.SetStateAction<string>) => {
    setTel(value);
  };

  const handleDay = (value : any) => {
    if (value === '' || parseInt(value) <= 31) {
      setDay(() => value);
    }
  };
  
  const handleMonth = (value : any) => {
    if (value === '' || parseInt(value) <= 12) {
      setMonth(() => value);
    }
  };
  const handleYear = (value: React.SetStateAction<string>) => {
    setYear(value);
  };

  const handleSubmit = async () => {
    let date = new Date(`${year}-${month}-${day}`);
    let completeTel = countryCode + tel;
    /*try {
      const response = await axios.post('http://127.0.0.1:8080/create-account', {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: date,
        telephone: completeTel,
      });

      console.log(response.data);

      // Traiter la réponse ici si nécessaire

      navigate('/signup/subscription');
    } catch (err) {
      console.error(err);
    }*/
    //navigate('/signup/subscription');
  };

  return (
    <View style={{
        width : '100%',
        height : '100%',
        backgroundColor : '#000A2E',
        paddingHorizontal : 30,
        alignItems : 'center',
        justifyContent : 'center',
        marginHorizontal : 10
      }}>
      <Text style={signupStyles.step}>Etape 3 sur 5</Text>
      <Text style={signupStyles.enter}>Entrez vos informations personnelles</Text>
      <View style={{width: '50%',
    height: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    }}></View>

      <Text style={signupStyles.description}>Ces informations seront utilisées par votre compte.</Text>
      <TextInput
        style={signupStyles.input}
        value={firstName}
        onChangeText={handleFirstName}
        placeholder="Prénom"
       
      />
      <TextInput
        style={signupStyles.input}
        value={lastName}
        onChangeText={handleLastName}
        placeholder="Nom"
        
      />
      <View style={signupStyles.inputRow}>
        <TextInput
          style={[signupStyles.input, { width: 25 ,flex : 1}]}
          value={day}
          onChangeText={handleDay}
          placeholder="01"
          keyboardType="numeric"
         
        />
        <TextInput
          style={[signupStyles.input, { width: 25 }]}
          value={month}
          onChangeText={handleMonth}
          placeholder="01"
          keyboardType="numeric"
          
        />
        <TextInput
          style={[signupStyles.input, { width: 25}]}
          value={year}
          onChangeText={handleYear}
          placeholder="2002"
          keyboardType="numeric"
          
        />
      </View>
      <View style={signupStyles.inputRow}>
        <TextInput
          style={[signupStyles.input, { width: 25 }]}
          value={countryCode}
          onChangeText={handleCountryCode}
          placeholder="FR (+33)"
          
        />
        <TextInput
          style={[signupStyles.input, { width: 55 }]}
          value={tel}
          onChangeText={handleTel}
          placeholder="123456789"
          keyboardType="numeric"
         
        />
      </View>

      <TouchableOpacity
            onPress={handleSubmit}
            style={{
              
              width: '90%',
              height: 50,
              backgroundColor: '#EAC702',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
              borderRadius : 20,
              paddingHorizontal : 30,
              paddingVertical : 30
              
              

            }}
          >
            <Text style={{ fontSize: 20, fontWeight : 'bold' }}>Suivant</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#EAC702',
    height: 50,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default Perso;
