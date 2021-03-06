import React, {useState, useContext, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

//import { useAuth } from "../../providers/auth";

export default function Home(props) {
    const [user, setUser] = useState([]);
    /*const {navigate} = props.navigation;

    const {state, handleLogout} = useAuth();
    const user = state.user;*/
    const getUser = async() => {
        try {
            const value = await AsyncStorage.getItem('user');
            
            if (value !== null) {
              // We have data!!
              
              let us =  JSON.parse(value)
              setUser(us)
            }
          } catch (error) {
            // Error retrieving data
            console.log(error);
          }
      }

    useEffect(() => {
        getUser();
        //fetchPosts();
        //navigation.addListener("focus", () => setLoading(!loading));
      }, []); 

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                showsVerticalScrollIndicator={false}>
                <Image
                style={styles.userImg}
                source={{uri: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' }}
                />
                <Text style={styles.userName}>{user.name} </Text>
                <Text style={styles.aboutUser}>
                {user ? user.email || 'No details added.' : ''}
                </Text>
                <View style={styles.userBtnWrapper}>

                        <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                            <Text style={styles.userBtnTxt}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                            <Text style={styles.userBtnTxt}>Follow</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => {
                            navigation.navigate('EditProfile');
                            }}>
                            <Text style={styles.userBtnTxt}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                            <Text style={styles.userBtnTxt}>Logout</Text>
                        </TouchableOpacity>

                </View>
                <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>5</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    userBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    userBtn: {
      borderColor: '#2e64e5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: '#2e64e5',
    },
    userInfoWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginVertical: 20,
    },
    userInfoItem: {
      justifyContent: 'center',
    },
    userInfoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
  });
  