<template>
    <!-- Navigation and promo -->
    <h1>Admin Dashboard</h1>
    <!-- Admin Navigation -->
    <div>
        <ul class="nav justify-content-center nav-tabs">
            <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page">Users</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link">Menu</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link" >Reservations</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link disabled" aria-disabled="true">Orders</router-link>
            </li>
        </ul>
    </div>

    <!-- Current Table -->
    <section>
        <div>
            <router-link :to="{name: 'Create'}" class="button is-success mt-5"> Add New </router-link>
            <table class="table is-striped is-bordered mt-2 is-fullwidth">
                <thead>
                    <tr>
                        <th> Dish Name </th>
                        <th> Amount </th>
                        <th> category </th>
                        <th class="has-text-centered"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dish in dishes" :key="dish.prodID">
                        <td>{{ dish.prodName }}</td>
                        <td> {{ dish.amount }}</td>
                        <td> {{ dish.category }}</td>
                        <td class="has-text-centered">
                            <router-link :to=" { name: 'Edit', params: {id: dish.prodID}}" class="button is-info is-small"> Edit </router-link>
                            <a class="button is-danger is-small" @click="deleteProduct(prod.prodID)"> Delete </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>


</template>

<script>
    // Import axios
    import axios from 'axios';

export default {
  components: {},
  computed: {
    dishes() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
            // Delete product
        async  deleteProduct(id) {
            try{
                await axios.delete(`http://localhost:5000/products/${id}`);
                this.FetchProduct();
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>