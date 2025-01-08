import React, { useContext, useState } from 'react'
import { SearchContext } from '@/Context/SearchContext'
import styles from './Feeds.module.css'

const Feeds = () => {
  const { result, setResult } = useContext(SearchContext)
  const [ playingVideo, setPlayingVideo ] = useState(null)

  const [hoveredVideo, setHoveredVideo] =useState(null)

  const handleplayvideo = (params) => {
    setPlayingVideo(params)
  }
  const handleMouseEnter = (videoid) =>{
    setHoveredVideo(videoid)
  }

  const handleMouseLeave =() =>{
    setHoveredVideo(null)
  }

  return( 
    <div className={styles.container}>
      {
        result.map((eachItem, index, array) => (
          <div key={index} className={styles.content}>
            {
              hoveredVideo === eachItem.video_id ?(
              <iframe
               src={`https://www.youtube.com/embed/${eachItem.video_id}autoplay=1`}
              allow="autoplay"
              allowFullScreen
              // frameBorder="0"
              
              ></iframe>
              ):
              playingVideo === eachItem.videoid ?
              <iframe
              src={`https://www.youtube.com/embed/${eachItem.video_id}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
              >

              </iframe>
              :
              (
                <div>
                <img src={eachItem.thumbnails[0].url} alt="image"
                onClick=
                { () => handleplayvideo(eachItem.video_id)}
                onMouseEnter={()=>handleMouseEnter(eachItem.video_id)}
                onMouseLeave={()=>handleMouseLeave}/>
                </div>)}
            <h1>{eachItem.title}</h1>
            <p>{eachItem.description}</p>
            <p>{eachItem.number_of_views} views.{eachItem.published_time}</p>
            <p>{eachItem.video_length}</p>
            <p>{eachItem.published_time}</p>
            </div>
              )
            )
            }

          </div>
        )
      }
    

export default Feeds
