<template>
  <navigation />

  <h1>Make a reservation</h1>

  <section>
    <h2>Request a reservation</h2>
    <h4>
      To help us find the best table for you, select the preferred party size,
      date, and time of your reservation.
    </h4>

    <form @submit.prevent="createBooking">
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
          <input class="input" type="text" v-model="pepSize" id="pepSize" />
          <select name="pepSize" v-model="pepSize" id="pepSize" form="sizeF">
            <option value="one">1 person</option>
            <option value="two">2 people</option>
            <option value="three">3 people</option>
            <option value="four">4 people</option>
            <option value="five">5 people</option>
            <option value="six">6 people</option>
            <option value="seven">7 people</option>
            <option value="eight">8 people</option>
            <option value="nine">9 people</option>
            <option value="ten">10 people</option>
            <option value="eleven">11 people</option>
            <option value="twelve">12 people</option>
          </select>
        </div>
      </div>
      <div class="field row">
        <div class="col">
          <label class="label" for="date"> Date </label>
          <div class="control">
            <input class="input" type="date" v-model="date" />
          </div>
        </div>
        <div class="col">
          <label class="label" for="time"> Time </label>
          <div class="control">
            <input class="input" type="time" v-model="time" />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-create">Book</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
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
        await axios.post("http://localhost:5000/book    ", {
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
        // this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>