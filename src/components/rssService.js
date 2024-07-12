import axios from 'axios';
const API_KEY = 'lqjjecmogdxgai6eevysickowuccsxgsgsqgbo3p';
const API_URL = 'https://api.rss2json.com/v1/api.json';
export async function fetchRSSFeed(url) {
    try {
        const response = await axios.get(API_URL, {
            params: {
                rss_url: url,
                api_key: API_KEY,
                count: 100
            }
        });
        // Transform the items to include image URL from media:content
        const items = response.data.items.map((item) => ({
            title: item.title,
            link: item.link,
            description: item.description,
            image: item.enclosure?.link || item.thumbnail || item.media?.content || '', // Adjust according to your RSS structure
            // Add other properties as needed
        }));
        return items;
    }
    catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
}
//# sourceMappingURL=rssService.js.map