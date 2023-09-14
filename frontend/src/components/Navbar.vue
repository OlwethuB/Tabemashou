<template>
  <div id="PromoHead" class="promo">
      <router-link class="navbar-brand" to="/">
          <h4>Book now | Table specials</h4>
     </router-link>
  </div>
    <header  class="sticky-top">
       <nav id="header" class="navbar">
         <div class="container">
           <router-link class="navbar-brand" to="/">
             <img src="https://i.postimg.cc/Z5JfwqLW/logo.jpg" alt="logo" class="logo"  loading="eager"/>
           </router-link>
           <!-- center stuff -->
           <ul class="nav nav-underline m-auto justify-content-center">
             <li class="nav-item">
               <router-link to="/" id="links" class="nav-link active" aria-current="page"><lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="click" colors="primary:#fff" style="width:25px;height:25px"></lord-icon>
   </router-link>
             </li>
             <li class="nav-item">
               <router-link id="links" class="nav-link" to="/about">About Us</router-link>
             </li>
             <li class="nav-item">
               <router-link id="links" class="nav-link" to="/menu">Menu</router-link>
             </li>
             <li class="nav-item">
               <router-link id="links" class="nav-link" to="/contact">Contact</router-link>
             </li>
             <li class="nav-item">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Other</a>
              <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="/adminMenu">Admin</router-link></li>
                  <li><router-link class="dropdown-item" to="/book">Book now</router-link></li>
                  <li><router-link class="dropdown-item" to="/confirm">Something else here</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><router-link class="dropdown-item disabled" aria-disabled="true" to="/singleUser">Profile</router-link></li>
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
   </template>
   
   <script>
   
   </script>
   
   <style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400&family=Roboto&family=Rubik&display=swap');
  
   /* Promo part */
   .promo {
    text-align: center;
    background-color: #00284E;
    color: #adb5bd;
    padding: 2px;
   }

   /* Navigation */
   header {
     width: 100%;
   background-color: #0281C5;
   opacity: 0.5;
   }
   
   @media (max-width: 768px) {
   header {
     height: auto;
     margin-bottom: 100px;
   }}

   .log {
    color: #e9ecef ;
   }
   
   .logo{
     border-radius: 50%;
     width: 55px;
     height:  50px;
     background-size: contain;
   
   }
   
   .nav-link, #links {
     color: #fff;
     font-size: 20px; 
     margin: 2px;
   }
   
   .nav-link:hover, #links:hover {
     border-radius: 4px;
   color: #00284E;
   margin: 3px;
   
   }
   
   @media (max-width: 862px) {
    .nav-link, #links {
   font-size: 20px;
   margin: 2px;
   }
   .nav-link:hover, #links:hover{
     border-radius: 2px;
     border: 2px solid #123f92;
   margin: 2px;
   }
   }
   
   @media (max-width: 662px) {
    .nav-link, #links {
   font-size: 12px;
   margin: 2px;
   }
   .nav-link:hover, #links:hover{
     border-radius: 2px;
     border: 2px solid #123f92;
   margin: 2px ;
   }
   }
   
   </style>