<template>
    <div class="home-search-banner text-center"></div>
    
<!-- <div class="flash-sale-banner container">
    <div class="row">
        <div class="col-md-6 m-2">
            <img src="../assets/images/flash-sales.jpg" alt="">
        </div>
        <div class="col-md-6 m-2">
            <img src="../assets/images/winter-collection.jpg" alt="">
        </div>
       
    </div>
</div> -->
    <!-- category name show -->
                <div class="product-category container">
        <div class="all-category"><h1>PRODUCT CATEGORIES</h1></div>
               <div class="category-name-home">
                   <div class="row">
                       <div  v-for="category in categories" :key="category.id" class="col-md-3 bg-light border border-3 rounded-pill p-1 text-center m-2">
                           <a class="cat-name-div" href="">
                            <img class="p-1 mx-3" :src="baseURL+'category-icon/'+category.category_icon" alt="" height="40">
                          <span class="fs-5">{{ category.name }}</span>
                           </a>
                       </div>
                   </div>
               </div>

    </div>
          <!-- end -->
    <!-- how to order slide start -->

                  <div class="how-to-order-slide">
        <div class="odrer-ins">
            <h2>How to order from Diyanah ?</h2>
        </div>
        <div
            id="myCarousel"
            class="carousel slide bg-inverse w-50 ms-auto me-auto"
            data-bs-ride="carousel"
        >
            <ol class="carousel-indicators">
                <li
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    class="active"
                ></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src="../assets/images/order-1.jpg"
                        alt="First slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/order-2.jpg"
                        alt="Second slide"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/images/order-2.jpg"
                        alt="Third slide"
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </a>
        </div>
    </div>
    <!-- how to  order slide end -->

    <!-- spacial product slide start -->

    <div class="spacial-offer-slide">
              <div class="spacial-offer"><h3>Special Offers</h3></div>

            <div class="row mx-auto my-auto justify-content-center">
  <div id="recipeCarousel" class="carousel slide slider-spacial" data-bs-ride="carousel">

      
      <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400/31f?text=1" class="img-fluid">
                      </div>
                      <div class="card-img-overlay">Slide 1</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400/e66?text=2" class="img-fluid">
                      </div>
                      <div class="card-img-overlay">Slide 2</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400/7d2?text=3" class="img-fluid">
                      </div>
                      <div class="card-img-overlay">Slide 3</div>
                  </div>
              </div>
          </div>
          <div class="carousel-item">
              <div class="col-md-4">
                  <div  class="card">
                      <div class="card-img">
                          <img src="https://via.placeholder.com/500x400?text=4" class="img-fluid">
                      </div>
                      <div class="card-img-overlay">Slide 4</div>
                  </div>
              </div>
          </div>
         
         
      </div>
      <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
  </div>
