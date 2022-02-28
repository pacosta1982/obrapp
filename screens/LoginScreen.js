import React, {useState} from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

const LoginScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Seguimiento de Obras</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
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
            <FormButton
                buttonTitle="Login"
                onPress={() => alert('Alerta')}
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
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    },
  forgotButton: {
    marginVertical: 35,
  },

}) 