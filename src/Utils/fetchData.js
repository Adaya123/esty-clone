const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVideos = (query) => {
    const response = fetch( `${BASE_URL}/${query}`,  {
        method: "GET",
        headers:{
            'x-rapidapi-key':
             '14805b3a8fmshfe777cbb1e1c769p175c1bjsn7380ff0f9781',
            'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'

        }
    }
)
const result = response.json();
return result
}