<template>
    <!-- Promo -->
    <!-- Navigation -->

    <!-- Page -->
        <h1>Tabemashou</h1>
        <!-- Actual menu -->
        <section>
            <h1>Let’s eat  |     食べましょう</h1>
            <!-- Breakfast -->
            <div>
                <h3>Breakfast</h3>
                <div class="row">
                    <div class="col">
                        <h6>Category</h6>
                        <h6>descrip?...</h6>
                        <p> R $$$</p>
                    </div>
                    <div class="col">
                        <h6>Category</h6>
                        <h6>descrip?...</h6>
                        <p> R $$$</p>
                    </div>
                    <div class="col">
                        <h6>Category</h6>
                        <h6>descrip?...</h6>
                        <p> R $$$</p>
                    </div>
                    <div class="col">
                        <h6>Category</h6>
                        <h6>descrip?...</h6>
                        <p> R $$$</p>
                    </div>
                    <div class="col">
                        <h6>Category</h6>
                        <h6>descrip?...</h6>
                        <p> R $$$</p>
                    </div>
                    <div class="col">
                        <h6>Category</h6>
                        <h6>descrip?...</h6>
                        <p> R $$$</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- <section>
            <div class="product-list row">
                <div
                class="col-md-4 product-card"
                v-for="product in searchedProducts"
                :key="product.prodID"
                >
                <div class="product-image">
                    <img
                    :src="product.prodUrl"
                    :alt="product.prodName"
                    class="img-fluid"
                    />
                </div>
                <div class="product-details">
                    <h3>{{ product.prodName }}</h3>
                    <p class="price">Price: R{{ product.amount }}</p>
                </div>
                </div>
            </div>
        </section> -->

    <!-- Insta... -->
    
    <!-- Footer... -->

</template>

<script>  
//   export default {
//   components: {Projects,NavSec},
//   computed: {
//     projects(){
//       return this.$store.state.projects
//     }
//   },
//   mounted(){
//     this.$store.dispatch("getProjects");
//   },
// }
  </script>
  
  <style scoped>
  .products {
    padding: 4rem 0;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .controls {
    margin-bottom: 2rem;
  }
  
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
  }
  
  .product-card {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s ease;
    width: 100%;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  
  .product-image img {
    max-width: 100%;
    height: auto;
  }
  
  .product-details {
    margin-top: 1rem;
  }
  
  .product-details h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .product-details .price {
    font-size: 1rem;
    color: #888;
  }
  
  /* Spinner */
  @keyframes ldio-ugtlj07j4f-1 {
      0% { transform: rotate(0deg) }
     50% { transform: rotate(-45deg) }
    100% { transform: rotate(0deg) }
  }
  @keyframes ldio-ugtlj07j4f-2 {
      0% { transform: rotate(180deg) }
     50% { transform: rotate(225deg) }
    100% { transform: rotate(180deg) }
  }
  .ldio-ugtlj07j4f > div:nth-child(2) {
    transform: translate(-15px,0);
  }
  .ldio-ugtlj07j4f > div:nth-child(2) div {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 120px;
    height: 60px;
    border-radius: 120px 120px 0 0;
    background: #232323;
    animation: ldio-ugtlj07j4f-1 1s linear infinite;
    transform-origin: 60px 60px
  }
  .ldio-ugtlj07j4f > div:nth-child(2) div:nth-child(2) {
    animation: ldio-ugtlj07j4f-2 1s linear infinite
  }
  .ldio-ugtlj07j4f > div:nth-child(2) div:nth-child(3) {
    transform: rotate(-90deg);
    animation: none;
  }@keyframes ldio-ugtlj07j4f-3 {
      0% { transform: translate(190px,0); opacity: 0 }
     20% { opacity: 1 }
    100% { transform: translate(70px,0); opacity: 1 }
  }
  .ldio-ugtlj07j4f > div:nth-child(1) {
    display: block;
  }
  .ldio-ugtlj07j4f > div:nth-child(1) div {
    position: absolute;
    top: 92px;
    left: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ff0083;
    animation: ldio-ugtlj07j4f-3 1s linear infinite
  }
  .ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(1) { animation-delay: -0.67s }
  .ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(2) { animation-delay: -0.33s }
  .ldio-ugtlj07j4f > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }
  .loadingio-spinner-bean-eater-pgmqlvey3sh {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-ugtlj07j4f {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-ugtlj07j4f div { box-sizing: content-box; }
  /* generated by https://loading.io/ */
  </style>