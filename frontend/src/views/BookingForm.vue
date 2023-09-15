<template>
<main class="BB">

  <navigation />
<br>
  <h1>Make a reservation</h1>
  <section>
    <form class="boo" @submit.prevent="createBooking"> 
    <h2>Request a reservation</h2>
    <h4>
      To help us find the best table for you, select the preferred party size,
      date, and time of your reservation.
    </h4>
    <br>
      <div class="field">
        <label class="label" for="name"> Your Name </label>
        <div class="control">
          <input class="input" type="text" v-model="name" id="name" />
        </div>
      </div>
      <div class="field">
        <label class="label" for="email"> Email </label>
        <div class="control">
          <input class="input" type="email" v-model="email" id="email" />
        </div>
      </div>
      <div class="field">
        <label class="label" for="phone"> Phone number </label>
        <div class="control">
          <input class="input" type="tel" v-model="phone" id="phone" />
        </div>
      </div>
      <div class="field">
        <label class="label" for="pepSize"> Party size </label>
        <div class="control">
          <select name="pepSize" v-model="pepSize" id="pepSize" form="sizeF">
            <option value="1 person">1 person</option>
            <option value="2 people">2 people</option>
            <option value="3 people">3 people</option>
            <option value="4 people">4 people</option>
            <option value="5 people">5 people</option>
            <option value="6 people">6 people</option>
            <option value="7 people">7 people</option>
            <option value="8 people">8 people</option>
            <option value="9 people">9 people</option>
            <option value="10 peps">10 people</option>
            <option value="11 peps">11 people</option>
            <option value="12 peps">12 people</option>
          </select>
        </div>
      </div>
      <div class="field row">
        <div class="col">
          <label class="label" for="date"> Date </label>
          <br>
          <input class="input" type="date" v-model="date" />
        </div>
        <div class="col">
          <label class="label" for="time"> Time </label>
          <br>
            <input class="input" type="time" v-model="time" />
        </div>
      </div>

      <button type="submit" class="btn btn-create">Reserve now</button>
    </form>
  </section>
  <footerComp/>
  </main>
</template>

<script>
import axios from "axios";
    import navigation from "@/components/Navbar.vue";
    import footerComp from "@/components/Footer.vue";

export default {
  components: {
    navigation,
    footerComp,
  },
  data() {
    return {
        name: "",
        email: "",
        phone: "",
        pepSize: "",
        date: "",
        time: "",
      // Initialize other fields
    };
  },
  methods: {
    async createBooking() {
      try {
        await axios.post("https://tabemashou.onrender.com/book", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            pepSize: this.pepSize,
            date: this.date,
            time: this.time,
        });
        this.name = " ";
        this.email = " ";
        this.phone = " ";
        this.pepSize = " ";
        this.date = " ";
        this.time = " ";
        alert("Booked !👍")
        this.$router.push("/confirm");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.BB{
    background-color: #044B68;
    color: #fff;
}
.boo {
  border: 3px solid #000000;
  background-color: #fff;
  width: 80%;
  padding: 0;
  margin: 10%;
  color: #000000;
}
</style>