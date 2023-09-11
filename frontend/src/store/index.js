import { createStore } from "vuex";
import axios from "axios";
const Api = "http://localhost:5000/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    reservations: null,
    reservation: null,
  },
  getters: {},  
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setBookings(state, reservations) {
      state.reservations = reservations;
    },
    setBooking(state, reservation) {
      state.reservation = reservation;
    },
  },
  actions: {
    // Users section
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${Api}users`);
        if (data.results) {
          context.commit("setUsers", data.results);
        }
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
    },
    async fetchUser(userID) {
      try {
        const { data } = await axios.get(`${Api}user/:id`);
        if (data.result) {
          userID.commit("setUser", data.result);
        }
      } catch (error) {
        console.error(error);
      }
    },

    // Products/dishes/menu section
    async fetchProducts(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}products`);
        if (data.results) {
          context.commit("setProducts", data.results);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchProduct(productId) {
      try {
        const { data } = await axios.get(`${Api}products/:id`);
        if (data.result) {
          productId.commit("setProduct", data.result);
        }
      } catch (error) {
        console.error(error);
      }
    },

    // Reservation sector
    async fetchReservations(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}bookings`);
        if (data.results) {
          context.commit("setBookings", data.results);
        }
      } catch (error) {
        console.error("Error fetching Reservations:", error);
      }
    },
    async fetchReservation(bookingID) {
      try {
        const { data } = await axios.get(`${Api}bookings/:id`);
        if (data.result) {
          bookingID.commit("setProduct", data.result);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
