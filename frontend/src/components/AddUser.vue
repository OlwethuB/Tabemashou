<template>
  <form @submit.prevent="register">
    <div>
      <label for="firstName">first Name: </label>
      <br>
      <input type="firstName" v-model="firstName" id="firstName">
    </div>

    <div>
      <label for="lastName">Last Name: </label>
      <br>
      <input type="lastName" v-model="lastName" id="lastName">
    </div>

    <div>
      <label for="userAge">Birth date: </label>
      <br>
      <input type="userAge" v-model="userAge" id="userAge">
    </div>

    <div>
      <label for="emailAdd">Email Address: </label>
      <br>
      <input type="emailAdd" v-model="emailAdd" id="emailAdd">
    </div>

    <div>
      <label for="userPass">Password:</label>
      <br>
      <input type="userPass" v-model="userPass" id="userPass">
    </div>

    <div>
      <label for="userProfile">Profile Picture link:</label>
      <br>
      <input type="userProfile" v-model="userProfile" id="userProfile">
    </div>

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