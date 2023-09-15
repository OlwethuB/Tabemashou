<template>
    <button>Logout</button>
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
        .post(`${Api}logout`, {
          firstName: this.firstName,
          userPass: this.userPass,
        })
        .then((response) => {
          // Handle successful login
          sweet({
            title: `Signed out`,
            text: `Thank you and goodbye`,
            icon: "success",
            timer: 3000,
          });
          console.log(response.data);
          // Redirect the user to the dashboard
          window.location.href = "/";
          // Change the login to logout
          //  Navigate to profile
          this.navigate('/login')
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
          alert("Error check console!");
        });
    },

  },
  }
</script>