import { createStore } from "vuex";
import axios from "axios";
import Swal from 'sweetalert2/src/sweetalert2.js'

const Api = "http://localhost:5000/";

export default createStore({
  state: {
    login: null,
    register: null,
    users: null,
    user: null,
    products: null,
    breakfast: null,
    tisers: null,
    main: null,
    dessert: null,
    product: null,
    reservations: null,
    reservation: null,
    last: null,
  },
  getters: {},  
  mutations: {
    setLogin(state, login) {
      state.login = login;
    },
    setRegister(state, register) {
      state.register = register;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
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
    setProduct(state, product) {
      state.product = product;
    },
    setBookings(state, reservations) {
      state.reservations = reservations;
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
      async register() {
        // Send a request to the Node.js API to register the user
        axios
          .post("http://localhost:5000/register", {
            firstName: this.firstName,
            lastName: this.lastName,
            userAge: this.userAge,
            emailAdd: this.emailAdd,
            userPass: this.userPass,
            userProfile: this.userProfile,
          })
          .then((response) => {
            // Handle successful registration
            alert("User Registered In!");
            Swal.fire("Registed", "Welcome new User!", "success");
            console.log(response.data);
            // Redirect the user to the login page
            window.location.href = "/login";
          })
          .catch((error) => {
            // Handle registration error
            alert("Error registering, the email is probably already used. try again in a minute (check console!)");
            console.error(error);
          });
      },      


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
    // async fetchUser(userID) {
    //   try {
    //     const { data } = await axios.get(`${Api}user/1`);
    //     console.log(data.results.userID)
    //     if (data.result) {
    //       userID.commit("setUser", data.result);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    fetchUser: async (context, id) => {
      fetch(`${Api}user/+ ${id}`)
      .then((res) => res.json())
      .then((res) => console.log(res.results.userID))
      .then((user) => context.commit("setUser", user))
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
    async fetchBreakfast(context) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${Api}breakfast`);
        if (data.results) {
          context.commit("setBreakfast", data.results);
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
        }
      } catch (error) {
        console.error("Error fetching This reservation:", error);
      }
    },
  },
  modules: {},
});
