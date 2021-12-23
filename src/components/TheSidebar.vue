<template>
    <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="list-group list-group-flush">

            <router-link :to="{name: 'product.show', params:{cat_id: category.id}}" class="list-group-item list-group-item-action list-group-item-light p-3" v-for="category in categories" :key="category.id">
                {{ category.name }}
                </router-link>


                  <div class="sidebar-heading border-bottom bg-light">Brand</div>
                <router-link :to="{name: 'product.index'}" class="list-group-item list-group-item-action list-group-item-light p-3" v-for="brand in brand" :key="brand.id">
                {{ brand.brand_title }}
                </router-link>
            <!-- <router-link :to="{name: 'product.index'}"
                class="
                    list-group-item list-group-item-action list-group-item-light
                    p-3
                "
                href="#!"
                >Main Category 2</router-link
            >
            <router-link :to="{name: 'product.index'}"
                class="
                    list-group-item list-group-item-action list-group-item-light
                    p-3
                "
                href="#!"
                >Main Category 3</router-link
            >
            <router-link :to="{name: 'product.index'}"
                class="
                    list-group-item list-group-item-action list-group-item-light
                    p-3
                "
                href="#!"
                >Main Category 4</router-link
            >
            <router-link :to="{name: 'product.index'}"
                class="
                    list-group-item list-group-item-action list-group-item-light
                    p-3
                "
                href="#!"
                >Main Category 5</router-link
            >
            <router-link :to="{name: 'product.index'}"
                class="
                    list-group-item list-group-item-action list-group-item-light
                    p-3
                "
                href="#!"
                >Main Category 6</router-link
            >
            <router-link :to="{name: 'contact-us'}"
                class="
                    list-group-item list-group-item-action list-group-item-light
                    p-3
                "
                href="#!"
                >CONTACT US</router-link
            > -->
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Category from '../apis/Category';
import Brand from '../apis/Brand';


// categories
const categories = ref([]);
const { getCategories } = Category;


getCategories().then(response => {
    categories.value = response.data;
}).catch(error => {
    alert("Something went wrong.");
    console.error(error.data);
});
console.log(categories.value);

// brand

const { getBrand } = Brand;

const brand = ref([]);
getBrand().then(response => {
    brand.value = response.data;
}).catch(error => {
    alert("Something went wrong.");
    console.error(error.data);
});
console.log(brand.value);
</script>