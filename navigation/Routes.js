import React, {useContext, useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import {NavigationContainer,  } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {AuthContext} from './AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Routes = () => {

 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(null);

 const getData = async () => {
  //console.log('inicia data')
  try {
    //await AsyncStorage.removeItem('user')
    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
      // We have data!!
      const jsonValue = JSON.stringify(value)
      setUser(jsonValue)
      //console.log(value);
    }
  } catch (error) {
    // Error retrieving data
    //console.log(error);
  }
};
  
 useEffect(() => {
  //const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //return subscriber; // unsubscribe on unmount
  //console.log('inicia')
  getData()
}, []);
 
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
      <ActivityIndicator animating={loading} size="large" color="blue" style={{
            position:'absolute', left:0, right:0, bottom:0, top:0 }}  />
    </NavigationContainer>
  );
};

export default Routes;
