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
import { defineComponent, ref, onMounted } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import Categories from '../components/Categories.vue'
import FeedList from '../components/FeedList.vue'
import { fetchRSSFeed } from '../components/rssService'
import rssUrls from '../components/rssFeeds' // Importation du fichier rssFeeds.ts

export default defineComponent({
  name: 'Home',
  components: {
    SearchBar,
    Categories,
    FeedList
  },
  setup() {
    const feeds = ref<any[]>([])
    const filteredFeeds = ref<any[]>([])
    const selectedCategory = ref('all')
    const searchQuery = ref('')

    const categories: { [key: string]: string[] } = {
      CVE: ['CVE', 'Vulnerability', 'Exploit'],
      Malware: ['Malware', 'Virus', 'Trojan', 'Worm', 'Ransomware', 'Spyware', 'Adware'],
      Crypto: ['Crypto', 'Cryptocurrency', 'Bitcoin', 'Ethereum', 'Blockchain'],
      Phishing: ['Phishing', 'Scam', 'Fraud', 'Spoofing'],
      DDoS: ['DDoS', 'Denial of Service', 'Distributed Denial of Service'],
      'Data Breach': ['Data Breach', 'Data Leak', 'Information Exposure'],
      Hacking: ['Hacking', 'Hack', 'Cyber Attack', 'Penetration Testing'],
      APT: ['APT', 'Advanced Persistent Threat'],
      'Zero-Day': ['Zero-Day', '0-Day', 'Day Zero'],
      'Social Engineering': [
        'Social Engineering',
        'Baiting',
        'Pretexting',
        'Quid Pro Quo',
        'Tailgating'
      ]
      // Ajoutez d'autres catégories et mots-clés si nécessaire
    }

    async function fetchRSS() {
      try {
        const allFeeds = []
        for (const url of rssUrls) {
          const items = await fetchRSSFeed(url)
          allFeeds.push(...items)
        }
        feeds.value = allFeeds
        applyFilters()
      } catch (error) {
        console.error('Error fetching RSS feed:', error)
      }
    }

    function handleSearch(query: string) {
      searchQuery.value = query
      applyFilters()
    }

    function handleCategorySelect(category: string) {
      selectedCategory.value = category
      applyFilters()
    }

    function applyFilters() {
      filteredFeeds.value = feeds.value.filter((feed) => {
        const matchesCategory =
          selectedCategory.value === 'all' ||
          matchesCategoryKeywords(feed.title, selectedCategory.value)
        const matchesSearch = feed.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        return matchesCategory && matchesSearch
      })
    }

    function matchesCategoryKeywords(title: string, category: string): boolean {
      const keywords = categories[category]
      if (!keywords) return false
      return keywords.some((keyword: string) => title.toLowerCase().includes(keyword.toLowerCase()))
    }

    onMounted(() => {
      fetchRSS()
    })

    return {
      filteredFeeds,
      handleSearch,
      handleCategorySelect
    }
  }
})
</script>
