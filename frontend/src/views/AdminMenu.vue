<template>
    <!-- Navigation and promo -->
    <navigation/>
    <br>
    <h1>Admin Dashboard</h1>
    <!-- Admin Navigation -->
    <br>
    <div>
        <ul class="nav justify-content-center nav-tabs">
            <li class="nav-item">
                <router-link to="/adminUsers" class="nav-link">Users</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/adminMenu" class="nav-link active" aria-current="page">Menu</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/adminRes" class="nav-link" >Reservations</router-link>
            </li>
        </ul>
    </div>

        <div class="controls">
      <div class="sort-filter">
        <label for="sortBy">Sort By:</label>
        <select v-model="sortBy" id="sortBy" class="form-select">
          <option value="prodName">Name</option>
          <option value="amount">Price</option>
          <option value="category">category</option>
        </select>
      </div>
      <div class="search">
        <label for="searchTerm">Search:</label>
        <input
          v-model="searchTerm"
          id="searchTerm"
          type="text"
          class="form-control"
        />
      </div>
    </div>

    <!-- Current Table -->
    <section>
        <div>
            <!-- <router-link :to="{name: 'Create'}" class="button is-success mt-5"> Add New </router-link> -->

            <!-- Start of table -->
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
                        <td>R {{ dish.amount }}</td>
                        <td> {{ dish.category }}</td>
                        <td class="has-text-centered">
                                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${editModal}`+`${dish.prodID}`">
                            Edit
                        </button> 

                            <!-- Modal -->
                            <div class="modal fade" :id="`${editModal}`+`${dish.prodID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Item</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <editProduct :productData="dish"/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <a class="button is-danger is-small" @click="deleteProduct(dish.prodID)"> Delete </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
                <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add New
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new menu item</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <newProduct />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                    </div>
                    </div>
                </div>
            </div>
            <br>
<spinner/>
<Footer/>

</template>

<script>
import newProduct from "@/components/AddItem.vue";
import editProduct from "@/components/EditDish.vue";
import spinner from "@/components/Spinner.vue";
import Navigation from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
    // Import axios
import axios from 'axios';



export default {
//   Navigation,
//   Footer,
//   newProduct,
//   editProduct,
  components: {
    Navigation,
    Footer,
    newProduct,
    editProduct,
    spinner
  },  

  data() {
      return {
          editModal: 'productModal',
      dishes: [],
      sortBy: "prodName",
      searchTerm: "",
      isLoading: false,
    };
  },
  computed: {
      dishes() {
        return this.$store.state.products;
      },
    filteredProducts() {
      let filtered = [...this.dishes];

      if (this.searchTerm) {
        const searchTermLC = this.searchTerm.toLowerCase();
        filtered = filtered.filter((dish) =>
          dish.prodName.toLowerCase().includes(searchTermLC)
        );
      }

      filtered.sort((a, b) => a[this.sortBy].localeCompare(b[this.sortBy]));

      return filtered;
    },
  },


  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  methods: { 
            // Delete product
        async  deleteProduct(id) {
            try{
                await axios.delete(`https://tabemashou.onrender.com/products/${id}`);
                this.$store.dispatch("fetchProducts");
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style>
.table{
    width: 80%;
    overflow-x: scroll;
}

</style> 