<template>
  <select 
    v-model="selectedCategory" 
    @change="selectCategory"
    class="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
  >
    <option value="all">All Categories</option>
    <option value="CVE">CVE</option>
    <option value="Malware">Malware</option>
    <option value="Crypto">Crypto</option>
    <option value="Phishing">Phishing</option>
    <option value="DDoS">DDoS</option>
    <option value="Data Breach">Data Breach</option>
    <option value="Hacking">Hacking</option>
    <option value="APT">APT</option>
    <option value="Zero-Day">Zero-Day</option>
    <option value="Social Engineering">Social Engineering</option>
    <!-- Ajoutez d'autres options de catégorie si nécessaire -->
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Categories',
  emits: ['select-category'],
  setup(props, { emit }) {
    const selectedCategory = ref('all');

    function selectCategory() {
      emit('select-category', selectedCategory.value);
    }

    return {
      selectedCategory,
      selectCategory
    };
  }
});
</script>
