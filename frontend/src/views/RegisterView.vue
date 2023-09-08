<template>
    <form @submit.prevent="register">
      <label for="firstName">first Name: </label>
      <input type="firstName" v-model="firstName" id="firstName">

      <label for="lastName">Last Name: </label>
      <input type="lastName" v-model="lastName" id="lastName">

      <label for="userAge">Birth date: </label>
      <input type="userAge" v-model="userAge" id="userAge">

      <label for="emailAdd">Email Address: </label>
      <input type="emailAdd" v-model="emailAdd" id="emailAdd">
      
      <label for="userPass">Password:</label>
      <input type="userPass" v-model="userPass" id="userPass">

      <label for="userProfile">Profile Picture link:</label>
      <input type="userProfile" v-model="userProfile" id="userProfile">

      <button type="submit">Register</button> <button type="reset">Clear form</button>
    </form>
  </template>
  
  <script>
    import axios from 'axios';

  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        userAge: '',
        emailAdd: '',
        userPass: '',
        userProfile: 'https://i.postimg.cc/4Nfb39wB/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'
      };
    },
    methods: {
      register() {
        // Send a request to the Node.js API to register the user
        axios.post('http://localhost:5000/register', { 
          firstName: this.firstName, 
          lastName:this.lastName, 
          userAge: this.userAge, 
          emailAdd: this.emailAdd, 
          userPass: this.userPass, 
          userProfile: this.userProfile
        })
          .then(response => {
            // Handle successful registration
            console.log(response.data);
            // Redirect the user to the login page
            window.location.href = '/login';
          })
          .catch(error => {
            // Handle registration error
            console.error(error);
          });
      }
    }
  };
  </script>