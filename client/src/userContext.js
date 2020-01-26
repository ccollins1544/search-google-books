import React, { useState } from "react";

const UserContext = React.create({});
export const UserConsumer = UserContext.Consumer;

function UserProvider({ children }){
  const [user, setUser] = useState(null);

  const updateUser = (userObject) => {
    this.setState(userObject)
  }

  const getUser = () => {
    
    /*
    API.user().then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    }) */ 
  }

  return (
    <UserContext.Provider 
      value={{user}}
    >

    </UserContext.Provider>
  )
}