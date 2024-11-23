const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

export const SearchVideos = async (param) => {
    const response = await fetch( `${BASE_URL}/${param}`,  {
        method: "GET",
        headers:{
            'x-rapidapi-key':
             '14805b3a8fmshfe777cbb1e1c769p175c1bjsn7380ff0f9781',
            'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'

        }
    }
)
const result = await response.json();   
return result
}