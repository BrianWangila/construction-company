<template>
    <footer class="bg-dark text-white pt-5 pb-3">
      <div class="container">
        <div class="row g-4">
          <!-- Company Info Section -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="text-center text-lg-start">
              <img src="/logo.PNG" alt="Sindana Construction Logo" class="footer-logo mb-3">
              <p class="text-gray-300">Sindana Construction Co. is a leading provider of construction services and general supplies in Kenya, based in Bungoma. We deliver quality, innovation, and sustainability in every project.</p>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="footer-mobile col-12 col-md-6 col-lg-3">
            <h5 class="text-warning mb-3">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="/" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Home</a></li>
              <li><a href="/supplies" class="text-gray-300 hover:text-teal-500 transition-all duration-300">General Supplies</a></li>
              <li><a href="/services" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Our Services</a></li>
              <!-- <li><a href="/projects" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Our Projects</a></li> -->
              <li><a href="#" class="text-gray-300 hover:text-teal-500 transition-all duration-300">Careers</a></li>
            </ul>
          </div>

          <!-- Contact Information Section -->
          <div class="footer-mobile col-12 col-md-6 col-lg-3">
            <h5 class="text-warning mb-3">Contact Us</h5>
            <ul class="list-unstyled text-gray-300">
              <li><strong>Address:</strong> P.O Box 550, Bungoma, Kenya</li>               
              <li><strong>Phone:</strong> <a href="tel:+254714949268" class="text-warning hover:text-teal-500 transition-all duration-300">+254 714 949 268</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/254714949268" class="text-warning hover:text-teal-500 transition-all duration-300">+254 714 949 268</a></li>
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
          <div class="footer-mobile col-12 col-md-6 col-lg-3">
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


  /* on mobile view */
  @media (max-width: 768px) {
    .footer-logo {
      height: 5rem;
    }
    footer .bi {
      font-size: 1.2rem;
    }
    footer h5 {
      font-size: 1.25rem;
    }
    footer p {
      font-size: 0.9rem;
    }

    .footer-mobile {
      text-align: center;
    }

  }

  
</style>