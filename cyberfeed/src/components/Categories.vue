<template>
  <select 
    v-model="selectedCategory" 
    @change="selectCategory"
    class="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
  >
    <option value="all">All Categories</option>
    <option value="category1">Category 1</option>
    <option value="category2">Category 2</option>
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
