import React, { Component, createContext, useState } from "react";
import API from "./utils/API";

const UserContext = React.createContext({});
export const UserConsumer = UserContext.Consumer;

function UserProvider({ children }){

  const [user, setUser] = useState({
    loggedIn: false,
    username: null,
    password: '',
    confirmPassword: '',
    redirectTo: null
  });

  const updateUser = (userObject) => {
    setUser(prevState => ({...prevState, userObject}));
  }

  const getUser = () => {
    API.user().then(response => {
      console.log('Get user response: ', response.data);

      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        setUser(prevState => ({...prevState,
          loggedIn: true,
          username: response.data.user.username,
          redirectTo: '/'
        }));
        
      } else {
        console.log('Get user: no user');
        setUser(prevState => ({...prevState,
          loggedIn: false,
          username: null
        }));
      }
    })
  }

  const handleUserChange = event => {
    const { name, value } = event.target;
    console.log(name + ":" + value);

    setUser(prevState => ({...prevState, 
      [name]: value
    }));
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    console.log('handleLoginSubmit');

    let { username, password } = user;
    let userData = { "username": username, "password": password };

    console.log("userData", userData);

    API.login(userData)
      .then(response => {
        console.log('login response: ', response);

        if (response.status === 200) {
          // update App.js state
          setUser(prevState => ({...prevState,
            loggedIn: true,
            username: response.data.username,
            redirectTo: '/'
          }));
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);
      })
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('handleRegisterSubmit');

    let { username, password } = user;
    let registerData = { "username": username, "password": password };
    
    API.register(registerData)
      .then(response => {
        console.log("register response: ", response);

        if (!response.data.errmsg) {
					console.log('successful signup')
          //redirect to login page
          
          setUser(prevState => ({...prevState, redirectTo: '/login'}));
				} else {
					console.log('username already taken')
				}
      }).catch(error => {
				console.log('signup error: ')
				console.log(error)
			});
  }

  const handleLogout = (event) => {
    event.preventDefault();
    console.log('handleLogout');
    
    API.logout()
      .then(response => {
        console.log(response.data)
          if (response.status === 200) {
            updateUser({
              loggedIn: false,
              username: null,
              password: '',
              confirmPassword: '',
              redirectTo: '/'
            })
          }
      }).catch(error => {
        console.log('Logout error')
      });
  }

  return (
    <UserContext.Provider value={{
      user, 
      updateUser: updateUser,
      getUser: getUser,
      handleUserChange: handleUserChange,
      handleLoginSubmit: handleLoginSubmit,
      handleRegisterSubmit: handleRegisterSubmit,
      handleLogout: handleLogout
    }} >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
export { UserProvider };