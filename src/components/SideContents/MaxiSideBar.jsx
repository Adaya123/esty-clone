import React from "react"
import styles from"./Maxi.module.css"
import Image  from "next/image"


const MaxiSideBar = () => {
    return (
        <div className={styles.SideBar}>
            <div className={styles.gen}>
                <Image src= 'icons8-home-24(1).png' width={20} height={20} alt="image"/>
                <h1>Home</h1>
            </div>

            <div className={styles.home}>
                <image src='/icon8-youtube-shorts-24.png'width={30} height={30} alt='image'/>
                <h1>Shorts</h1>
            </div>
            <div className={styles.homs}>
                <image src='/icon8-playlist-24.png'width={35} height={35} alt='image'/>
                <h1>Subscription</h1>
            </div>
            <div className={styles.min}>
                <h1>you</h1>
                <image src='/see all'width={1} height={1} alt='image'/>
            </div>
            <div className={styles.like}>
                <image src='/history.png'width={1} height={1} alt='image'/>
                <h1>History</h1>
            </div>
            <div className={styles.like}>
                <image src='/playlisty.png'width={1} height={1} alt='image'/>
                <h1>playlist</h1>
            </div>
            <div className={styles.like}>
                <image src='/time.png'width={1} height={1} alt='image'/>
                <h1>watch Later</h1>
            </div>
            <div className={styles.like}>
                <image src='/like1.png'width={1} height={1} alt='image'/>
                <h1>Liked videos</h1>
            </div>
            <div className={styles.sub}>
                <h1>Subscriptions</h1>
            </div>

        </div>
    )
}




export default MaxiSideBar