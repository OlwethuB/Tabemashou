<template>
  <!-- The promo thingy... -->
  <!-- Hero section -->
  <Navigation />

  <section>
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
        <img class="cat img" src="" alt="" />
        <h3>Food Category</h3>
        <button>See more</button>
      </div>
      <div class="col">
        <img class="cat img" src="" alt="" />
        <h3>Food Category</h3>
        <button>See more</button>
      </div>
      <div class="col">
        <img class="cat img" src="" alt="" />
        <h3>Food Category</h3>
        <button>See more</button>
      </div>
      <div class="col">
        <img class="cat img" src="" alt="" />
        <h3>Food Category</h3>
        <button>See more</button>
      </div>
    </div>
  </section>

  <!-- About us -->
  <section>
    <div>
      <!-- health and stuff picture in corner -->
      <img class="healthy" src="" alt="" />
      <h1>About Us</h1>
      <h3>Fine dining. Elevated experience. unforgettable memories.</h3>
      <h3>We bring you the best of the best in fine dining.</h3>
      <p>
        At Tabemashou, we believe that fine dining should be accessible to
        everyone. That’s why we’ve created an elevated experience that combines
        exquisite cuisine, impeccable service, and a cosy atmosphere. our chefs
        use only the freshest and finest ingredients to craft our dishes, and
        our staff is dedicated to making your dining experience unforgettable.
        Come dine with us and experience the best of fine dining.
      </p>
    </div>

    <!-- Meet the crew -->
    <div>
      <h1>Meet the crew</h1>
      <div class="row crewBox">
        <div class="col crew">
          <img src="" alt="" />
          <h1>John Doe</h1>
          <h3>What he do?</h3>
        </div>
        <div class="col crew">
          <img src="" alt="" />
          <h1>John Doe</h1>
          <h3>What he do?</h3>
        </div>
        <div class="col crew">
          <img src="" alt="" />
          <h1>John Doe</h1>
          <h3>What he do?</h3>
        </div>
        <div class="row crewBox">
          <div class="col crew">
            <img src="" alt="" />
            <h1>John Doe</h1>
            <h3>What he do?</h3>
          </div>
          <div class="col crew">
            <img src="" alt="" />
            <h1>John Doe</h1>
            <h3>What he do?</h3>
          </div>
          <div class="col crew">
            <img src="" alt="" />
            <h1>John Doe</h1>
            <h3>What he do?</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Reservation shit... -->
  <section>
    <div class="row">
      <!-- Left -->
      <div class="col">
        <img class="reserve" src="" alt="" />
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
    <div>
      <!-- form box
    1. Name
    2. Email
    3. Phone number (optional)
    4. Message
    Send button, clear
    -->
       <!-- the actual body body -->
   <main class="min-vh-80 m-5" style="text-align: center;">
        <!-- Dark version -->
        <div class="container bd-black" id="darkver">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="wrapper">
                        <div class="row no-gutters">
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                                    <h3 class="mb-4 fo">Send us a message...</h3>
                                    <form action="https://formspree.io/f/xpzgrkev" method="POST" id="contactForm"
                                        name="contactForm" class="contactForm">
                                        <div class="row">
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="name" id="name" placeholder="Name" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group"><input type="telephone" class="form-control" name="telephone" id="telephone" placeholder="Phone Number (Optional)"></div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message" required></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12 pb-2">
                                                <div class="form-group">
                                                    <input type="submit" value="Send Message">
                                                    <input type="reset" value="Clear Form">
                                                </div>
                                                <div class="form-group">
                                                    <div class="submitting"></div>
                                                    <div class="Clearing"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="info-wrap w-100 p-md-5 p-4 py-5 img">
                                    <h3 class="fo">Contact information</h3>
                                    <p class="mb-4 fo">If at all you would like to work with me, Here is my contact info
                                    </p>
                                    <div class="dbox w-100 d-flex align-items-start">
                                        <div class="text pl-3">
                                            <p><span class="fo">Address:</span> <a href="https://goo.gl/maps/qnR6RGGvVR6MZyDb6?coh=178573&entry=tt" target="_blank" style="text-decoration: none; color: #00ceb6"><em>See map link</em></a></p>
                                        </div>
                                    </div>
                                    <div class="dbox w-100 d-flex align-items-center">
                                        <div class="text pl-3">
                                            <p><span class="fo">Phone:</span> <a href="http://spittoon.co.uk/wp-content/uploads/2019/01/error-meme.jpg" target="_blank" style="text-decoration: none; color: #00ceb6">+ 1235 2355 98</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="dbox w-100 d-flex">
                                        <!-- < class="text pl-3"> -->
                                            <p class="text-wrap"><span class="fo">Email:</span><a href="https://media.makeameme.org/created/hello-rtr56j.jpg" target="_blank" style="text-decoration: none; color: #00ceb6;">
                                                    Future_corpse@gmail.com</a>
                                            </p>
                                    </div>
                                    <div class="dbox w-100 d-flex align-items-center">
                                        <div class="text pl-3">
                                            <p><span class="fo">Website</span> <a href="/Index.html" style="text-decoration: none; color: #00ceb6">Olwethu Bhiya.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>  
    </div>
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
