import React from "react"
import styles from"./Maxi.module.css"
import Image  from "next/image"


const MaxiSideBar = () => {
    return (
        <div className={styles.SideBar}>
            <div className={styles.gen}>
                <image src='/home.png'width={35} height={35} alt='image'/>
                <h1>Home</h1>
            </div>

            <div className={styles.home}>
                <image src='/shorts.png'width={30} height={30} alt='image'/>
                <h1>Shorts</h1>
            </div>
            <div className={styles.homs}>
                <image src='/playlist.png'width={35} height={35} alt='image'/>
                <h1>Subscription</h1>
            </div>
            <div className={styles.min}>
                <h1>you</h1>
                <image src='/see all'width={1} height={1} alt='image'/>
            </div>
            <div className={styles.like}>
                <image src='/shorts.png'width={1} height={1} alt='image'/>
                <h1>History</h1>
            </div>

        </div>
    )
}




export default MaxiSideBar