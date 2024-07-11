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
import { defineComponent, ref, onMounted } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import Categories from '@/components/Categories.vue';
import FeedList from '@/components/FeedList.vue';
import parser from 'RSSParser';
import rssUrls from '../components/rssFeeds'; // Importation du fichier rssFeeds.ts

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
    Categories,
    FeedList
  },
  setup() {
    const title = 'Hello Vue.js with TypeScript';
    const feeds = ref([]);
    const filteredFeeds = ref([]);

    async function fetchRSS() {
      const parser = new RSSParser();
      const url = 'https://feeds.feedburner.com/TheHackersNews'; // Remplacez par l'URL du flux RSS que vous souhaitez utiliser
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

    onMounted(() => {
      console.log('Component mounted');
      fetchRSS();
    });

    return {
      filteredFeeds,
      handleSearch,
      handleCategorySelect
    };
  }
});
</script>
