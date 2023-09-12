<template>
  <navigation />
  <br />
  <h1>Thank you for booking !</h1>

  <section>
    <h2>
      A confirmation and details of your reservation will be sent to your email.
    </h2>
    <br />
    <div>
      <h2>Reservation details</h2>
      <div v-for="book in booking" :key="book.bookingID" class="book-details">
        <div>
          <div>
            <h3>
              Booking by <b>{{ book.name }}</b>
            </h3>
          </div>
          <div>
            <h4>Contacts:</h4>
            <p>{{ book.email }}</p>
            <p>{{ book.phone }}</p>
          </div>
          <div>
            <p>{{ book.date }}</p>
            <p>{{ book.time }}</p>
          </div>
          <p>{{ book.pepSize }}</p>
        </div>
        <!-- <div v-else><b>Loading...</b></div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// import { ref } from "vue";
</script>
<script>
export default {
  // props: ["id"],
  computed: {
    booking() {
      return this.$store.state.last;
    },
  },
  mounted() {
    this.$store.dispatch("fetchLastBooking");
  },
};
</script>

<style scoped>
.book-details {
  text-align: center;
  padding-top: 0;
  padding-left: 15%;
  justify-content: center;
}
</style>
