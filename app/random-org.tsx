// fetchEndaomentData.ts
import axios from 'axios';

// Async function to fetch data from the Endaoment API
const getRandomOrg = async (): Promise<any> => {
    // Generate a random search term
    const searchTerms: string[] = [
        "education", "health", "environment", "animal", "arts",
        "technology", "science", "history", "sports", "music",
        "literature", "philanthropy", "climate change", "innovation", "space",
        "oceanography", "nutrition", "psychology", "economics", "politics",
        "travel", "culture", "sustainability", "entrepreneurship", "wellness",
        "fashion", "cinema", "architecture", "robotics", "fitness",
        "astronomy", "geography", "mathematics", "philosophy", "photography",
        "theatre", "biodiversity", "cybersecurity", "law", "social media",
        "journalism", "engineering", "nanotechnology", "forestry", "gaming",
        "public health", "urban planning", "classical music", "poetry", "dance",
        "virtual reality", "agriculture", "linguistics", "anthropology", "archaeology",
        "graphic design", "artificial intelligence", "marine biology", "veterinary science", "neuroscience",
        "sociology", "meteorology", "virology", "mythology", "botany",
        "zoology", "aviation", "culinary arts", "pedagogy", "human rights",
        "quantum physics", "geology", "astrophysics", "epidemiology", "immunology",
        "entrepreneurial finance", "sustainable development", "graphic novels", "opera", "folk music",
        "digital marketing", "3D printing", "augmented reality", "blockchain", "data science",
        "ecotourism", "microbiology", "public speaking", "screenwriting", "organic farming"
    ];
    const randomIndex = Math.floor(Math.random() * searchTerms.length);
    const searchTerm = searchTerms[randomIndex];

    const url = `https://api.endaoment.org/v1/sdk/orgs/search?searchTerm=${encodeURIComponent(searchTerm)}`;

    try {
        const response = await axios.get(url);
        const orgs = response.data; // Assuming this is an array of orgs
        if (orgs.length === 0) {
            throw new Error('No organizations found for the search term.');
        }
        // Select a random organization from the array
        const randomOrgIndex = Math.floor(Math.random() * orgs.length);
        return orgs[randomOrgIndex]; // Return a single random org
    } catch (error) {
        console.error('Error fetching data from Endaoment API:', error);
        throw error;
    }
};

export default getRandomOrg;
