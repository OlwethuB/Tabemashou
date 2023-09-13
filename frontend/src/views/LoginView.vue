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



export default {
  data() {
    return {
      firstName: "",
      userPass: "",
    };
  },
  mounted(){
    this.$store.dispatch("login");
  }
}
</script>
