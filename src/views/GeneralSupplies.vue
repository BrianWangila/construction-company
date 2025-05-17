<template>
  <div class="general-supplies-page container-fluid p-0 py-5 mt-3">
    <!-- Header Section with Background Image -->
    <header class="header-section position-relative d-flex align-items-center justify-content-center text-center">
      <div class="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div class="position-relative z-10">
        <h2 class="display-3 text-warning fw-bold mb-1 animate__animated animate__fadeInUp">Discover Our General Supplies</h2>
        <h4 class="text-white animate__animated animate__fadeInUp" style="animation-delay: 0.2s">Elevating Your Business with Quality Products Across Kenya</h4>
      </div>
    </header>

    <!-- Overview Section -->
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <h2 class="text-warning mb-4 animate__animated animate__fadeIn" style="animation-delay: 0.4s">About Our General Supplies</h2>
          <p class="text-dark mb-3 animate__animated animate__fadeIn" style="animation-delay: 0.6s">Since 2025, Sindana Construction Co. has expanded beyond construction to become a leading provider of general supplies in Kenya. We cater to small businesses, corporate entities, government departments, and individual clients, offering a comprehensive range of products from office essentials to industrial materials. Our nationwide delivery network ensures that clients in urban centers and remote areas receive top-tier quality at competitive prices.</p>
          <p class="text-dark animate__animated animate__fadeIn" style="animation-delay: 0.8s">Drawing on our expertise in supply chain management, we partner with trusted manufacturers and distributors to provide customized solutions. Whether you need stationery for your office, electronics for your operations, or materials for maintenance, we deliver with precision and care, supported by our skilled logistics team.</p>
        </div>
      </div>

      <!-- Supply Categories -->
      <div class="row justify-content-center mt-5">
        <div class="col-12 col-lg-10">
          <h2 class="text-warning mb-4 animate__animated animate__fadeIn" style="animation-delay: 1.0s">Our Supply Categories</h2>
          <SupplyShowcase />
        </div>
      </div>

      <!-- Expanded Supply Details -->
      <div class="row justify-content-center mt-5">
        <div class="col-12 col-lg-10">
          <div class="row g-4">
            <!-- Office Stationery -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 1.2s">
                <h5 class="card-title text-warning">Office Supplies</h5>
                <p class="card-text mb-3">We supply a vast array of office essentials, including envelopes, notebooks, pens, binders, diaries, and electronics such printers and computers from leading brands. Our products are designed for durability and efficiency, supporting daily office operations.</p>
                <p class="card-text"><strong>Benefits:</strong> Bulk discounts and nationwide delivery to keep your office stocked and productive.</p>
              </div>
            </div>

            <!-- Building Materials -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 1.4s">
                <h5 class="card-title text-warning">Building Materials</h5>
                <p class="card-text mb-3">Our building materials include fencing (barbed wire, chain-link), timber, plumbing supplies (pipes, fittings), electrical components (wires, switches), and more, sourced from Kenya’s top manufacturers.</p>
                <p class="card-text"><strong>Benefits:</strong> Tailored solutions and delivery to complex sites with truck-mounted forklifts.</p>
              </div>
            </div>

            <!-- Cleaning & PPE -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 1.6s">
                <h5 class="card-title text-warning">Cleaning & PPE</h5>
                <p class="card-text mb-3">We provide detergents, disinfectants, gloves, masks, and safety gear to ensure hygiene and protection in workplaces and construction sites, meeting health and safety standards.</p>
                <p class="card-text"><strong>Benefits:</strong> High-quality PPE for compliance and cleaning products for a safe environment.</p>
              </div>
            </div>

            <!-- Electrical Supplies -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 1.8s">
                <h5 class="card-title text-warning">Electrical Supplies</h5>
                <p class="card-text mb-3">Our electrical supplies include wires, switches, sockets, circuit breakers, and lighting fixtures, designed for safe and efficient power solutions in any setting.</p>
                <p class="card-text"><strong>Benefits:</strong> Certified products with technical support for installation.</p>
              </div>
            </div>

            <!-- Painting Materials -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 2.0s">
                <h5 class="card-title text-warning">Painting Materials</h5>
                <p class="card-text mb-3">We offer high-quality paints, brushes, rollers, and primers from brands like Dulux and Crown, perfect for vibrant and long-lasting finishes on walls and surfaces.</p>
                <p class="card-text"><strong>Benefits:</strong> Weather-resistant options and color consultation services.</p>
              </div>
            </div>

            <!-- Electronics (Additional Category) -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 2.2s">
                <h5 class="card-title text-warning">Electronics</h5>
                <p class="card-text mb-3">We supply office electronics such as printers, scanners, computers, and UPS systems from trusted brands like HP and Dell, ensuring reliable office automation.</p>
                <p class="card-text"><strong>Benefits:</strong> Warranty support and installation assistance for seamless integration.</p>
              </div>
            </div>

            <!-- Food Supplies (Additional Category) -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 2.4s">
                <h5 class="card-title text-warning">Food Supplies</h5>
                <p class="card-text mb-3">We provide bulk food items like rice, beans, cooking oil, and beverages for corporate canteens, events, and government contracts, sourced from local farmers.</p>
                <p class="card-text"><strong>Benefits:</strong> Fresh, affordable options with flexible delivery schedules.</p>
              </div>
            </div>

            <!-- Office Automation (Additional Category) -->
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card bg-light text-dark p-4 rounded-4 shadow-lg transition-all duration-500 hover:shadow-xl animate__animated animate__fadeInUp" style="animation-delay: 2.6s">
                <h5 class="card-title text-warning">Office Automation</h5>
                <p class="card-text mb-3">Our office automation supplies include photocopiers, fax machines, and shredders, enhancing productivity with modern technology solutions.</p>
                <p class="card-text"><strong>Benefits:</strong> Maintenance contracts and training for optimal use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Delivery & Logistics -->
      <div class="row justify-content-center mt-5">
        <div class="col-12 col-lg-10">
          <h2 class="text-warning mb-4 animate__animated animate__fadeIn" style="animation-delay: 2.8s">Delivery & Logistics Excellence</h2>
          <div class="card bg-gradient bg-orange-500 text-white p-4 rounded-4 shadow-lg">
            <p class="card-text mb-3 animate__animated animate__fadeIn" style="animation-delay: 3.0s">Our logistics team ensures timely and reliable delivery across Kenya, equipped with truck-mounted forklifts and skilled personnel to handle challenging sites. We offer flexible scheduling, real-time tracking, and safe handling of goods, achieving a 95% on-time delivery rate.</p>
            <p class="card-text animate__animated animate__fadeIn" style="animation-delay: 3.2s">From urban warehouses to rural project locations, we prioritize efficiency and safety, ensuring your supplies arrive in perfect condition to keep your operations running smoothly.</p>
          </div>
        </div>
      </div>

      <!-- Client Success Stories -->
      <!-- <div class="row justify-content-center mt-5">
        <div class="col-12 col-lg-10">
          <h2 class="text-warning mb-4 animate__animated animate__fadeIn" style="animation-delay: 3.4s">Client Success Stories</h2>
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <div class="card bg-light text-dark p-3 h-100 animate__animated animate__fadeInUp" style="animation-delay: 3.6s">
                <p class="card-text">"Sindana supplied our office with stationery and electronics, saving us 15% on costs with prompt delivery." – Jane Wambui, Office Manager</p>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card bg-light text-dark p-3 h-100 animate__animated animate__fadeInUp" style="animation-delay: 3.8s">
                <p class="card-text">"Their building materials and PPE kept our construction site safe and on schedule, even during rainy seasons." – Peter Kamau, Contractor</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Call to Action -->
      <div class="row justify-content-center mt-5 text-center">
        <div class="col-12 col-lg-10">
          <h2 class="text-warning mb-4 animate__animated animate__fadeIn" style="animation-delay: 4.0s">Need General Supplies?</h2>
          <p class="text-dark mb-4 animate__animated animate__fadeIn" style="animation-delay: 4.2s">Request a quote today or contact us to discuss your supply needs. We’re here to support your business with quality and reliability!</p>
          <a href="mailto:info@sindana.co.ke" class="btn btn-warning text-dark fw-bold transition-all duration-500 hover:bg-teal-500 animate__animated animate__fadeIn" style="animation-delay: 4.4s">Request a Quote</a>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
  import { onMounted } from 'vue';
  import SupplyShowcase from '@/components/SupplyShowcase.vue';

  onMounted(() => {
    // Ensure animations are loaded with Animate.css
  });
</script>



<style scoped>
  .general-supplies-page {
    background-color: #f8f9fa;
  }

  .header-section {
    height: 45vh;
    background: url('https://company-profile-writing.weebly.com/uploads/2/2/1/8/22186358/published/general-supplies.jpg?1588887056') no-repeat center center;
    background-size: cover;
    position: relative;
  }

  .overlay {
    background: rgba(0, 0, 0, 0.5);
  }

  .z-10 {
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

  .bg-purple-500 { background-color: #6b46c1; }
  .bg-orange-500 { background-color: #f97316; }

  .animate__animated.animate__fadeInUp {
    --animate-duration: 0.8s;
  }

  @media (max-width: 768px) {
    .header-section {
      height: 40vh;
    }
    .display-3 {
      font-size: 2rem;
    }
    .col-12.col-md-6.col-lg-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>