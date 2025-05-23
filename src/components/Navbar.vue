<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center fw-bold text-warning" href="/">
        <img src="/logo.PNG" alt="Logo" height="40" class="logo-img me-2" />
        Sindana Construction
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/" @click="closeNavbar">Home</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services" @click="closeNavbar">Our Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/supplies" @click="closeNavbar">General Supplies</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click="closeNavbar">About</router-link>
          </li>
        </ul>
      </div>

      
    </div>
  </nav>
</template>



<script setup>
import { ref } from 'vue';

  const closeNavbar = () => {
  const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

</script>



<style scoped>
  .navbar {
    border-bottom: 3px solid #f97316;
    transition: background-color 0.3s ease;
    background-color: #343a40;
        
  }

  .collapse.show {
    visibility: visible !important;
    display: block !important;
  }

  .navbar-brand {
    font-size: 1.25rem;
  }

  .nav-link {
    color: white !important;
    font-weight: 500;
    margin: 0 10px;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .nav-link:hover {
    color: #f97316 !important;
    transform: scale(1.1);
  }

  .logo-img {
    width: auto;
    transition: transform 0.3s ease;
    border-radius: 5px;
  }

  .logo-img:hover {
    transform: scale(1.2);
  }


  /* Mobile view styling */
  @media (max-width: 768px) {

    .navbar-collapse {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #343a40;
      padding: 1rem;
      border-top: 1px solid #f97316;
    }

    .navbar-collapse.collapsing {
      transition: height 0.3s ease; 
    }

    .navbar-nav {
      text-align: left;
    }

    .nav-item {
      margin-bottom: 0.5rem;
    }

    .nav-link {
      display: block;
      padding: 0.5rem 1rem;
    }
  }

  /* Desktop view styling */
  @media (min-width: 768px) {
    .navbar-collapse {
      display: flex !important;
      visibility: visible !important;
    }

    .navbar-toggler {
      display: none !important;
    }
  }
</style>