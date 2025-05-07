<template>
  <div class="row g-4">
    <div v-for="item in supplies" :key="item.id" class="col-12 col-md-6 col-lg-4">
      <div class="card bg-dark text-white h-100 shadow-sm transition-all duration-500 hover:shadow-md animate__animated animate__fadeInUp" :style="{ 'animation-delay': `${(item.id - 1) * 0.2}s` }">
        <img :src="item.image" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h4 class="card-title text-warning">{{ item.title }}</h4>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
  import { ref } from 'vue';

  const supplies = ref([
    { id: 1, title: 'Office Supplies', description: 'Envelopes, notebooks, pens, and electronic products from top brands.', image: 'https://www.nespete.com/images/general-office-supplies-services-kenya.jpg' },
    { id: 2, title: 'Building Materials', description: 'Fencing, timber, plumbing, and electrical supplies.', image: 'https://marxupvcgutters.com/wp-content/uploads/2021/06/building-materials-kenya.jpg' },
    { id: 3, title: 'Cleaning & PPE', description: 'Detergents, gloves, masks, and safety gear.', image: 'https://media.licdn.com/dms/image/v2/C5612AQF7aBcuY2VDqA/article-inline_image-shrink_400_744/article-inline_image-shrink_400_744/0/1520213943328?e=1751500800&v=beta&t=IArfdAYBqq1Cd_25hGrZp0nZ6AZoQYXHtActD42RYE4' },
    { id: 4, title: 'Electrical Supplies', description: 'Wires, switches, and fixtures for power solutions.', image: 'https://vastresult.com/wp-content/uploads/2022/10/subbanner-electrical-wirings.png' },
    { id: 5, title: 'Painting Materials', description: 'High-quality paints and tools for vibrant finishes.', image: 'https://mednikriverbend.com/cdn/shop/collections/painting-industry-banner-min.jpg?v=1567028052' },
    { id: 6, title: 'Electronics', description: 'Printers, scanners, computers, and UPS systems.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_czbF4iuPxwH6EdOUL9ELkRqm_-xCbbXFPQ&s' },
    { id: 7, title: 'Food Supplies', description: 'Rice, beans, cooking oil, and beverages for bulk needs.', image: 'https://abountifulkitchen.com/wp-content/uploads/2020/03/fullsizeoutput_16bc6-683x1024.jpeg' },
    { id: 8, title: 'Office Automation', description: 'Photocopiers, fax machines, and shredders.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6w_mo6F7mrlqY0BOt1obgD3KMicvcB4qq4A&s' }
  ]);
</script>



<style scoped>
  .card {
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .card-img-top {
    object-fit: cover;
    height: 200px;
  }

  .animate__animated.animate__fadeInUp {
    --animate-duration: 0.8s;
  }

  @media (max-width: 768px) {
    .col-12.col-md-6.col-lg-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>