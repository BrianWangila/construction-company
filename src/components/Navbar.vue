<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center fw-bold text-warning" to="/">
        <img src="/logo.PNG" alt="Logo" height="40" class="logo-img me-2" />
        Sindana Construction
      </router-link>

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
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Our Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/supplies">General Supplies</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>

      
    </div>
  </nav>
</template>



<script setup>
  // import { onMounted } from 'vue';

  // onMounted(() => {
  //   setTimeout(() => {
  //     const navbarCollapse = document.getElementById('navbarSupportedContent');
  //     if (navbarCollapse) {
  //       const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
  //         toggle: false
  //       });
  //       console.log('Collapse initialized:', navbarCollapse);
  //     } else {
  //       console.error('Navbar collapse element not found');
  //     }
  //   }, 100);
  // });
</script>



<style scoped>
  .navbar {
    border-bottom: 3px solid #f97316;
    transition: background-color 0.3s ease;
    background-color: #343a40;
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