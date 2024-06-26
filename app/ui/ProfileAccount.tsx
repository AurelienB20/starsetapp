import React from 'react';
import { View, Text, Image } from 'react-native';

type ProfileAccountProps = {
  name: string;
  image: any; // Remplacez le type 'string' par 'any' pour accepter les images locales dans React Native
}

const ProfileAccount: React.FC<ProfileAccountProps> = ({ name, image }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={image} style={{ width: 330, height: 330, maxHeight : 120, maxWidth : 120, borderRadius: 60 }} />
      <Text style={{fontSize : 17 ,  fontWeight : 'bold', color : 'white', fontFamily : 'Arial', marginTop : 4}}>{name}</Text>
    </View>
  );
}

export default ProfileAccount;