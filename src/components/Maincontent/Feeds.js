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

  return ( 
    <div>
    <div className={styles.everything}>
      <div className={styles.all}>
        <h1>All</h1>
        </div>
      <div>
        <h1>Nollywood</h1>
      </div>
      <div>
        <h1>Music</h1>
      </div>
      <div>
        <h1>Marital Arts Movies</h1>
      </div>
      <div>
        <h1>Playlists</h1>
      </div>
      <div>
        <h1>Source Code</h1>
      </div>
      <div>
        <h1>computer file</h1>
      </div>
      <div>
        <h1>Skills</h1>
      </div>
      <div>
        <h1>Bitcoins</h1>
      </div>
      <div>
        <h1>Gaming</h1>
      </div>
      <div>
        <h1>Wealth</h1>
      </div>
      <div>
        <h1>Graphic design</h1>
      </div>
      <div>
        <h1>Live</h1>
      </div>
      <div>
        <h1>Podcast</h1>
      </div>
      <img src="./see all.png" alt=""/>
      </div>

      <div className={styles.contaier}>


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
            <p>{eachItem.video_length}</p>
            <p>{eachItem.number_of_views} views.{eachItem.published_time}</p>
            </div>
              )
            )
            }

          </div>
        </div>
  )}

export default Feeds
