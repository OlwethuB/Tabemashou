import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
import router from "@/router";
import { useCookies } from "vue3-cookies";
import authUser from "@/services/AuthenticateUser";
const Api = "https://tabemashou.onrender.com/";
const { cookies } = useCookies();
import spinner from "@/components/Spinner.vue"

export default createStore({
  state: {
    users: null,
    user: null,
    // menu
    products: null,
    breakfast: null,
    tisers: null,
    main: null,
    dessert: null,
    product: null,
    //
    reservations: null,
    reservation: null,
    last: null,
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
    setBreakfast(state, breakfast) {
      state.breakfast = breakfast;
    },
    setTisers(state, tisers) {
      state.tisers = tisers;
    },
    setMains(state, main) {
      state.main = main;
    },
    setDesserts(state, dessert) {
      state.dessert = dessert;
    },
    setBookings(state, reservations) {
      state.reservations = reservations;
    },
    addBooking(state, reservation) {
      state.reservation = reservation;
    },
    editBooking(state, reservation) {
      state.reservation = reservation;
    },
    delBooking(state, reservation) {
      state.reservation = reservation;
    },
    setBooking(state, reservation) {
      state.reservation = reservation;
    },
    setLast(state, last) {
      state.last = last;
    },
  },
  actions: {
    // Login and Register
    async login(context, payload) {
      try {
        const { msg, token, result } = (
          await axios.post(`${Api}login`, payload)
        ).data;
        if (result) {
          context.commit("setUser", { result, msg });
          cookies.set("LegitUser", { token, msg, result });
          authUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back ${result?.firstName} 
            ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({ name: "home" });
        } else {
          sweet({
            title: "Error",
            text: msg,
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async register(context, payload) {
      try {
        const { msg } = (await axios.post(`${Api}register`, payload)).data;
        if (msg) {
          sweet({
            title: "Registration",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          context.dispatch("fetchUsers");
          router.push({ name: "login" });
        } else {
          sweet({
            title: "Error",
            text: "Make sure you are using the correct path or route",
            icon: "error",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please contact the admin",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // Users section
    async fetchUsers(context) {
      try {
        const { results } = (await axios.get(`${Api}users`)).data;
        context.commit("setUsers", results);
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // async fetchUser(context, userID) {
    //   try {
    //     const { result } = await axios.get(`${Api}user/${userID}`).data;
    //     context.commit("setUser", result);
    //   } catch (e) {
    //     sweet({
    //       title: "Error",
    //       text: "An error occurred",
    //       icon: "error",
    //       timer: 2000,
    //     });
    //     console.error("Error getting user:", error);
    //   }
    // },
    async fetchUser(context, id) {
      const res = await axios.get(`${apiUrl}user/${id}`);
      const data = await res.data;
      context.commit("setUser", data);
    },

    // Update product
    async updateUser(context, payload) {
      try {
        const { msg } = (
          await axios.patch(`${Api}user/${payload.userID}`, payload)
        ).data;
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Update",
            text: msg,
            icon: "success",
            timer: 2000,
          });
        }
        this.$router.push("/adminUsers");
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // Delete product
    async deleteUser(context, id) {
      try {
        const { msg } = (await axios.delete(`${Api}user/${id}`)).data;
        if (msg) {
          sweet({
            title: "Remove a user",
            text: msg,
            icon: "success",
            timer: 2000,
          });
          context.dispatch("fetchUsers");
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // Products/dishes/menu section
    async fetchProducts(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}products`);
        if (data.results) {
          context.commit("setProducts", data.results);
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchBreakfast(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}breakfast`);
        if (data.results) {
          context.commit("setBreakfast", data.results);
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error getting Breakfast:", error);
      }
    },
    async fetchTisers(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}tisers`);
        if (data.results) {
          context.commit("setTisers", data.results);
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error getting Tisers:", error);
      }
    },
    async fetchMains(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}main`);
        if (data.results) {
          context.commit("setMains", data.results);
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error bieng main:", error);
      }
    },
    async fetchDesserts(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}dessert`);
        if (data.results) {
          context.commit("setDesserts", data.results);
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error bieng dessert:", error);
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
        const { data } = await axios.get(`${Api}booking/:id`);
        if (data.result) {
          bookingID.commit("setProduct", data.result);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchLastBooking(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}booking`);
        if (data.result) {
          context.commit("setLast", data.result);
          this.isLoading = false;
        }
      } catch (error) {
        console.error("Error fetching This reservation:", error);
      }
    },
  },
  components: {
    spinner,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  modules: {},
}); 