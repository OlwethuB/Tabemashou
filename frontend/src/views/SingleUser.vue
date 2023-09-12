<template>

  <main>
    <br />
    <div v-if="user" class="user-details">
      <br />
      <img :src="user.userProfile" :alt="user.firstName" />
      <div>
        <h3>{{ user.firstName }} {{ user.lastName }}</h3>
        <h4>By {{ user.userAge }}</h4>
        <p>{{ user.emailAdd }}</p>
        <p>Password  {{ user.category }}</p>
        <p>Price: {{ user.price }}</p>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  props: ["id"],
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
  mounted() {
    this.$store.dispatch("getBook", this.id);
  },
};
</script>

<style>

.book-details {
  display: flex;
  /* word-break: break-all;
    word-wrap: break-word; */
  align-content: center;
  align-items: center;
  padding: auto;
  min-height: 100vh;
  text-align: center;
  margin-left: 10%;
  padding: 50px;
  width: 900px;
}

@media screen and (max-width: 900px) {
  .book-details {
    width: 700px;
  }
}
img {
  width: 800px;
  /* padding: 10px; */
}

@media screen and (max-width: 700px) {
  .book-details {
    width: 600px;
  }
  img {
    width: 500px;
  }
}
@media screen and (max-width: 500px) {
  .book-details {
    margin-left: 0%;
    width: 450px;
  }
  img {
    width: 300px;
  }
}
@media screen and (max-width: 300px) {
  .book-details {
    margin-left: 0%;
    width: 250px;
    word-break: break-all;
    word-wrap: break-word;
  }
  img {
    width: 200px;
  }
}
main {
  background-color: #123f92;
}

#addCart {
  color: #100f0f;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #123f92 !important;
  background-color: #fff;
}
</style>