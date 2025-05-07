<template>
  <Navbar class="navbar"/>
  <!-- <transition name="fade" mode="out-in"> -->
    <router-view></router-view>
  <!-- </transition> -->

  <Footer />
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.7s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .bg-orange-500 { background-color: #f97316; }
  .bg-teal-500 { background-color: #14b8a6; }
  
  .navbar {
    z-index: 1000; 
  
  }
</style>