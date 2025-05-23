<template>
  <div class="home-page container-fluid p-0 py-5 mt-3">
    <!-- Hero Carousel -->
    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="header-section position-relative d-flex align-items-center justify-content-center text-center" style="height: 70vh; background: url('https://images.unsplash.com/photo-1712671596312-61d2bfa501ee?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center; background-size: cover;">
            <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-dark opacity-40"></div>
            <div class="position-relative z-10">
              <h1 class="display-3 text-warning fw-bold mb-1  animate__animated animate__fadeInUp">Welcome to Sindana Construction Co.</h1>
              <h3 class="text-white animate__animated animate__fadeInUp" style="animation-delay: 0.2s">Where Excellence Meets Innovation</h3>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="header-section position-relative d-flex align-items-center justify-content-center text-center" style="height: 70vh; background: url('https://images.unsplash.com/photo-1656646424878-7c4b91097175?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center; background-size: cover;">
            <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-teal-500 opacity-40"></div>
            <div class="position-relative z-10">
              <h1 class="display-3 text-warning fw-bold mb-1  animate__animated animate__fadeInUp">Building Your Future</h1>
              <h3 class="text-white animate__animated animate__fadeInUp" style="animation-delay: 0.2s">Sustainable Solutions for Every Project</h3>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="header-section position-relative d-flex align-items-center justify-content-center text-center" style="height: 70vh; background: url('https://images.squarespace-cdn.com/content/v1/60e155da3e6d353c239ba417/abe93799-d68f-4bcf-bedb-bb6f7ee54eaa/CARBNSTUDIO+ARCHITECT+SPRING+VALLEY+DESIGN+MODERN+DESIGN+LUXURY+HOMES++%283%29.jpg') no-repeat center center; background-size: cover;">
            <div class="overlay position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-orange-500 opacity-40"></div>
            <div class="position-relative z-10">
              <h1 class="display-3 text-warning fw-bold mb-1 animate__animated animate__fadeInUp">Transforming Landscapes</h1>
              <h3 class="text-white animate__animated animate__fadeInUp" style="animation-delay: 0.2s">High-Quality Craftsmanship</h3>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Services Section -->
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 text-warning animate__animated animate__fadeInUp" style="animation-delay: 0.4s">Our Services</h2>
          <p class="lead text-black animate__animated animate__fadeIn" style="animation-delay: 0.6s">Explore our comprehensive construction and supply solutions tailored to your needs.</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 bg-gradient bg-teal-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 0.8s">
            <i class="bi bi-tools display-5 mb-3"></i>
            <h4 class="card-title mb-3">Construction Excellence</h4>
            <p class="card-text mb-3">From foundations to finishes, we deliver top-quality construction with advanced techniques and sustainable practices.</p>
            <a href="/services" class="btn btn-warning text-dark fw-bold transition-all duration-500 hover:bg-orange-500">Learn More</a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 bg-gradient bg-purple-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 1.0s">
            <i class="bi bi-box-seam display-5 mb-3"></i>
            <h4 class="card-title mb-3">General Supplies</h4>
            <p class="card-text mb-3">We provide office stationery, building materials, electronics, and more with nationwide delivery.</p>
            <a href="/supplies" class="btn btn-warning text-dark fw-bold transition-all duration-500 hover:bg-orange-500">Explore Supplies</a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 bg-gradient bg-orange-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 1.2s">
            <i class="bi bi-gear-wide-connected display-5 mb-3"></i>
            <h4 class="card-title mb-3">Maintenance & Support</h4>
            <p class="card-text mb-3">Ongoing support for properties and equipment, ensuring long-term reliability and performance.</p>
            <a href="/services" class="btn btn-warning text-dark fw-bold transition-all duration-500 hover:bg-teal-500">Get Support</a>
          </div>
        </div>
      </div>
    </div>

    <!-- About Us Section -->
    <div class="container py-5">
      <div class="row justify-content-center align-items-center">
        <div class="learn-more col-12 col-lg-6">
          <h2 class="text-warning mb-4 animate__animated animate__fadeInUp" style="animation-delay: 1.4s">About Us</h2>
          <p class="text-dark mb-3 animate__animated animate__fadeIn" style="animation-delay: 1.6s">Founded in Bungoma, Kenya, Sindana Construction Co. began with a mission to deliver quality construction and supply solutions tailored to a dynamic world. Our vision is to be Kenya’s leading provider of innovative, sustainable services, transforming landscapes and supporting communities.</p>
          <p class="text-dark mb-3 animate__animated animate__fadeIn" style="animation-delay: 1.8s">With a skilled team, advanced equipment, and a commitment to sustainability, we serve clients nationwide. Beyond construction, we excel in general supplies, catering to diverse needs with integrity and excellence.</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-light text-dark animate__animated animate__fadeIn" style="animation-delay: 2.0s"><i class="bi bi-check-circle text-warning me-2"></i> Integrity in every project</li>
            <li class="list-group-item bg-light text-dark animate__animated animate__fadeIn" style="animation-delay: 2.2s"><i class="bi bi-lightbulb text-warning me-2"></i> Innovative solutions</li>
            <li class="list-group-item bg-light text-dark animate__animated animate__fadeIn" style="animation-delay: 2.4s"><i class="bi bi-star text-warning me-2"></i> Uncompromising excellence</li>
          </ul>
          <a href="/about" class="btn btn-warning mt-3 text-dark fw-bold transition-all duration-500 hover:bg-teal-500 animate__animated animate__fadeIn" style="animation-delay: 2.6s">Learn More</a>
        </div>
        <div class="col-12 col-lg-6">
          <img src="https://images.unsplash.com/photo-1712671596312-61d2bfa501ee?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Construction Site" class="img-fluid rounded-4 shadow-lg animate__animated animate__fadeIn" style="animation-delay: 2.8s">
        </div>
      </div>
    </div>

    <!-- Our Team Section -->
    <!-- <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 text-warning animate__animated animate__fadeInUp" style="animation-delay: 3.0s">Our Team</h2>
          <p class="lead text-black animate__animated animate__fadeIn" style="animation-delay: 3.2s">Meet the skilled professionals driving our success with expertise and dedication.</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-light text-dark p-3 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 3.4s">
            <img src="https://images.unsplash.com/photo-1688841747582-41097036109d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" class="card-img-top rounded-3">
            <div class="card-body text-center">
              <h5 class="card-title text-warning">John Mwangi</h5>
              <p class="card-text text-danger">Lead Engineer</p>
              <p class="card-text">Over 15 years of experience in structural design and project management.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-light text-dark p-3 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 3.6s">
            <img src="https://images.unsplash.com/photo-1666867540898-aaa1993ffabc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhZCUyMEVuZ2luZWVyJTIwZmVtYWxlJTIwYWZyaWNhbnxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member 2" class="card-img-top rounded-3">
            <div class="card-body text-center">
              <h5 class="card-title text-warning">Jane Wambui</h5>
              <p class="card-text text-danger">Supply Chain Manager</p>
              <p class="card-text">Expert in logistics with a focus on nationwide delivery efficiency.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-light text-dark p-3 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 3.8s">
            <img src="https://plus.unsplash.com/premium_photo-1683134366494-bb44ea2cc847?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 3" class="card-img-top rounded-3">
            <div class="card-body text-center">
              <h5 class="card-title text-warning">Peter Kamau</h5>
              <p class="card-text text-danger">Project Supervisor</p>
              <p class="card-text">Oversees construction sites with a keen eye for quality and safety.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-light text-dark p-3 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 4.0s">
            <img src="https://images.unsplash.com/photo-1686628332798-757c624c4b08?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 4" class="card-img-top rounded-3">
            <div class="card-body text-center">
              <h5 class="card-title text-warning">Mary Achieng</h5>
              <p class="card-text text-danger">Finance Officer</p>
              <p class="card-text">Manages budgets and ensures cost-effective project execution.</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Latest Projects Section -->
    <!-- <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 text-warning animate__animated animate__fadeInUp" style="animation-delay: 4.2s">Our Latest Projects</h2>
          <p class="lead text-black animate__animated animate__fadeIn" style="animation-delay: 4.4s">Discover our innovative projects shaping Bungoma and beyond with cutting-edge engineering.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 proj-images">
          <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card h-100 bg-dark text-white">
                  <img src="https://images.unsplash.com/photo-1616764469868-7d70683e8b45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top h-10 w-auto" alt="Project Alpha">
                  <div class="card-body">
                    <h5 class="card-title text-warning">Project Alpha: Modern Office Complex</h5>
                    <p class="card-text">Featuring solar panels and energy-efficient design for 15 businesses.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card h-100 bg-dark text-white">
                  <img src="https://images.squarespace-cdn.com/content/v1/60e155da3e6d353c239ba417/abe93799-d68f-4bcf-bedb-bb6f7ee54eaa/CARBNSTUDIO+ARCHITECT+SPRING+VALLEY+DESIGN+MODERN+DESIGN+LUXURY+HOMES++%283%29.jpg" class="card-img-top" alt="Project Beta">
                  <div class="card-body">
                    <h5 class="card-title text-warning">Project Beta: Residential Villas</h5>
                    <p class="card-text">Eco-friendly villas, reducing energy use by 30% for 15 families.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card h-100 bg-dark text-white">
                  <img src="https://images.unsplash.com/photo-1575281923032-f40d94ef6160?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="Project Gamma">
                  <div class="card-body">
                    <h5 class="card-title text-warning">Project Gamma: Infrastructure Upgrade</h5>
                    <p class="card-text">Ongoing, upgrading 50 km of roads for improved connectivity.</p>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon bg-warning" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon bg-warning" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <router-link to="/projects" class="btn btn-warning mt-3 text-dark fw-bold transition-all duration-500 hover:bg-teal-500 d-block mx-auto" style="width: 200px;">View All Projects</router-link>
        </div>
      </div>
    </div> -->

    <!-- Why Sindana Stands Out Section -->
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 text-center mb-5">
          <h2 class="display-4 text-warning animate__animated animate__fadeInUp" style="animation-delay: 4.6s">Why Sindana Stands Out</h2>
          <p class="lead text-black animate__animated animate__fadeIn" style="animation-delay: 4.8s">With over a decade of experience, we deliver exceptional value with innovation and reliability.</p>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-gradient bg-teal-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 5.0s">
            <i class="bi bi-clock-history display-5 mb-3"></i>
            <h5 class="card-title">10+ Years Engineers Experience</h5>
            <p class="card-text">Proven expertise in construction and supply solutions.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-gradient bg-purple-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 5.2s">
            <i class="bi bi-tools display-5 mb-3"></i>
            <h5 class="card-title">Advanced Technology</h5>
            <p class="card-text">Utilizing cutting-edge tools for precision and efficiency.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-gradient bg-orange-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 5.4s">
            <i class="bi bi-truck display-5 mb-3"></i>
            <h5 class="card-title">Nationwide Delivery</h5>
            <p class="card-text">Reliable supply chain reaching every corner of Kenya.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card h-100 bg-gradient bg-indigo-500 text-white p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 5.6s">
            <i class="bi bi-shield-check display-5 mb-3"></i>
            <h5 class="card-title">Sustainability Focus</h5>
            <p class="card-text">Eco-friendly practices reducing environmental impact by 25%.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    new bootstrap.Carousel(document.getElementById('heroCarousel'), {
      interval: 5000,
      ride: 'carousel'
    });
    // new bootstrap.Carousel(document.getElementById('projectCarousel'), {
    //   interval: 3000,
    //   ride: 'carousel'
    // });
  });

</script>



<style scoped>
  .home-page {
    margin-top: 2rem;
  }

  .header-section {
    position: relative;
    height: 70vh;
    background-size: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100;
    height: 100;
    z-index: 1;
  }

  .z-10 {
    z-index: 10;
  }

  .flashing-text {
    animation: flash 3s infinite ease-in-out;
  }

  @keyframes flash {
    0%, 100% { opacity: 1; text-shadow: 0 0 20px #f97316; }
    50% { opacity: 0.5; text-shadow: none; }
  }

  .card {
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .bg-teal-500 { background-color: #14b8a6; }
  .bg-purple-500 { background-color: #6b46c1; }
  .bg-orange-500 { background-color: #f97316; }
  .bg-indigo-500 { background-color: #5e60ce; }

  .animate__animated.animate__fadeInUp {
    --animate-duration: 0.8s;
  }

  .proj-images img {
    height: 30rem;
  }

  @media (max-width: 768px) {
    .header-section {
      height: 50vh;
    }
    .display-3 {
      font-size: 2rem;
    }
    .col-12.col-md-6.col-lg-3 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .learn-more {
      margin-bottom: 1rem;
    }
  }
</style>