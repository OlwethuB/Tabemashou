<template>
  <!-- The promo thingy... -->
  <div id="PromoHead" class="promo">
    <router-link class="navbar-brand" to="/">
      <h4>Book now | Table specials</h4>
    </router-link>
  </div>

  <!-- Hero section -->
  <section class="hero" id="Hero">
    <div>
      <h1 class="title animate__animated animate__pulse animate__slower animate__delay-3s">Tabemashou</h1>
      <h4 class=" animate__animated animate__pulse animate__slow animate_delay-3s">Let’s eat | 食べましょう</h4>
      <p>View more</p>
      <!-- Arrow "gif"/animation going down -->
      <svg class="arrows">
        <path class="a1" d="M0 0 L30 32 L60 0"></path>
        <path class="a2" d="M0 20 L30 52 L60 20"></path>
        <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  </section>

  <!-- navigation section -->
  <header class="sticky-top">
    <nav id="header" class="navbar">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img
            src="https://i.postimg.cc/Z5JfwqLW/logo.jpg"
            alt="logo"
            class="logo"
            loading="eager"
          />
        </router-link>
        <!-- center stuff -->
        <ul class="nav nav-underline m-auto justify-content-center">
          <li class="nav-item">
            <router-link
              to="/"
              id="links"
              class="nav-link active"
              aria-current="page"
              ><lord-icon
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="click"
                colors="primary:#fff"
                style="width: 25px; height: 25px"
              ></lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/about"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/menu"
              >Menu</router-link
            >
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/contact"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Other</a
            >
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/adminMenu"
                  >Admin</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/book"
                  >Book now</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/confirm"
                  >Something else here</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link
                  class="dropdown-item disabled"
                  aria-disabled="true"
                  to="/singleUser"
                  >Profile</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right end -->
        <ul class="nav justify-content-end log">
          <li class="nav-item log">
            <a class="nav-link" href="/register">Register |</a>
          </li>
          <li class="nav-item log">
            <a class="nav-link" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- <Dashboard /> -->

  <!-- What do you want to eat? -->
  <section>
    <h1>What do you want to eat?</h1>
    <div class="row">
      <div class="col">
        <img class="cat-img" src="https://i.postimg.cc/P5W2jXJj/Break-Icon.png" alt="Breakfast" />
        <h3>Breakfast</h3>
      </div>
      <div class="col">
        <img class="cat-img" src="https://i.postimg.cc/9fB8GmHp/Appe-Icon.png" alt="Appetisers" />
        <h3>Appetisers</h3>
      </div>
      <div class="col">
        <img class="cat-img" src="https://i.postimg.cc/tR6r5NbJ/Main-icon.png" alt="Main meal" />
        <h3>Entrees</h3>
      </div>
      <div class="col">
        <img class="cat-img" src="https://i.postimg.cc/hj50rhy9/Dessert-Icon.png" alt="Dessert" />
        <h3>Desserts</h3>
      </div>
      <a href="/menu" class="btn btn-secondary">Check menu</a>
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
<footerComp/>
<br>
 </template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Navbar.vue";
import footerComp from "@/components/Footer.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "HomeView",
  Navigation,
  footerComp,
  Dashboard,
  components: {
    HelloWorld,
    Navigation,
    footerComp,
    Dashboard,
  },
};
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap");

/* Promo part */
.promo {
  text-align: center;
  background-color: #00284e;
  color: #adb5bd;
  padding: 2px;
}

/* Navigation */
header {
  width: 100%;
  background-color: #0281c5;
  opacity: 0.5;
}

@media (max-width: 768px) {
  header {
    height: auto;
    margin-bottom: 100px;
  }
}

.log {
  color: #e9ecef;
}

.logo {
  border-radius: 50%;
  width: 55px;
  height: 50px;
  background-size: contain;
}

.nav-link,
#links {
  color: #fff;
  font-size: 20px;
  margin: 2px;
}

.nav-link:hover,
#links:hover {
  border-radius: 4px;
  color: #00284e;
  margin: 3px;
}

@media (max-width: 862px) {
  .nav-link,
  #links {
    font-size: 20px;
    margin: 2px;
  }
  .nav-link:hover,
  #links:hover {
    border-radius: 2px;
    border: 2px solid #123f92;
    margin: 2px;
  }
}

@media (max-width: 662px) {
  .nav-link,
  #links {
    font-size: 12px;
    margin: 2px;
  }
  .nav-link:hover,
  #links:hover {
    border-radius: 2px;
    border: 2px solid #123f92;
    margin: 2px;
  }
}

      /* Intro section */
    .intro {
      background-image: url(https://i.postimg.cc/CLmdXPgw/Bkg-lndscp-1.png);
      height: 25%;
      text-align: center;
      width: 100%;
      color: #fff;
      padding: 15%;
      font-family: Rubik;
      overflow: hidden;
      background-attachment: fixed;
    }
    .title{
        font-size: 50px;
    }

  /* Hero Arrow Animation */  
  .arrows {
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 20px;
}
.arrows path {
  stroke: #2994D1;
  fill: transparent;
  stroke-width: 1px;  
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite; 
}
@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
.arrows path.a1 {
  animation-delay:-1s;
  -webkit-animation-delay:-1s; /* Safari 和 Chrome */
}
.arrows path.a2 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}
.arrows path.a3 { 
  animation-delay:0s;
  -webkit-animation-delay:0s; /* Safari 和 Chrome */
}

/* What do you want to eat */
.cat-img {
  width: 25%
}
@media screen and(max-width: 700px) {
  
}
</style>
