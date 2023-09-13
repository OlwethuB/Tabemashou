<template>
  <form @submit.prevent="login">
    <label for="firstName">name:</label>
    <input type="name" v-model="firstName" id="firstName" />
    <label for="userPass">userPass:</label>
    <input type="password" v-model="userPass" id="userPass" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2/src/sweetalert2.js'


export default {
  data() {
    return {
      firstName: "",
      userPass: "",
    };
  },
  methods: {
    login() {
      // Send a request to the Node.js API to log in the user
      axios
        .post("http://localhost:5000/login", {
          firstName: this.firstName,
          userPass: this.userPass,
        })
        .then((response) => {
          // Handle successful login
          alert('User signed In!')
          console.log(response.data);
          // Redirect the user to the dashboard
          window.location.href = "/";
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
          alert('Error check console!')
        });
    },
  },
};
</script>
