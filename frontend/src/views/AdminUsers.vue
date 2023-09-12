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
            <!-- <router-link :to="{name: 'Create'}" class="button is-success mt-5"> Add New </router-link> -->

            <!-- Start of table -->
            <table class="table is-striped is-bordered mt-2 is-fullwidth">
                <thead>
                    <tr>
                        <th> Profile </th>
                        <th> User Full Name </th>
                        <th> Birth </th>
                        <th> Role </th>
                        <th> Email </th>
                        <th class="has-text-centered"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.userID">
                        <td>{{ user.firstName }} {{ user.lastName }}</td>
                        <td>R {{ user.amount }}</td>
                        <td> {{ user.category }}</td>
                        <td>R {{ user.amount }}</td>
                        <td> {{ user.category }}</td>
                        <td class="has-text-centered">
                                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${editModal}`+`${user.userID}`">
                            Edit
                        </button>

                            <!-- Modal -->
                            <div class="modal fade" :id="`${editModal}`+`${user.userID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Item</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <editUser :UserData="user"/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        <button type="submit" class="btn btn-success">Save</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <a class="button is-danger is-small" @click="deleteUser(user.userID)"> Delete </a>
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
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new user</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <newUser />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                        <button type="submit" class="btn btn-success">Save</button>
                    </div>
                    </div>
                </div>
            </div>
            <br>

<Footer/>

</template>

<script>
// import newUser from "@/components/AddItem.vue";
// import editUser from "@/components/EditDish.vue";
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
    // newUser,
    // editUser
  },  

  data() {
    return {
        editModal: 'userModal'
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    
    this.$store.dispatch("fetchUsers");
  },

  methods: { 
            // Delete product
        async  deleteUser(id) {
            try{
                await axios.delete(`http://localhost:5000/user/${id}`);
                this.$store.dispatch("fetchUsers");
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