import React, { createContext, useState} from "react";
import axios from 'axios';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const baseUrl = 'https://c100-181-94-231-237.ngrok.io';
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    

    return (
        <AuthContext.Provider
            value={{
                user,
                error,
                loading,
                setUser,
                setError,
                login: async (email, password) => {
                    setLoading(true)
                    try{

                        let res = await axios({
                        method: 'POST',
                        url: `${baseUrl}/api/auth/login`,
                        data: { document:email, 
                                password: password 
                                },
                        }).then((response) => {
                            if (!response.data.error) {
                                //alert(` You have updated: ${JSON.stringify(response.data)}`);
                                //setIsLoading(false);
                                //setFullName("");
                                //setEmail("");
                                console.log(response.data);
                                setError(null);
                                setLoading(false)
                            }
                            if (response.data.error) {
                                //alert(` You have updated: ${JSON.stringify(response.data)}`);
                                //setIsLoading(false);
                                //setFullName("");
                                //setEmail("");
                                //console.log(response.data);
                                setError(response.data.error);
                                setLoading(false)
                                //console.log(response.data.error);
                            }  
                            

                        })

                    }catch(err){
                        //throw handler(e);
                        let error = err;
                        setLoading(false)
                        //console.log(error.toJSON())

                        /*if (err.response && err.response.data.hasOwnProperty("message"))
                            error = err.response.data;
                        else if (!err.hasOwnProperty("message")) error = err.toJSON();
                        console.log(error)
                        return new Error(error.message);*/
                        }
                    
                    /*await axios({
                        method: 'POST',
                        url: `${baseUrl}/api/auth/login`,
                        data: { document:'3496101', 
                                password: '' 
                                },
                        }).then((response) => {
                            if (response.status === 200) {
                                alert(` You have updated: ${JSON.stringify(response.data)}`);
                                //setIsLoading(false);
                                //setFullName("");
                                //setEmail("");
                            } else {
                            throw new Error("An error has occurred");
                            }
                            console.log(response);

                        }).catch((response) => {
                            console.log(response);
                        });*/
                    
                }
            }}
                            >
            {children}
        </AuthContext.Provider>
    )
}