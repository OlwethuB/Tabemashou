<template>
    <form @submit.prevent="login">
      <label for="firstName">name:</label>
      <input type="firstName" v-model="firstName" id="firstName">
      <label for="userPass">userPass:</label>
      <input type="userPass" v-model="userPass" id="userPass">
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        firstName: '',
        userPass: ''
      };
    },
    methods: {
      login() {
        // Send a request to the Node.js API to log in the user
        axios.post('http://localhost:5000/login', { firstName: this.firstName, userPass: this.userPass })
          .then(response => {
            // Handle successful login
            console.log(response.data);
            // Redirect the user to the dashboard
            window.location.href = '/';
          })
          .catch(error => {
            // Handle login error
            console.error(error);
          });
      }
    }
  };
  </script>