<template>
    <div>
        <div class="field">
            <label class="label"> Dish Name </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.prodName"/> 
            </div>
        </div>
        <div class="field">
            <label class="label"> Dish Description </label> 
            <div class="control">
                <input class="input" type="text" v-model="payload.description"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Amount </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.amount"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Category </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.category"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Image </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.prodUrl"/>
            </div>
        </div>
        <div class="control">
            <button class="btn btn-success" type="submit" @click="updateProduct"> Update </button>
        </div>
    </div>
</template>

<script>
        // Import axios
    import axios from "axios";
// import { response } from 'express';

    export default {
        name: "EditDish",
        props: ["productData"],
        data() {
            return {
                payload:{
                   prodID: this.productData?.prodID,
                   prodName: this.productData.prodName,
                   description: this.productData.description,
                   amount: this.productData.amount,
                   category: this.productData.category,
                   prodUrl: this.productData.prodUrl
                }
            };
        },
        computed:{
            product(){
                return this.$store.state.product;
            }
        },

        mounted() {
            this.$store.dispatch("fetchProduct", this.id );
        },

        methods: {
                // Update product
            async updateProduct() {
                try {
                    await axios.patch( `http://localhost:5000/products/${this.payload.prodID}`,
                    this.payload
                    );
                    this.prodName = "";
                    this.description = "";
                    this.amount = "";
                    this.category = "";
                    this.prodUrl = "";
                    this.$router.push("/adminMenu");
                } catch (err) {
                    console.log(err);
                }
            },
        },
    };
</script>
