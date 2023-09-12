<template>
  <form @submit.prevent="createProduct">
    <label for="prodName">Product Name:</label>
    <input v-model="prodName" id="prodName" />

    <label for="description">Description:</label>
    <input v-model="description" id="description" />

    <label for="amount">Price:</label>
    <input v-model="amount" id="amount" />

    <label for="category">Category:</label>
    <select name="category" v-model="category" id="category" form="categoryF">
      <option value="Breakfast">Breakfast</option>
      <option value="Appetizer">Appetiser</option>
      <option value="Main meal">Main meal</option>
      <option value="Dessert">Dessert</option>
    </select>

    <label for="prodUrl">Image (Url):</label>
    <input v-model="prodUrl" id="amount" />

    <button type="submit" class="btn btn-create">Create Product</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prodName: "",
      description: "",
      amount: "",
      category: "",
      prodUrl: "",
      // Initialize other fields
    };
  },
  methods: {
    async createProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          prodName: this.prodName,
          description: this.description,
          amount: this.amount,
          category: this.category,
          prodUrl: this.prodUrl,
        });
        this.prodName = " ";
        this.description = " ";
        this.amount = " ";
        this.category = " ";
        this.prodUrl = " ";
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

