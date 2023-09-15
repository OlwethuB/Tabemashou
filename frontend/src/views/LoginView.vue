<template>
  <section class="in">
    <br />
    <h1 >Tabemashou</h1>
    <form class="loginForm" @submit.prevent="login">
      <h1>Login</h1>
      <br />
      <div>
        <label for="firstName">name:</label>
        <br />
        <input type="name" v-model="firstName" id="firstName" />
      </div>
      <br />
      <div>
        <label for="userPass">userPass:</label>
        <br />
        <input type="password" v-model="userPass" id="userPass" />
      </div> 
      <br />  
      <div>
        <button class="login" type="submit">Login</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import sweet from "sweetalert";
const Api = "http://localhost:5000/";

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
          sweet({
            title: `Signed in`,
            text: `Welcome back`,
            icon: "success",
            timer: 3000,
          });
          console.log(response.data);
          // Redirect the user to the dashboard
          window.location.href = "/";
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
          alert("Error check console!");
        });
    },
    submitForm() {
      // Check if the user is authenticated
      if (localStorage.getItem('token')) {
        // User is authenticated, proceed with login
      } else {
        // User is not authenticated, show error message
        alert('Please log in first.');
        return;
      }

      // Submit the login form
      // ...
    },
  },
  beforeSubmit(props) {
    // Check if the user is authenticated
    if (localStorage.getItem('token')) {
      props.form.validate();
    } else {
      // User is not authenticated, show error message
      alert('Please log in first.');
      return false;
    }

    return true;
  },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Quicksand&family=Rubik:wght@500&display=swap');
.in{
  background-color: #044B68;
  height: 100%;
  min-height: 100vh;
}
.loginForm{
  justify-content: center;
  margin: 5% 30% 5% 30%;
  padding: 5%;
  text-align: center;
  color:#000000;
  border: 4px hidden #adb5bd;
 background: #7bc2f0;}

h1{
  padding: 2%;
  color: #000000;
  font-family: 'Nunito', sans-serif;
  font-weight: bolder;
	font-size: 80px;
	text-shadow: -1px 2px 0 #fff,
				  1px 2px 0 #fff,
				 1px -2px 0 #fff,
				-1px -2px 0 #fff;
      }
input{
  width: 80%;
  border-radius: 15%;
  border: 2px solid #adb5bd;
}
@media (max-width: 768px) {
   form {
    margin: 5%;
  padding: 5%;
   }}

  .login {
    width: 80%;
    border-radius: 10%;
    background-color: #7bc2f0;
    color: black;
    border: 2px hidden black;
  }
  .login:hover {
  background-color: #044B68;
  color: white;
}
</style>
