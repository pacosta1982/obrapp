import React, {useState, useContext} from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import {AuthContext} from '../navigation/AuthProvider';
import {ErrorText, Indicator} from "../components/Shared";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    //const [error, setError] = useState(null);

    const { login, error, loading } = useContext(AuthContext)

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (email.length === 0) {
          alert('Usuario Requerido!');
          return;
        }
        //Check for the Email TextInput
        if (password.length === 0) {
          alert('Password Requerido!');
          return;
        }
        //Checked Successfully
        //Do whatever you want
        //alert('Success');
        //setLoading(true)
        login(email, password)
      };

    return (
        <View style={styles.container}>
            
            <Image
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Seguimiento de Obras</Text>
            <ErrorText error={error}/>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Usuario"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <ActivityIndicator animating={loading} size="large" color="blue" style={{
            position:'absolute', left:0, right:0, bottom:0, top:0 }}  />
            <FormButton
                buttonTitle="Login"
                onPress={() => checkTextInput()/*login(email, password)*/}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

        </View>
    ) 
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    },
  forgotButton: {
    marginVertical: 35,
  },

}) 