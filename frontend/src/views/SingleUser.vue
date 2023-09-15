<template>
    <!-- Navigation and promo -->
<Navigation/>
  <!-- Current Table -->
  <section>
      <div style="overflow-x:auto;">
          <!-- Start of table -->
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
              <thead>
                <tr>
                  <th colspan="3">Which user are you ?</th>
                </tr>
                  <tr>
                      <th> Profile </th>
                      <th> User Full Name </th>
                      <th class="has-text-centered"> . </th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="user in users" :key="user.userID">
                      <td> <img class="Up" :src="user.userProfile" :alt="user.firstName" /></td>
                      <td>{{ user.firstName }} {{ user.lastName }}</td>
                      <td class="has-text-centered">
                                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#${editModal}`+`${user.userID}`">
                          View Profile
                      </button>

                          <!-- Modal -->
                          <div class="modal fade" :id="`${editModal}`+`${user.userID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                  <div class="modal-content">
                                  <div class="modal-header">
                                      <h1 class="modal-title fs-5" id="exampleModalLabel">Type to update user</h1>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                      <editUser :UserData="user"/>
                                  </div>
                                  <div class="modal-footer">
                                    <a class="button is-danger is-small" @click="deleteUser(user.userID)"> Delete Account </a>
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                  </div>
                                  </div>
                              </div>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </section>
          <br>

<Footer/>
</template>


<style>
.table{
  width: 80%;
  overflow-x: scroll;
}

.Up{
  width: 30%;
  height: 30%
}

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


<script>
import newUser from "@/components/AddUser.vue";
import editUser from "@/components/EditUser.vue";
import Navigation from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
  // Import axios
import axios from 'axios';



export default {
components: {
  Navigation,
  Footer,
  newUser,
  editUser
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
  // this.$store.dispatch("deleteUser", this.id);
},

methods: { 
          // Update product
    async updateUser(context, payload) {
      try {
        const { msg } = (
          await axios.patch(`https://tabemashou.onrender.com/user/${payload.userID}`, payload)
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
        this.$router.push("/profile");
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
      async  deleteUser(id) {
          try{
              await axios.delete(`https://tabemashou.onrender.com/user/${id}`);
              this.$store.dispatch("fetchUsers");
          } catch (err) {
              console.log(err);
          }
      },
  },
};
</script>
