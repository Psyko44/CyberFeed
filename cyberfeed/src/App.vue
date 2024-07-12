<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <header class=" p-4 dark:text-white text-black ">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex justify-evenly w-full items-center">
          <h1 class="text-3xl sm:text-4xl font-bold mb-4">CyberFeed</h1>
          <p class="text-lg sm:text-xl mb-4">
            Explorez l'univers de la cybersécurité avec CyberFeed. <br> Découvrez les dernières actualités, tendances et analyses pointues <br> pour rester à jour et sécurisé dans un monde numérique en constante évolution.
          </p>
          <button @click="toggleDarkMode" class="bg-gray-800 text-white py-2 px-4 rounded dark:bg-gray-200 dark:text-gray-900">
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </header>

    <div class="banner-container flex items-center justify-center">
  <img src="@/assets/img/header.png" alt="Header Background" class="w-full h-auto">
</div>


    <main class="container mx-auto py-6">
      <Home />
    </main>

    

    <footer class="bg-gray-200 py-4 mt-auto">
      <div class="container mx-auto text-center text-gray-600">
        <p>Copyright © 2024 CyberFeed. Tous droits réservés.</p>
        <p>Développé par <a href="https://github.com/Psyko44" target="_blank" class="text-gray-800 hover:text-gray-900">Psyko44</a></p>
        <p>Release version - <span class="text-gray-800 font-bold">v0.1.0</span></p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Home from './components/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  setup() {
    const isDarkMode = ref(false);

    function toggleDarkMode() {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    return {
      isDarkMode,
      toggleDarkMode
    };
  }
});
</script>

<style scoped>
.banner-container {
  
  max-height: 60vh; /* ou toute autre hauteur que vous souhaitez */
  overflow: hidden;
}
</style>
