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
      <h1 class="title animate__animated animate__pulse animate__slow animate__delay-1 s">Tabemashou</h1>
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
          <img src="https://i.postimg.cc/4NqxPYHm/Capstone-Logo.png" alt="logo" class="logo" loading="eager"/>
        </router-link>
        <!-- center stuff -->
        <ul class="nav nav-underline m-auto justify-content-center">
          <li class="nav-item">
            <router-link to="/home" id="links" class="nav-link active" aria-current="page" >
              <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="click" colors="primary:#fff" style="width: 25px; height: 25px">
              </lord-icon>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/about"  @click="scrollToSection('#about')"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/menu"
              >Menu</router-link
            >
          </li>
          <li class="nav-item">
            <router-link id="links" class="nav-link" to="/contact"  @click="scrollToSection('#contact')"
              >Contact</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              id="links"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Other</a
            >
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/profile"
                  >Profile</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/book"
                  >Book now</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/confirm"
                  >Confirmation page</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/adminMenu"
                  >Admin</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <!-- Right end -->
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="links nav-link" id="links" href="/register">Register |</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="links" href="/">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/logout" id="links"
              ><lord-icon src="https://cdn.lordicon.com/moscwhoj.json" trigger="click" colors="primary:#000000,secondary:#1663c7" style="width: 35px; height: 35px"
              >
              </lord-icon
            ></a>
          </li>
        </ul>
      </div>
    </nav>
      <router-link to="#about" class="hidden" />
      <router-link to="#contact" class="hidden" />
  </header>
  <!-- Dashboard -->

  <!-- What do you want to eat? -->
  <section>
    <br>
    <h1>What do you want to eat?</h1>
    <div class="row">
      <br>
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
    </div>
    <br>
    <a href="/menu" class="btn btn-secondary btn-sm" style="width: 20%;">Check menu</a>
    <br>
  </section>

  <!-- About us -->
  <section id="about">
    <AboutComp/>
  </section>

  <!-- Reservation eish... -->
  <section>
    <div class="row eish">
      <!-- Left -->
      <div class="col resC">
        <img class="reserve" src="https://i.postimg.cc/PfWD0LZB/Ride-Icon.png" alt="Ride" style="width: 200px; margin: 10px" />
        <h1>Make a reservation</h1>
        <p>Join Us for an unforgettable dining experience.</p>
      </div>
    </div>
  </section>

  <!-- Contact info -->
  <section id="contact">
    <h1>Contact Us</h1>
   <!-- Contact component -->
   <ContactComp/>
  </section>

  <section>
    <h2>Follow us on instagram <a href="https://www.instagram.com/" target="_blank">@tabemashou</a></h2>
    <div>
      <!-- picture carousel I think... -->
      <!-- <CaraComp/> -->
      <br>
    </div>
  </section>

  <!-- Footer -->
<footerComp/>
 </template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Navbar.vue";
import footerComp from "@/components/Footer.vue";
import AboutComp from "@/views/AboutUs.vue";
import ContactComp from "@/views/ContactForm.vue";

export default {
  name: "HomeView",
  Navigation,
  footerComp,
  AboutComp,
  ContactComp,
  components: {
    HelloWorld,
    Navigation,
    footerComp,
    AboutComp,
    ContactComp,
  },
    methods: {
    scrollToSection(section) {
      const el = document.querySelector(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
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
  /* opacity: 0.5; */
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
    .hero {
      background-image: url(https://i.postimg.cc/Jhc7RK6k/Screenshot-2023-09-07-092939.png);
      height: 25%;
      /* min-height: 100vh; */
      text-align: center;
      width: 100%;
      color: #495057;
      font-weight: 800;
      padding: 15%;
      /* font-family: Rubik; */
      overflow: hidden;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .title{
        font-size: 80px;
    }
  @media (max-width: 750px) {
    .title{
        font-size: 50px;
    }
}

  /* Hero Arrow Animation */  
  .arrows {
  width: 60px;
  height: 72px;
  position: absolute;
  left: 50%;
  margin-left: -30px;
  bottom: 100px;
}
.arrows path {
  stroke: #00284E;
  fill: transparent;
  stroke-width: 3px;  
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
@-webkit-keyframes arrow /*  和  */
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}
.arrows path.a1 {
  animation-delay:-1s;
  -webkit-animation-delay:-1s; /*  和  */
}
.arrows path.a2 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; /*  和  */
}
.arrows path.a3 { 
  animation-delay:0s;
  -webkit-animation-delay:0s; /*  和  */
}

/* What do you want to eat */
.cat-img {
  width: 25%
}
@media screen and(max-width: 700px) {
  
}

.eish .col{
  border: 3px solid #807978;
background: #ffffff;
height: 500px;
}
eish img {
  width: 200px;
}
</style>
