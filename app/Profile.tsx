import React, { ChangeEvent, useEffect, useState } from 'react';
import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, GestureResponderEvent } from 'react-native';

import ProfileAccount from './ui/ProfileAccount';
import { useLocation } from 'react-router-dom';

import Button from './ui/Button';
//import axios from '../../api/axios';
import { AccountModel } from './models/Account';
import profileStyles from './styles/ProfileStyles';

const Profile = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [usersObject, setUsersObject] = useState<any[]>([]);
  const [newName, setNewName] = useState<any>('');
  const [account, setAccount] = useState<AccountModel>(new AccountModel('', '', '', '', '', '', []));

  
  const sessionId = localStorage.getItem('sessionId');
  console.log('session id : ' + sessionId);
  

  console.log('ici');
  console.log(account);

  useEffect(() => {
    const fetchData = async () => {
      /*try {
        console.log(account.email);
        const response = await axios.post('http://127.0.0.1:8080/get-account-and-users-with-session', {
          sessionId: sessionId,
        }, {
          withCredentials: true,
        });
        console.log(response.data);
        setAccount(response.data[0]);
        setUsersObject(response.data[1]);

        // Traitez la réponse ici
      } catch (error) {
        // Gérez les erreurs ici
      }*/
    };
    console.log('D');
    console.log(account);
    if (account.users !== undefined) {
      fetchData(); // Appel de la fonction asynchrone lors du montage du composant
    } else {
      console.log("ca marche pas");
    }
  }, []); // Assurez-vous de passer un tableau vide en tant que deuxième argument pour exécuter l'effet une seule fois lors du montage initial du composant

  const nameHandler = (e: any) => {
    setNewName('');
  };

  function toggleCheckbox(event: GestureResponderEvent): void {
    setIsChecked(!isChecked)
  }

  /*const addProfile = async () => {
    try {
      console.log(account.email);
      const response = await axios.post('http://127.0.0.1:8080/add-user', {
        email: account.email,
        name: newName,
      }, {
        withCredentials: true,
      });
      console.log(response.data);
      let newUsersObject = usersObject.concat(response.data);

      setUsersObject(newUsersObject);
      setNewName('');

      // Traitez la réponse ici
    } catch (error) {
      // Gérez les erreurs ici
    }
  };*/



  return (
    <View style={profileStyles.profile}>
      
      <View style={profileStyles.content}>
        <Text style={profileStyles.qui}>Qui est-ce ?</Text>
        <View style={profileStyles.photo}>
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Julie" />
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Théo" />
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Matthieu" />
          <ProfileAccount image={require('../assets/images/chapter-logo.png')} name="Matthieu" />
          
        </View>
        <View style={profileStyles.addUserForm}>
        <View style={profileStyles.addImage}></View>
          
          <View style={{ marginTop: 8 , display : 'flex', flexDirection : 'column'}}>
          <Text style={profileStyles.headerAddUser}>AJOUTER UN PROFIL</Text>
            
            <TextInput
              style={profileStyles.newProfileInput}
              onChange={nameHandler}
              value={newName}
            />
            <View style = {{display : 'flex', flexDirection : 'row' , marginTop : 10}}>
            <TouchableOpacity
      style={[profileStyles.checkbox, isChecked && profileStyles.checked, {marginTop : 3}]}
      onPress={toggleCheckbox}
    ></TouchableOpacity>
            <Text style={{ fontSize :14, color : 'white', marginTop : 0 }}>Compte enfant :</Text>
            </View>
       
            <Button
              
              backgroundColor="#EAC702"
              textColor="black"
              variant="contained"
              style={{ width: '100%', height: 50, marginTop: 16, fontSize: 20 }}
            >
              Suivant
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
