import { defineComponent, ref, onMounted } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import Categories from '../components/Categories.vue';
import FeedList from '../components/FeedList.vue';
import { fetchRSSFeed } from '../components/rssService';
import rssUrls from '../components/rssFeeds'; // Importation du fichier rssFeeds.ts
export default defineComponent({
    name: 'Home',
    components: {
        SearchBar,
        Categories,
        FeedList
    },
    setup() {
        const feeds = ref([]);
        const filteredFeeds = ref([]);
        const selectedCategory = ref('all');
        const searchQuery = ref('');
        const categories = {
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
        };
        async function fetchRSS() {
            try {
                const allFeeds = [];
                for (const url of rssUrls) {
                    const items = await fetchRSSFeed(url);
                    allFeeds.push(...items);
                }
                feeds.value = allFeeds;
                applyFilters();
            }
            catch (error) {
                console.error('Error fetching RSS feed:', error);
            }
        }
        function handleSearch(query) {
            searchQuery.value = query;
            applyFilters();
        }
        function handleCategorySelect(category) {
            selectedCategory.value = category;
            applyFilters();
        }
        function applyFilters() {
            filteredFeeds.value = feeds.value.filter((feed) => {
                const matchesCategory = selectedCategory.value === 'all' ||
                    matchesCategoryKeywords(feed.title, selectedCategory.value);
                const matchesSearch = feed.title.toLowerCase().includes(searchQuery.value.toLowerCase());
                return matchesCategory && matchesSearch;
            });
        }
        function matchesCategoryKeywords(title, category) {
            const keywords = categories[category];
            if (!keywords)
                return false;
            return keywords.some((keyword) => title.toLowerCase().includes(keyword.toLowerCase()));
        }
        onMounted(() => {
            fetchRSS();
        });
        return {
            filteredFeeds,
            handleSearch,
            handleCategorySelect
        };
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .SearchBar;
    ({}.SearchBar);
    __VLS_components.SearchBar;
    // @ts-ignore
    [SearchBar,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSearch': {} }, }));
    const __VLS_2 = __VLS_1({ ...{ 'onSearch': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSearch': {} }, }));
    let __VLS_6;
    const __VLS_7 = {
        onSearch: (__VLS_ctx.handleSearch)
    };
    // @ts-ignore
    [handleSearch,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    // @ts-ignore
    const __VLS_8 = {}
        .Categories;
    ({}.Categories);
    __VLS_components.Categories;
    // @ts-ignore
    [Categories,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onSelectCategory': {} }, }));
    const __VLS_10 = __VLS_9({ ...{ 'onSelectCategory': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onSelectCategory': {} }, }));
    let __VLS_14;
    const __VLS_15 = {
        onSelectCategory: (__VLS_ctx.handleCategorySelect)
    };
    // @ts-ignore
    [handleCategorySelect,];
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    let __VLS_11;
    let __VLS_12;
    // @ts-ignore
    const __VLS_16 = {}
        .FeedList;
    ({}.FeedList);
    __VLS_components.FeedList;
    // @ts-ignore
    [FeedList,];
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ feeds: ((__VLS_ctx.filteredFeeds)), }));
    const __VLS_18 = __VLS_17({ feeds: ((__VLS_ctx.filteredFeeds)), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ feeds: ((__VLS_ctx.filteredFeeds)), }));
    // @ts-ignore
    [filteredFeeds,];
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['mb-4'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        SearchBar,
        Categories,
        FeedList
    };
    const __VLS_name = 'Home';
    let __VLS_internalComponent;
}
//# sourceMappingURL=Home.vue.js.map