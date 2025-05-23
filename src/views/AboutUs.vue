<template>
  <div class="about container-fluid p-0 py-5 mt-3">
    <!-- Header Section with Background Image -->
    <header class="about-us position-relative d-flex align-items-center justify-content-center text-center">
      <div class="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div class="position-relative z-10">
        <h2 class="display-3 text-warning fw-bold mb-1 animate__animated animate__fadeInUp">About Sindana Construction</h2>
        <h4 class="text-white animate__animated animate__fadeInUp" style="animation-delay: 0.2s">To provide quality works and services that meets the demands in the dynamic world</h4>
      </div>
    </header>

    <div class="container">
      <!-- Our Story Section -->
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <h3 class="text-warning mb-4">Our Story</h3>
          <p class="text-dark mb-3">Founded in Bungoma, Kenya, Sindana Construction Co. was established with a clear mission: to help businesses and communities overcome the challenges of construction and supply needs through accessible, high-quality services. Our founders, seasoned professionals in construction and supply chain management, recognized the gap in affordable and reliable solutions for local enterprises. Over the past decade, we’ve grown from a small team in Bumula District to a respected name across Kenya, facilitating over $10 million in construction projects and supply transactions. We’ve expanded our operations to serve clients in urban and rural areas, delivering innovative solutions with a commitment to excellence.</p>
          <p class="text-dark">Our journey includes partnerships with leading manufacturers and distributors, enabling us to provide a wide range of building materials, general supplies, and construction services. We take pride in equipping job sites with specialized tools like truck-mounted forklifts, ensuring safe and efficient deliveries to even the most challenging locations.</p>
          <a href="/assets/SINDANA_COMPANY_PROFILE.pdf" download class="btn btn-outline-warning mt-3">Download Company Profile</a>
        </div>
      </div>

      <!-- Our Mission Section -->
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-lg-10">
          <h3 class="text-warning mb-4">Our Mission</h3>
          <p class="text-dark mb-3">At Sindana Construction Co., we believe that financial and logistical constraints should never limit a business’s potential in Kenya’s dynamic market. Our mission is to provide fast, flexible, and transparent construction and supply solutions that empower our clients to:</p>
          <ul class="list-group list-group-flush mb-3">
            <li class="list-group-item bg-light text-dark">Complete projects and deliveries on time with satisfactory quality.</li>
            <li class="list-group-item bg-light text-dark">Expand into new regional markets with reliable materials and services.</li>
            <li class="list-group-item bg-light text-dark">Strengthen relationships with suppliers and buyers through tailored solutions.</li>
            <li class="list-group-item bg-light text-dark">Optimize working capital by reducing costs with our comprehensive supply chain.</li>
          </ul>
          <p class="text-dark">Our team works diligently to meet the unique needs of each client, leveraging industry best practices to ensure every project succeeds.</p>
        </div>
      </div>

      <!-- Our Values Section -->
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-lg-10">
          <h3 class="text-warning mb-4">Our Values</h3>
          <div class="row g-4">
            <div class="col-12 col-md-4">
              <div class="card bg-light text-dark p-3 h-100">
                <h5 class="card-title text-warning">Integrity</h5>
                <p class="card-text">We conduct business with honesty and transparency, building trust with every client relationship. Our commitment to ethical practices guides all our operations.</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card bg-light text-dark p-3 h-100">
                <h5 class="card-title text-warning">Innovation</h5>
                <p class="card-text">We continuously develop creative solutions to meet the evolving needs of construction and supply, incorporating cutting-edge technology and sustainable practices.</p>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card bg-light text-dark p-3 h-100">
                <h5 class="card-title text-warning">Excellence</h5>
                <p class="card-text">We strive for the highest standards in service, speed, and reliability, ensuring every project and delivery exceeds client expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Community Impact -->
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-lg-10">
          <h3 class="text-warning mb-4">Community Impact</h3>
          <p class="text-dark mb-3">Sindana Construction Co. is committed to giving back to the Bungoma community and beyond. We’ve initiated training programs for local youth in construction skills, partnered with local schools to improve infrastructure, and supported environmental projects like reforestation around construction sites. Our efforts have created over 50 jobs (and counting) and contributed to sustainable development in the region.</p>
        </div>
      </div>

      <!-- Future Goals -->
      <div class="row justify-content-center mt-4">
        <div class="col-12 col-lg-10">
          <h3 class="text-warning mb-4">Our Future</h3>
          <p class="text-dark mb-3">Looking ahead, Sindana Construction Co. aims to expand our reach across East Africa by 2035, introducing smart construction technologies and eco-friendly supply chains. We plan to launch a client portal for real-time project tracking and enhance our training programs to empower more local talent.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .about {
    margin-top: 2rem;
    background-color: #f8f9fa; 
  }

  .about-us {
    height: 45vh; /* Adjusted for better balance */
    background: url('https://images.unsplash.com/photo-1710239667937-5285c533647e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center;
    background-size: cover;
    position: relative;
    margin-bottom: 2rem;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.5); /* Darker overlay for readability */
    z-index: 1;
  }

  .position-relative.z-10 {
    z-index: 10;
  }

  .card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .text-gray-300 {
    color: #6c757d;
  }

  .text-dark {
    color: #212529;
  }

  @media (max-width: 768px) {
    .about-us {
      height: 30vh;
    }

    .card-title {
      font-size: 1.5rem;
    }
    .display-4 {
      font-size: 2rem;
    }
    .display-3 {
      font-size: 2rem;
    }
  }
</style>