</div>
            
        </div>
    <!-- spacial product slide end -->

   <!-- why people love sec -->
                     <div class="why-people-love">
        <div class="why-banner">
            <h4>Why People Love Diyanah ?</h4>
        </div>

        <div class="container">
            <div class="row why-love-row">
                <div class="col-md-4 why-love">
                    <img width="420" src="../assets/images/lp.jpg" alt="" /><br />
                    <div class="why-text">
                        <h2>Convenient & Quick</h2>
                        <br />
                        <p>
                            No waiting in traffic, no haggling, no worries
                            <br />
                            carrying groceries, they're delivered right at your
                            door.
                        </p>
                    </div>
                </div>

                <div class="col-md-4 why-love">
                    <img width="420" src="../assets/images/lp-features-2.jpg" alt="" /><br />
                    <div class="why-text">
                        <h2>Convenient & Quick</h2>
                        <br />
                        <p>
                            No waiting in traffic, no haggling, no worries
                            <br />
                            carrying groceries, they're delivered right at your
                            door.
                        </p>
                    </div>
                </div>


                <div class="col-md-4 why-love">
                    <img width="420" src="../assets/images/lp-features-3.jpg" alt="" /><br />
                    <div class="why-text">
                        <h2>Convenient & Quick</h2>
                        <br />
                        <p>
                            No waiting in traffic, no haggling, no worries
                            <br />
                            carrying groceries, they're delivered right at your
                            door.
                        </p>
                    </div>
                </div>
            </div>
        </div>
                      </div>


   <!-- why people love sec end -->

    <!-- corporate page -->
    <div class="corporate">
        <div class="corporate-content">
            <svg
                width="80px"
                height="80px"
                style="
                    fill: #fff;
                    stroke: #fff;
                    display: inline-block;
                    vertical-align: middle;
                "
                version="1.1"
                viewBox="0 0 100 100"
                data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0"
            >
                <g data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0.0">
                    <path
                        d="m82.652 27.863h-18.59v-2.1328c0-3.4453-2.8047-6.25-6.25-6.25h-15.625c-3.4453 0-6.25 2.8047-6.25 6.25v2.1328h-18.59c-1.0039 0-1.8164 0.8125-1.8164
                      1.8164v16.371c0 0.78125 0.5 1.4766 1.2422 1.7227l23.281 7.75v6.6875c0 
                      1.0039 0.8125 1.8125 1.8125 1.8164l16.289 0.035156h0.003906c0.48047 0 
                      0.94141-0.19141 1.2812-0.53125s0.53125-0.80469 0.53125-1.2852v-6.7227l23.246-7.75c0.74219-0.24609 1.2422-0.94141 1.2422-1.7227l0.007812-16.371c0-1.0039-0.8125-1.8164-1.8164-1.8164zm-43.082-2.1328c0-1.4414 1.1719-2.6172 2.6172-2.6172h15.625c1.4414 0 2.6172 1.1719 2.6172 2.6172v2.1328h-20.859zm4.1172 34.668v-4.3672h12.656v4.3945zm37.148-15.656l-22.969 7.6562h-15.703l-23-7.6602v-13.242h61.672z"
                        data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0.0.0"
                    ></path>
                    <path
                        d="m82.652 52.398c-1.0039 0-1.8164 0.8125-1.8164 1.8164v16.184c0 3.5781-2.9102 6.4922-6.4922 6.4922l-48.691-0.003906c-3.5781 0-6.4922-2.9102-6.4922-6.4922l0.003906-16.18c0-1.0039-0.8125-1.8164-1.8164-1.8164s-1.8164 0.8125-1.8164 1.8164v16.184c0 5.582 4.543 10.125 10.125 10.125h48.691c5.582 0 10.125-4.543 10.125-10.125l-0.003906-16.184c0-1.0039-0.8125-1.8164-1.8164-1.8164z"
                        data-reactid=".x6v76rwizu.6.2.0.0.8.0.0.0.0.0.1"
                    ></path>
                </g>
            </svg>
            <h2>Do You Own A Business??</h2>
            <h3>Become A corporate Customer</h3>
        </div>
    </div>

    <div class="our-app">
        <div class="row">
            <div class="col-md-9 our-app-text">
                    <div style="color: rgb(122 117 117 / 95%);"> <h3>Be a part of our family</h3></div>
                    <div class="pt-5"><input class="ourapp-text-input" type="text"> <button class="get-app-btn btn btn-outline-danger">Get App</button></div>
                <div class="pt-3">e.g. +8801672955886</div>
                <div class="play-store"><img width="200" src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2566/Default/stores/chaldal/components/landingPage2/MobileAppSection/images/lp_getandroidapp.png?v=2&q=low&webp=1&alpha=1" alt="">
                <img width="200" src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2566/Default/stores/chaldal/components/landingPage2/MobileAppSection/images/lp_getandroidapp.png?v=2&q=low&webp=1&alpha=1" alt="">
                </div>
            </div>
            <div class="col-md-3 phn-img">
                <img src="../assets/images/lp_iphone_nexus.png" alt="">
            </div>
        </div>
    </div>

    <div class="map">
        <img src="../assets/images/chaldal_new_warehouses.jpg" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Category from '../apis/Category';

const baseURL = ref('');
baseURL.value = axios.defaults.baseURLPublic;

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

</script>

