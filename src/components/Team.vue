<template>
  <div class="text-center mt-5">
    <h2 class="display-5 text-warning mb-4 animate__animated animate__slideInUp">Meet Our Expert Team</h2>
    <div class="row g-4">
      <div v-for="member in team" :key="member.id" class="col-12 col-md-6 col-lg-3">
        <div class="card bg-dark text-white h-100 shadow-sm transition-all duration-500 hover:shadow-md">
          <img :src="member.image + member.name" class="card-img-top rounded-circle mx-auto mt-3" style="width: 150px; height: 150px;">
          <div class="card-body">
            <h5 class="card-title text-warning">{{ member.role }}</h5>
            <p class="card-text">{{ member.name }}</p>
            <p class="card-text">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
  import { ref } from 'vue';

  const team = ref([
    { id: 1, role: 'Director', name: 'John Mwangi', description: 'Leads with vision and innovation.', image: 'https://images.pexels.com/photos/9929678/pexels-photo-9929678.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 2, role: 'Operations Manager', name: 'Jane Wambui', description: 'Oversees projects with precision.', image: 'https://images.pexels.com/photos/1339906/pexels-photo-1339906.jpeg?cs=srgb&dl=pexels-githirinick-1339906.jpg&fm=jpg' },
    { id: 3, role: 'Marketing Manager', name: 'Peter Ochieng', description: 'Drives brand growth creatively.', image: 'https://images.pexels.com/photos/1339906/pexels-photo-1339906.jpeg?cs=srgb&dl=pexels-githirinick-1339906.jpg&fm=jpg' },
    { id: 4, role: 'Chief Engineer', name: 'Sarah Kimani', description: 'Ensures technical excellence.', image: 'https://images.pexels.com/photos/1339906/pexels-photo-1339906.jpeg?cs=srgb&dl=pexels-githirinick-1339906.jpg&fm=jpg' }
  ]);
</script>