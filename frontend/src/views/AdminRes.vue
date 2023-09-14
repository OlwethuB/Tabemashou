<template>
    <!-- Navigation and promo -->
    <h1>Admin Dashboard</h1>
    <!-- Admin Navigation --> 
    <div>
        <ul class="nav justify-content-center nav-tabs">
            <li class="nav-item">
                <router-link to="/adminUsers" class="nav-link">Users</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/adminMenu" class="nav-link">Menu</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/adminRes" class="nav-link active" aria-current="page">Reservations</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link disabled" aria-disabled="true">Orders</router-link>
            </li>
        </ul>
    </div>

    <!-- Current Table -->
    <section>
        <div  style="overflow-x:auto;">
            <!-- <router-link :to="{name: 'Create'}" class="button is-success mt-5"> Add New </router-link> -->

            <!-- Start of table -->
            <table class="table is-striped is-bordered mt-2 is-fullwidth">
                <thead>
                    <tr>
                        <th scope="col"> Order Date </th>
                        <th scope="col"> Reservation Name </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Phone </th>
                        <th scope="col"> Party size </th>
                        <th scope="col"> Date </th>
                        <th scope="col"> Time </th>
                        <th scope="col" class="has-text-centered"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reservation in reservations" :key="reservation.bookingID">
                        <td>{{ reservation.orderDate }}</td>
                        <td>{{ reservation.name }}</td>
                        <td>{{ reservation.email }}</td>
                        <td>{{ reservation.phone }}</td>
                        <td>{{ reservation.pepSize }}</td>
                        <td>{{ reservation.date }}</td>
                        <td>{{ reservation.time }}</td>
                        <td class="has-text-centered">
                                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${editModal}`+`${reservation.bookingID}`">
                            Edit
                        </button>

                            <!-- Modal -->
                            <div class="modal fade"  :id="`${editModal}`+`${reservation.bookingID}`"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Item</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <editBooking :bookingData="reservation"/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        <button type="submit" class="btn btn-success">Save</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <a class="btn btn-danger btn-small" @click="deleteBooking(reservation.bookingID)"> Delete </a>
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
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new reservation item</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <newReservation />
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
import newReservation from "@/components/AddRes.vue";
import editBooking from "@/components/EditRes.vue";
import Navigation from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
    // Import axios
import axios from 'axios';



export default {
  components: {
    Navigation,
    Footer,
    newReservation,
    editBooking
  },  


  data() {
    return {
        editModal: 'BookingModal'
    };
  },
  computed: {
    reservations() {
      return this.$store.state.reservations;
    },
  },
  mounted() {
    
    this.$store.dispatch("fetchReservations");
  },

  methods: { 
            // Delete product
        async  deleteBooking(id) {
            try{
                await axios.delete(`http://localhost:5000/booking/${id}`);
                this.$store.dispatch("fetchReservations");
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