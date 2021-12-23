<template>
<header class="header">
 <nav class="navbar navbar-expand-lg fixed-top navbar-light">
  <!-- Container wrapper -->
  <div class="container-fluid" style="padding-right: 0px !important;">
    <!-- Toggle button -->
   
    <button class="btn p-2 m-1 border" id="sidebarToggle"><i style="font-size: 28px; color: white;" class="fas fa-bars"></i></button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link :to="{name: 'home'}" class="navbar-brand mt-2 mt-lg-0">
        <img
          src="../assets/images/D-logo.png"
          class="brand-logo"
          alt=""
          loading="lazy"
        />
      </router-link>
      <!-- Left links -->
     
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->
     <div class="navbar-scarch-box col-md-8 text-center">
          <input placeholder="       Search For Product" type="text" class="main-search">
      </div>
      

    <!-- Right elements -->
    <div class="col-md-4 text-center">
       <div class="d-flex align-items-center">
       <button class="cart-button cart-btn">Add To Cart</button>
     <button class="signin-btn p-3 m-0" data-bs-toggle="modal" data-bs-target="#loginmodal">Sign in</button>
    </div>
    </div>
   
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
<div class="sticky-header-cart"><button class="cart-button"><i class="fas fa-shopping-bag" style="font-size: 35px; margin: 5px"></i></button><br>
<span style="font-size: 12px;">{{ $store.getters.cartCount }} items</span>
</div>
<!-- login modal -->

<div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
       <div class="modal-body">
            <form>
                <div class="form-group">
                    <label>username</label>
                    <input type="text" class="form-control" placeholder="User Name">
                    <label>password</label>
                    <input type="password" class="form-control" placeholder="password">
                </div>
            </form>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</div>

<!-- login modal end -->



</header>
</template>

