<template>
  <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <li v-for="feed in feeds" :key="feed.guid" class="p-4 bg-white rounded shadow hover:bg-gray-50 transition dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
      <a :href="feed.link" class="text-blue-600 font-bold dark:text-blue-400 block">{{ feed.title }}</a>
      <img v-if="feed.image" :src="feed.image" alt="Image" class="w-full h-auto mb-2">
      <p>{{ feed.description }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'FeedList',
  props: {
    feeds: {
      type: Array as PropType<any[]>,
      required: true
    }
  }
});
</script>


