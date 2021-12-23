
<template>
    <the-header></the-header>
    <div class="d-flex" id="wrapper">
        <the-sidebar></the-sidebar>
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <the-cart></the-cart>
                <router-view></router-view>
                <the-footer></the-footer>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheBody from "./components/TheBody.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheCart from "./components/TheCart.vue";
</script>
