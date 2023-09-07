
<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p v-if="user">
        <strong>Name:</strong> {{ user.firstName }}
        <strong>Email:</strong> {{ user.emailAdd }}
      </p>
    </div>
  </template>
  
  <script>
    import axios from 'axios';

  export default {
    data() {
      return {
        user: ''
      };
    },
    async mounted() {
      // Get the user from the local storage or database
      const response = await axios.get('http://localhost:5000/user/:id');
      this.user = response.data;
    }
  };
  </script>