<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <header class="bg-blue-600 p-4 text-white dark:bg-blue-800">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">RSS Feed Reader</h1>
        <button @click="toggleDarkMode" class="bg-gray-800 text-white py-1 px-2 rounded dark:bg-gray-200 dark:text-gray-900">
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </header>
    <main class="container mx-auto py-6">
      <Home />
    </main>
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
