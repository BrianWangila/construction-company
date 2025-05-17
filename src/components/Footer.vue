<template>
    <footer class="bg-dark text-white pt-5 pb-3">
      <div class="container">
        <div class="row g-4">
          <!-- Company Info Section -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="text-center text-lg-start">
              <img src="/logo.PNG" alt="Sindana Construction Logo" class="footer-logo mb-3">
              <p class="text-gray-300">Sindana Construction Co. is a leading provider of construction services and general supplies in Kenya, based in Bungoma since 2025. We deliver quality, innovation, and sustainability in every project.</p>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="col-12 col-md-6 col-lg-3">
            <h5 class="text-warning mb-3">Quick Links</h5>
            <ul class="list-unstyled">
              <li><router-link to="/" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Home</router-link></li>
              <li><router-link to="/supplies" class="text-gray-300 hover:text-teal-500 transition-all duration-300">General Supplies</router-link></li>
              <li><router-link to="/services" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Our Services</router-link></li>
              <li><router-link to="/projects" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Our Projects</router-link></li>
              <li><a href="#" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Careers</a></li>
            </ul>
          </div>

          <!-- Contact Information Section -->
          <div class="col-12 col-md-6 col-lg-3">
            <h5 class="text-warning mb-3">Contact Us</h5>
            <ul class="list-unstyled text-gray-300">
              <li><strong>Address:</strong> P.O Box 550, Bungoma, Kenya</li>
              <li><strong>Phone:</strong> +254 714 949 268</li>
              <li><strong>Email:</strong> <a href="mailto:info@sindana.co.ke" class="text-warning hover:text-teal-500 transition-all duration-300">info@sindana.co.ke</a></li>
              <li><strong>Office Hours:</strong> Mon–Fri, 8:00 AM–5:00 PM</li>
              <li class="mt-2">
                <strong>Follow Us:</strong><br>
                <a href="#" class="text-warning hover:text-teal-500 me-2"><i class="bi bi-facebook"></i></a>
                <a href="#" class="text-warning hover:text-teal-500 me-2"><i class="bi bi-twitter"></i></a>
                <a href="#" class="text-warning hover:text-teal-500 me-2"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="text-warning hover:text-teal-500"><i class="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>

          <!-- Newsletter Signup Section -->
          <div class="col-12 col-md-6 col-lg-3">
            <h5 class="text-warning mb-3">Stay Updated</h5>
            <p class="text-gray-300">Subscribe to our newsletter for the latest updates on projects, supplies, and industry news.</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Enter your email" aria-label="Email for newsletter" disabled>
              <button class="btn btn-warning text-dark" type="button" disabled>Subscribe</button>
            </div>
            <small class="text-gray-500">*Newsletter signup coming soon!</small>
          </div>
        </div>

        <!-- Divider -->
        <hr class="border-gray-600 my-4">

        <!-- Copyright Section -->
        <div class="copyright text-center">
          <p class="text-gray-400 mb-0">&copy;2025 Sindana Construction Co. All Rights Reserved.</p>
          <p class="text-gray-900 mb-0 fs-9">Designed by <span>Ravvytek Solutions</span></p>
          <p class="text-gray-400 mt-1">
            <a href="#" class="text-warning hover:text-teal-500 transition-all duration-300">Privacy Policy</a> | 
            <a href="#" class="text-warning hover:text-teal-500 transition-all duration-300">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
</template>



<script setup>


</script>



<style scoped>
  .footer-logo {
    height: 7.5rem;
    width: auto;
  }
  footer {
    background: linear-gradient(135deg, #1a2133 0%, #010a13 100%);
  }
  footer a {
    text-decoration: none;
  }
  footer ul li {
    margin-bottom: 0.5rem;
  }
  footer .bi {
    font-size: 1.5rem;
  }

  
</style>