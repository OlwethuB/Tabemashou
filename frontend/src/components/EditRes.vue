<template>
    <div>
        <div class="field">
            <label class="label"> Reserve Name </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.name"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Email </label>
            <div class="control">
                <input class="input" type="email" v-model="payload.email"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Phone </label>
            <div class="control">
                <input class="input" type="tel" v-model="payload.phone"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> People size </label>
            <div class="control">
                <input class="input" type="text" v-model="payload.pepSize"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Date </label>
            <div class="control">
                <input class="input" type="date" v-model="payload.date"/>
            </div>
        </div>
        <div class="field">
            <label class="label"> Time </label>
            <div class="control">
                <input class="input" type="time" v-model="payload.time"/>
            </div>
        </div>
        <div class="control">
            <button class="button is-success" @click="updateReservation"> Update </button>
        </div>
    </div>
</template>

<script>
        // Import axios
    import axios from "axios";
// import { response } from 'express';

    export default {
        name: "editBooking",
        props: ["bookingData"],
        data() {
            return {
                payload:{
                   bookingID: this.bookingData?.bookingID,
                   name: this.bookingData.name,
                   email: this.bookingData.email,
                   phone: this.bookingData.phone,
                   pepSize: this.bookingData.pepSize,
                   date: this.bookingData.date,
                   time: this.bookingData.time
                }
            };
        },
        computed:{
            product(){
                return this.$store.state.reservation;
            }
        },

        mounted() {
            this.$store.dispatch("setBooking", this.id );
            this.$store.dispatch("editBooking", this.id );
        },

    };
</script>
