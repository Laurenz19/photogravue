<template>
  <NavbarVue />
  
  <header>
    <div class="container header__container">
      
      <div class="header__left">
        <div class="header__image-bg"></div>
        
        <div class="header__image-lg">
          <img src="@/assets/images/header.jpg" alt="Header image">
        </div>
        
        <div class="header__image-sm">
          <img src="@/assets/images/header.jpg" alt="Header image">
        </div>
      </div>

      <div class="header__right">
        <div class="header__head">
          <div class="empty empty__header"></div>
          <a class="header__tag">#Best Travel Photographer 2022</a>
        </div>
        <h2>See The Beauty Of the World Through My Lense</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium ipsam natus modi praesentium ipsa ab assumenda dicta doloribus blanditiis inventore!
        </p>
        <a href="mailto:laurenziosambany@gmail.com" class="header__btn-md">Get In Touch</a>
      </div>
    </div>

  </header>

  <div class="header__frames">
    
    <div class="header__frame">
      <img src="@/assets/images/frame1.jpg" alt="HEADER FRAME 1">
    </div>
    
    <div class="header__frame">
      <img src="@/assets/images/frame2.jpg" alt="HEADER FRAME 2">
    </div>
  
  </div>
  
  <a href="mailto:laurenziosambany@gmail.com" class="contact__btn header__btn">
    <i class="uil uil-arrow-up-right"></i>
    <p>CONTACT - SEND ME AN EMAIL </p>
  </a>

   <br v-for="n in 10" :key="n">

</template>

<script setup>
/**
 * imports
 */
  import NavbarVue from '../components/layouts/Navbar.vue';

</script>
