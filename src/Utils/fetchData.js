const BASE_URL = 'https://youtube-v2.p.rapidapi.com'

const options = {

    method: "GET",
    headers:{
        'x-rapidapi-key':
         '14805b3a8fmshfe777cbb1e1c769p175c1bjsn7380ff0f9781',
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'

    }
}


export const SearchVideos = async (param) => {
    const response = await fetch( `${BASE_URL}/${param}`, options)  


const result = await response.json();   

return result;
}

export const trendingVideos = async () => {
    const response = await fetch (`${BASE_URL}/trending/?lang=en&section=Now`, options)
        
    
    const result = await response.json();
    console.log(result)
    return result;
}

 export const getsubtitle = async (video_id) => {
    const response = await fetch (`${BASE_URL}/video/subtitles?video_id= ${video_id}`,options)
    const result = await response.json();
    return result;
 }