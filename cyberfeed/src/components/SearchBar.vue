<template>
  <input 
    type="text" 
    v-model="query" 
    @input="search" 
    placeholder="Search..."
    class="w-full md:w-1/2 lg:w-1/3 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
  >
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  emits: ['search'],
  setup(props, { emit }) {
    const query = ref('');

    function search() {
      emit('search', query.value);
    }

    return {
      query,
      search
    };
  }
});
</script>
