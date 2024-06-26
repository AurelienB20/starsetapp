"hi"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Layout from './components/Layout';
//import Home from './components/pages/Home';
import Email from './app/Email';
import Password from './app/Password';
import Perso from './app/Perso';
import Subscription from './app/Subscription';
import PopUp from './app/PopUp';
import Profile from './app/Profile';
//import Password from './components/pages/signup/Password';
//import Perso from './components/pages/signup/Perso';
//import Profile from './components/pages/Profile';
//import PopUp from './components/pages/PopUp';
//import Author from './components/pages/Author';
//import Subscription from './components/pages/signup/subscription';
//import SignIn from './components/pages/signin';
//
const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="" component={Email} />
                <Stack.Screen name="Email" component={Email} />
                <Stack.Screen name="Password" component={Password} />
                
                <Stack.Screen name="Subscription" component={Subscription} />
                <Stack.Screen name="PopUp" component={PopUp} />
                <Stack.Screen name="Profile" component={Profile} />
                
                {/*<Stack.Screen name="Author" component={Author} />
                <Stack.Screen name="PopUp" component={PopUp} />
                <Stack.Screen name="Profile" componen={Profile} />
                
                <Stack.Screen name="Password" component={Password} />
                <Stack.Screen name="Perso" component={Perso} />
                <Stack.Screen name="Subscription" component={Subscription} />
                
                <Stack.Screen name="SignIn" component={SignIn} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;