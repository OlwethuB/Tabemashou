<template>
    <div>
        <div class="field">
            <label class="label"> User Name </label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="payload.FirstName"/>
                <input class="input" type="text" placeholder="Surname" v-model="payload.lastName"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Birth Date </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.UserAge"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Role </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.UserRole"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Email </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.emailAdd"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Password </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.userPass"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Image </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.userProfile"/>
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="updateUser"> Update </button>
        </div>
    </div>
</template>

<script>
        // Import axios
    import axios from "axios";
// import { response } from 'express';

    export default {
        name: "EditDish",
        props: ["UserData"],
        data() {
            return {
                payload:{
                   userID: this.productData?.userID,
                   FirstName: this.productData.FirstName,
                   lastName: this.productData.lastName,
                   UserAge: this.productData.UserAge,
                   UserRole: this.productData.UserRole,
                   emailAdd: this.productData.emailAdd,
                   userPass: this.productData.userPass,
                   userProfile: this.productData.userProfile
                }
            };
        },
        computed:{
            product(){
                return this.$store.state.user;
            }
        },

        mounted() {
            this.$store.dispatch("fetchUser", this.id );
        },

        methods: {
                // Update product
            async updateUser() {
                try {
                    await axios.patch( `http://localhost:5000/user/${this.payload.userID}`,
                    this.payload
                    );
                    this.FirstName = "";
                    this.lastName = "";
                    this.UserAge = "";
                    this.UserRole = "";
                    this.emailAdd = "";
                    this.userPass = "";
                    this.userProfile = "";
                    this.$router.push("/adminUsers");
                } catch (err) {
                    console.log(err);
                }
            },
        },
    };
</script>
