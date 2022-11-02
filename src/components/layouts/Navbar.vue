<template>
    <nav :class="isOnScroll?'onScroll':''">
        <div class="container nav__container">
            <div class="nav__logo">
               <router-link to="/"><img src="@/assets/images/logo.png"></router-link> 
            </div>
            <ul class="nav__menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#exhibitions">Exhibitions</a></li>
            </ul>
            <ul class="nav__socials">
                <li>
                    <a href="#" target="_blank"><i class="uil uil-instagram-alt"></i></a>
                </li>
                <li>
                    <a href="#" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                </li>
                <li>
                    <a href="#" target="_blank"><i class="uil uil-youtube"></i></a>
                </li>
            </ul>
            <button class="nav__toggle-btn" @click="showNavbar = !showNavbar">
                <i class="uil" :class="showNavbar?'uil-multiply':'uil-bars'"></i>
            </button>
        </div>
    </nav>
</template>
<script setup>
 /**
  * import
  */
  import {ref, watch} from 'vue'
  import { useWindowScroll } from '@vueuse/core'

  const showNavbar = ref(false)

 /**
  * Nav on scroll handler
  */
  const {x, y}  = useWindowScroll()
  const isOnScroll = ref(false)
  watch(y, ()=>{
    if(y.value>=1)  isOnScroll.value = true;
    else isOnScroll.value = false
  })


</script>

<style scoped>
@import '../../assets/css/base.css';

nav{
    height: 5rem;
    display: grid;
    position: fixed;
    width: 100vw;
    top:0;
    left: 0; 
    z-index: 99;
    border-bottom: 0.2rem solid transparent;
    transition: var(--transition);
}

.nav__container{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo{
    width: 7.5rem;
}
.nav__menu{
    display: flex;
    gap: 4rem;
}

.nav__socials{
    display: flex;
    gap: 1rem;
}

.nav__socials li a{
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;
    background: linear-gradient(var(--color-primary-variant), var(--color-primary));
    color: var(--color-bg4);
    font-size: 1rem;
    transition: var(--transition);
}

.nav__socials li a:hover{
    box-shadow: 0 1rem 1rem rgb(0,0,0,0.4);
}
.nav__toggle-btn{
    display: none;
}

/* Nav on scroll */
.onScroll{
    background: var(--color-bg2);
    border-bottom: 0.2rem solid var(--color-bg3);
    box-shadow: 0 0.5rem 1rem rgb(0,0,0,0.3);
}

</style>