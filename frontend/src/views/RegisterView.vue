<template>
  <section class="register">
    <br />
    <h1 class="RH">Tabemashou</h1>
    <form @submit.prevent="register" class="foRm">
      <h1 class="RH">Register</h1>
      <br />
      <div>
        <label for="firstName">first Name: </label>
        <br />
        <input type="text" v-model="firstName" id="firstName" />
      </div>
  
      <div>
        <label for="lastName">Last Name: </label>
        <br />
        <input type="text" v-model="lastName" id="lastName" />
      </div>
  
      <div>
        <label for="userAge">Birth date: </label>
        <br />
        <input type="date" v-model="userAge" id="userAge" />
      </div>
  
      <div>
        <label for="emailAdd">Email Address: </label>
        <br />
        <input type="email" v-model="emailAdd" id="emailAdd" />
      </div>
  
      <div>
        <label for="userPass">Password:</label>
        <br />
        <input type="text" v-model="userPass" id="userPass" />
      </div>
  
      <div>
        <label for="userProfile">Profile Picture link:</label>
        <br />
        <input type="text" v-model="userProfile" id="userProfile" />
      </div>
  <br>
      <button class="log" type="reset">Clear form</button>
      <button class="log" type="submit">Register</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2/src/sweetalert2.js'


export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      emailAdd: "",
      userPass: "",
      userProfile:
        "https://i.postimg.cc/4Nfb39wB/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    };
  },
  methods: {
    register() {
      // Send a request to the Node.js API to register the user
      axios
        .post("http://localhost:5000/register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile,
        })
        .then((response) => {
          // Handle successful registration
          alert("User Registered In!");
          Swal.fire("Registed", "Welcome new User!", "success");
          console.log(response.data);
          // Redirect the user to the login page
          window.location.href = "/login";
        })
        .catch((error) => {
          // Handle registration error
          alert("Error registering, the email is probably already used. try again in a minute (check console!)");
          console.error(error);
        });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&family=Quicksand&family=Rubik:wght@500&display=swap');
.register{
  background-color: #044B68;
  height: 100%;
  min-height: 100vh;
}
.foRm{
  justify-content: center;
  margin: 5% 30% 5% 30%;
  padding: 5%;
  text-align: center;
  color:#000000;
  border: 4px hidden #000000;
 background: #7bc2f0;}

.HR{
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
.foRm input{
  width: 80%;
  border-radius: 15%;
  border: 2px solid #000000;
}
@media (max-width: 768px) {
   .foRm {
    margin: 5%;
  padding: 5%;
   }}

  .log {
    width: 50%;
    border-radius: 10%;
    background-color: #7bc2f0;
    color: black;
    border: 2px hidden black;
  }
  .log:hover {
  background-color: #044B68;
  color: white;
}
</style>

