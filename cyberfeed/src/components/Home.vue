<template>
  <div>
    <div class="mb-4">
      <SearchBar @search="handleSearch" />
    </div>
    <div class="mb-4">
      <Categories @select-category="handleCategorySelect" />
    </div>
    <FeedList :feeds="filteredFeeds" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import Categories from '@/components/Categories.vue';
import FeedList from '@/components/FeedList.vue';
import RSSParser from 'rss-parser';

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
    Categories,
    FeedList
  },
  setup() {
    const feeds = ref<any[]>([]);
    const filteredFeeds = ref<any[]>([]);

    async function fetchRSS() {
      const parser = new RSSParser();
      const url = 'URL_DU_FLUX_RSS'; // Remplacez par l'URL du flux RSS que vous souhaitez utiliser
      const feed = await parser.parseURL(url);
      feeds.value = feed.items;
      filteredFeeds.value = feeds.value;
    }

    function handleSearch(query: string) {
      filteredFeeds.value = feeds.value.filter(feed => {
        return feed.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    function handleCategorySelect(category: string) {
      // Ajoutez la logique pour filtrer par catégorie si nécessaire
    }

    fetchRSS();

    return {
      filteredFeeds,
      handleSearch,
      handleCategorySelect
    };
  }
});
</script>
