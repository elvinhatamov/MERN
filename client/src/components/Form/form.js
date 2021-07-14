import React from 'react';
import axios from 'axios';



 
 export default class Form extends React.Component{

  constructor(){
    super();
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    }
  }

  // lifecycle method
    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`,{
            headers:{
                "Access-Control-Allow-Origin":true
            }
        })
          .then(res => {
            const persons = res.data;
            console.log(persons);
            // this.setState({ persons });
          })
      }
      render() {
        return (
          <div>
            <h1>Form  data</h1>
        
          {this.setState.userList.map(user =>{
            <li key ={user.email}>{user.first_name} {user.last_name}</li>
          })}
       
        </div>
         )
          
        
      }
 }



