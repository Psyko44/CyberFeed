<template>
  <ul class="space-y-4">
    <li v-for="feed in feeds" :key="feed.guid" class="p-4 bg-white rounded shadow hover:bg-gray-50 transition dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
      <a :href="feed.link" class="text-blue-600 font-bold dark:text-blue-400">{{ feed.title }}</a>
      <p>{{ feed.contentSnippet }}</p>
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
