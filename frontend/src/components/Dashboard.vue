
<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p v-if="user">
        <strong>Name:</strong> {{ user.firstName }}
      </p>
    </div>
  </template>
  
  <script>

export default {
  components: {},
  computed: {
    data() {
      return {
        user: ''
      };
    },
  },
  mounted() {
    // this.$store.dispatch("FetchUser");
  },
}
  </script>