import React, { useContext, useState } from 'react'
import { SearchContext } from '@/Context/SearchContext'
import styles from './Feeds.module.css'

const Feeds = () => {
  const { result, setResult } = useContext(SearchContext)
  const [ playingVideo, setPlayingVideo ] = useState(null)

  const handleplayvideo = (params) => {
    setPlayingVideo(params)
  }

  return( 
    <div className={styles.container}>
      {
        result.map((eachItem, index, array) => (
          <div key={index} className={styles.content}>
            {
              playingVideo === eachItem.video_id ?
              <iframe src={`https://www.youtube.com/embed/${eachItem.video_id}`}
              // frameBorder="0"
              ></iframe>
              :
              (
                <div>
                <img src={eachItem.thumbnails[0].url} alt='image' onClick=
                { () => handleplayvideo(eachItem.video_id)}/>
            <h1>{eachItem.title}</h1>
            <p>{eachItem.description}</p>
            <p>{eachItem.number_of_views}</p>
            <p>{eachItem.video_length}</p>
            <p>{eachItem.published_time}</p>
            </div>
              )
            }

          </div>
        ))
      }
    </div>
  )
}

export default Feeds
