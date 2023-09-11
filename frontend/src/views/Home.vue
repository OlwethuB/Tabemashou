<template>
  <!-- The promo thingy... -->
  <!-- Hero section -->
  <Navigation />

  <section class="hero" id="Hero">
    <div>
      <h1>Tabemashou</h1>
      <h4>Let’s eat | 食べましょう</h4>
      <button>View more</button>
      <!-- Arrow "gif"/animation going down -->
    </div>
  </section>

  <!-- navigation section -->
  <Dashboard />

  <!-- What do you want to eat? -->
  <section>
    <h1>What do you want to eat?</h1>
    <div class="row">
      <div class="col">
        <img class="cat img" src="https://i.postimg.cc/P5W2jXJj/Break-Icon.png" alt="Breakfast" />
        <h3>Breakfast</h3>
        <button>See more</button>
      </div>
      <div class="col">
        <img class="cat img" src="https://i.postimg.cc/9fB8GmHp/Appe-Icon.png" alt="Appetisers" />
        <h3>Appetisers</h3>
        <button>See more</button>
      </div>
      <div class="col">
        <img class="cat img" src="https://i.postimg.cc/tR6r5NbJ/Main-icon.png" alt="Main meal" />
        <h3>Entrees</h3>
        <button>See more</button>
      </div>
      <div class="col">
        <img class="cat img" src="https://i.postimg.cc/hj50rhy9/Dessert-Icon.png" alt="Dessert" />
        <h3>Desserts</h3>
        <button>See more</button>
      </div>
    </div>
  </section>

  <!-- About us -->
  <section>

  </section>

  <!-- Reservation shit... -->
  <section>
    <div class="row">
      <!-- Left -->
      <div class="col">
        <img class="reserve" src="https://i.postimg.cc/PfWD0LZB/Ride-Icon.png" alt="Ride" />
        <h1>Make a reservation</h1>
        <p>Join Us for an unforgettable dining experience.</p>
      </div>
      <!-- Right -->
      <div class="col">
        <h1>Latest Events</h1>
        <div>
          <!-- events link -->
          <ul>
            <li>An event</li>
            <li>An event</li>
            <li>an event</li>
            <li>An event</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact info -->
  <section>
    <h1>Contact Us</h1>
   <!-- Contact component -->
  </section>

  <section>
    <h2>Follow us on instagram <a href="">@tabemashou</a></h2>
    <div>
      <!-- picture carousel I think... -->
      <br>
    </div>
  </section>

  <!-- Footer -->
<Footer />

 </template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "HomeView",
  Navigation,
  Footer,
  Dashboard,
  components: {
    HelloWorld,
    Navigation,
    Footer,
    Dashboard,
  },
};
</script>

<style></style>
