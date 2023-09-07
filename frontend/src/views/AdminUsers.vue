<template>
    <!-- Navigation and promo -->
    <h1>Admin Dashboard</h1>
    <!-- Admin Navigation -->
    <div>
        <ul class="nav justify-content-center nav-tabs">
            <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page">Users</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link">Menu</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link" >Reservations</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link disabled" aria-disabled="true">Orders</router-link>
            </li>
        </ul>
    </div>

    <!-- Current Table -->
    <section>
        <!-- <div>
            <router-link :to="{name: 'Create'}" class="button is-success mt-5"> Add New </router-link>
            <table class="table is-striped is-bordered mt-2 is-fullwidth">
                <thead>
                    <tr>
                        <th> Product Name </th>
                        <th> Price </th>
                        <th class="has-text-centered"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.product_id">
                        <td>{{ item.product_name }}</td>
                        <td> {{ item.product_price }}</td>
                        <td class="has-text-centered">
                            <router-link :to=" { name: 'Edit', params: {id: item.product_id}}" class="button is-info is-small"> Edit </router-link>
                            <a class="button is-danger is-small" @click="deleteProduct(item.product_id)"> Delete </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </section>


</template>