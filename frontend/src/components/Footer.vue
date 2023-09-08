<template>
  <footer class="footer-95942">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row">
            <div class="col-sm-6 col-md mb-4 mb-md-0">
              <h3>•••</h3>
              <ul class="list-unstyled nav-links">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/">About us</router-link>
                </li>
                <li>
                  <router-link to="/">Meet our team</router-link>
                </li>
                <li>
                  <router-link to="/">Make a reservation</router-link>
                </li>
                <li>
                  <router-link to="/">Menu</router-link>
                </li>
                <li>
                  <router-link to="/">Contact</router-link>
                </li>
                <li>    
                  <router-link to="/">Order</router-link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md mb-4 mb-md-0">
              <h3>Location</h3>
              <p>
                96 kings way, parow, Cape town, 7500
              </p>
            </div>
            <div class="col-sm-6 col-md mb-4 mb-md-0">
              <h3>Contact details</h3>
              <ul class="list-unstyled nav-links">
                <li><a href="#">021 485 7894</a></li>
                <li><a href="#">info@tabemashou.com</a></li>
              </ul>
            </div>
            <div class="col-sm-6 col-md mb-4 mb-md-0">
              <h3>Opening Hours</h3>
              <ul class="list-unstyled nav-links">
                <li><a href="#">Mon -> Fri: 6:30am-23:00</a></li>
                <li><a href="#">Saturday: 7:00am-23:00</a></li>
                <li><a href="#">Sunday: 7:00am-21:00</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-md-12 pb-3">
          <div class="border-top"></div>
        </div>
      </div> 
      <!-- Social media... -->
      <div class="row align-items-center">
        <div class="col-md-4">
          <div class="list-unstyled social mb-0 pb-0 nav-left">
              <!-- Call -->
              <a class="btn btn-floating m-1" target="_blank" :title="call" href="https://i.kym-cdn.com/entries/icons/original/000/017/981/The_Real_Story_Behind_Black_Guy_On_The_Phone_Meme-500x500.jpg" role="button">
                <lord-icon src="https://cdn.lordicon.com/ssvybplt.json" trigger="hover" colors="primary:#fff" style="width: 25px; height: 25px">
                </lord-icon>
              </a>

              <!-- Location -->
              <a class="btn btn-floating m-1" target="_blank" :title="location" href="/" role="button">
                <lord-icon src="https://cdn.lordicon.com/zzcjjxew.json" trigger="hover" colors="primary:#fff,secondary:#1663c7" state="hover-spin" style="width:30px;height:30px">
                </lord-icon>
              </a>

              <!-- Email -->
              <a class="btn btn-floating m-1" target="_blank" :title="email" href="/" role="button">
                <lord-icon src="https://cdn.lordicon.com/ifqmqwui.json" trigger="hover" colors="primary:#fff" style="width: 25px; height: 25px">
                </lord-icon>
              </a>

              <!-- Youtube -->
              <!-- Button trigger modal -->
              <a type="button"  :title="meme" href="https://www.youtube.com/watch?v=BBJa32lCaaY" class="btn btn-floating m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" role="button">
                <lord-icon src="https://cdn.lordicon.com/ensnyqet.json" trigger="click" colors="primary:#fff" style="width: 25px; height: 25px">
                </lord-icon>
              </a>
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-black" id="staticBackdropLabel">A day in our lives!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <iframe width="470" height="315" src="https://www.youtube.com/embed/9sPthPleEKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
              </div>

              <!-- Github -->
              <a class="btn btn-floating m-1" target="_blank" :title="github"  href="https://github.com/OlwethuB" role="button">
                  <lord-icon src="https://cdn.lordicon.com/wluyqhxh.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px">
                  </lord-icon>
              </a>           

              <!-- CV download -->
              <a class="btn btn-floating m-1" target="_blank" :title="menu" download  href="https://pdf.ac/1UD8W3" role="button">
                  <lord-icon src="https://cdn.lordicon.com/fpmskzsv.json" trigger="hover" colors="primary:#fff" style="width:25px;height:25px">
                  </lord-icon>
              </a>
          </div>
        </div>
        <div class="col-md-4 text-center">
          <span class="small">Olwethu Bhiya &copy; All Rights Reserved.</span>
        </div>
        <div class="col-md-4 text-right">
          <ul class="list-unstyled social app mb-0 pb-0 nav-right">
            <li>
              <a href="#"><span class="icon-apple mr-3"></span> App Store</a>
            </li>
            <li>
              <a href="#"><span class="icon-play mr-3"></span> Google Store</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
    data(){
        return{
            call:"Number Unavailable",
            menu:"Download our menu",
            github:"Go To the github",
            meme:"What we about",
            location:"Find us here",
            email:"Tabemashou@gamil.com",      
        }
    }
}
</script>

<style>
footer{
  background-color: #00284E;
}
/* logo */
.logo{
    text-decoration: none;
}

/* the text links */
.menu a{
    text-decoration: none;
}

.menu a:hover{
    color: #fff;
}

</style>
