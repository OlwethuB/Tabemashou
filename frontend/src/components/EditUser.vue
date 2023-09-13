<template>
    <div>
        <div class="field">
            <label class="label"> User Name </label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="payload.firstName"/>
                <input class="input" type="text" placeholder="Surname" v-model="payload.lastName"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Birth Date </label>
            <div class="control">
                <input class="input" type="date" v-model="payload.userAge"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Role </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.userRole"/>
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
                   userID: this.UserData?.userID,
                   firstName: this.UserData.firstName,
                   lastName: this.UserData.lastName,
                   userAge: this.UserData.userAge,
                   userRole: this.UserData.userRole,
                   emailAdd: this.UserData.emailAdd,
                   userPass: this.UserData.userPass,
                   userProfile: this.UserData.userProfile
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
            this.$store.dispatch("updateUser", this.id );
        },
    };
</script>
