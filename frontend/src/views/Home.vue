<template>
  <!-- The promo thingy... -->
  <!-- Hero section -->
  <Navigation/>

<section>
<div>
  <h1>Tabemashou</h1>
  <h4>Let’s eat  |     食べましょう</h4>
  <button><router-link> View more </router-link></button>
  <!-- Arrow "gif"/animation going down -->
</div>
</section>

<!-- navigation section -->
<Dashboard/>

<!-- What do you want to eat? -->
<section>
<h1>What do you want to eat?</h1>
<div class="row">
  <div class="col">
    <img class="cat img" src="" alt="" >
    <h3> Food Category</h3>
    <button>See more</button>
  </div>
  <div class="col">
    <img class="cat img" src="" alt="" >
    <h3> Food Category</h3>
    <button>See more</button>
  </div>
  <div class="col">
    <img class="cat img" src="" alt="" >
    <h3> Food Category</h3>
    <button>See more</button>
  </div>
  <div class="col">
    <img class="cat img" src="" alt="" >
    <h3> Food Category</h3>
    <button>See more</button>
  </div>
</div>
</section>

<!-- About us -->
<section>
<div>
  <!-- health and stuff picture in corner -->
  <img class="healthy" src="" alt="">
<h1> About Us</h1>
<h3>Fine dining. Elevated experience. unforgettable memories. </h3>
<h3> We bring you the best of the best in fine dining. </h3>
<p>At Tabemashou, we believe that fine dining should be accessible to everyone. That’s why we’ve created an elevated experience that combines exquisite cuisine, impeccable service, and a cosy atmosphere. our chefs use only the freshest and finest ingredients to craft our dishes, and our staff is dedicated to making your dining experience unforgettable. Come dine with us and experience the best of fine dining. </p>
</div>

<!-- Meet the crew -->
<div> 
  <h1>Meet the crew</h1>
  <div class="row crewBox">
    <div class="col crew">
      <img src="" alt="">
      <h1>John Doe</h1>
      <h3>What he do?</h3>
    </div>
    <div class="col crew">
      <img src="" alt="">
      <h1>John Doe</h1>
      <h3>What he do?</h3>
    </div>
    <div class="col crew">
      <img src="" alt="">
      <h1>John Doe</h1>
      <h3>What he do?</h3>
    </div>
    <div class="col crew">
      <img src="" alt="">
      <h1>John Doe</h1>
      <h3>What he do?</h3>
    </div>
    <div class="col crew">
      <img src="" alt="">
      <h1>John Doe</h1>
      <h3>What he do?</h3>
    </div>
    <div class="col crew">
      <img src="" alt="">
      <h1>John Doe</h1>
      <h3>What he do?</h3>
    </div>
  </div>
</div>
</section>

<!-- Reservation shit... -->
<section>
  <!-- Left -->
  <div>
    <img class="reserve" src="" alt="">
    <h1>Make a reservation</h1>
    <p>
      Join Us for an unforgettable dining experience.
    </p>
    <button><router-link>Book now</router-link></button>
  </div>
  <!-- Right -->
  <div>
    <h1> Latest Events </h1>
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
</section>

<!-- Contact info -->
<section>
  <h1>Contact Us</h1>
  <div>
    <h2>Send us a message</h2>
    <!-- form box
    1. Name
    2. Email
    3. Phone number (optional)
    4. Message
    Send button, clear
    -->
  </div>
</section>

<section>
  <h2>Follow us on instagram  <a href="">@tabemashou</a></h2>
  <div>
    <!-- picture carousel I think... -->
  </div>
</section>

<!-- Footer -->
<Footer/>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'HomeView',Navigation, Footer, Dashboard,
  components: {
    HelloWorld,
    Navigation,
    Footer,
    Dashboard
  }
}
</script>

<style>
 body{
  background-color: #0281C5;
 }
</style>
