<template>
  <div class="about">
    <!-- health and stuff picture in corner -->
    <img class="healthy" src="https://i.postimg.cc/kgcfC1SP/Health-Icon.png" alt="health" />
    <div class="about-text">
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
  </div>

    <!-- Meet the crew -->
    <h1 class="TT">Meet the crew</h1>
    <div class="team mt-5">
      <br>
      <div class="row crewBox">
        <div class="col crew">
          <img src="https://i.postimg.cc/Zq6PKn7R/dreads-profile.jpg" alt="" />
          <h1></h1>
          <h3>Founder / Owner</h3>
        </div>
        <div class="col crew">
          <img src="https://i.postimg.cc/TwGVyxFc/white-man.jpg" alt="" />
          <h1>Jonathan Brown</h1>
          <h3>Restaurant manager</h3>
        </div>
        <div class="col crew">
          <img src="https://i.postimg.cc/90QyppWR/ponytail-girl.jpg" alt="" />
          <h1>Gail </h1>
          <h3>Host / server</h3>
        </div>
        <div class="row crewBox">
          <div class="col crew">
            <img src="https://i.postimg.cc/52hqVLmT/long-neck-man.jpg" alt="" />
            <h1>Luja Herrera</h1>
            <h3>Head chef</h3>
          </div>
          <div class="col crew">
            <img src="https://i.postimg.cc/hjr9TwqR/mid-hair-lady.jpg" alt="" />
            <h1>Irene Gilbert</h1>
            <h3>Bartender / Barista</h3>
          </div>
          <div class="col crew">
            <img src="https://i.postimg.cc/Z5BF2V66/chin-up-man.jpg" alt="" />
            <h1>Andile</h1>
            <h3>Host / server</h3>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
.about{
    background-color: #044B68;
    color: #fff;
    width: 100%;
    height: 35%;    /* margin-left: 10%; */
    margin-top: 5%;
    padding: 50px;
}
.healthy {
  position: top right;
  width: 100px;
float: right;
}
.TT{
  float: left;
  padding: 30px;
}
.crew{
width: 350px !important;
}
.crew img {
  width: 300px;
  padding: 10px;
}
</style>