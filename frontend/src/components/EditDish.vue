<template>
    <div>
        <div class="field">
            <label class="label"> Dish Name </label>
            <div class="control">
                <input class="input" type="text" v-model="prodName"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Dish Description </label>
            <div class="control">
                <input class="input" type="text" v-model="description"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Amount </label>
            <div class="control">
                <input class="input" type="text" v-model="amount"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Category </label>
            <div class="control">
                <input class="input" type="text" v-model="category"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Image </label>
            <div class="control">
                <input class="input" type="text" v-model="prodUrl"/>
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="updateProduct"> Update </button>
        </div>
    </div>
</template>

<script>
        // Import axios
    import axios from "axios";
import { response } from 'express';

    export default {
        name: "EditDish",
        data() {
            return {
                prodName: product.prodName,
                description: product.description,
                amount: product.amount,
                category: product.category,
                prodUrl: product.prodUrl
            };
        },

        created: function () {
            this.getProductById();
        },

        methods: {
                // Get product By ID
            async getProductById() {
                try {
                    const response = await axios.get(
                        `http://localhost:5000/products/${this.$route.params.id}`
                    );
                    this.prodName = response.data.prodName;
                    this.description = response.data.description;
                    this.amount = response.data.amount;
                    this.category = response.data.category;
                    this.prodUrl = response.data.prodUrl;
                } catch (err) {
                    console.log(err);
                }
            },

                // Update product
            async updateProduct() {
                try {
                    await axios.put( `http://localhost:5000/products/${this.$route.params.id}`,
                        {
                            prodName: this.prodName,
                            description: this.description,
                            amount: this.amount,
                            category: this.category,
                            prodUrl: this.prodUrl,
                        }
                    );
                    this.prodName = "";
                    this.description = "";
                    this.amount = "";
                    this.category = "";
                    this.prodUrl = "";
                    this.$router.push("/");
                } catch (err) {
                    console.log(err);
                }
            },
        },
    };
</script>
