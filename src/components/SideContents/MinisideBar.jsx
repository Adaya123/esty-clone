import React from "react";
import style from './SideBar.module.css'
import Image from'next/image'

const MiniSideBar = () => {
    return(
        <div className={style.SideBar}>
        <div className={style.item}>
        <div className={style.hom}>
            <Image src='/icons8-home-24(1).png'width={30} height={30}alt='image'/>
            <h1>Home</h1>
            </div>
        <div className={style.Shrt}>
        <Image src='/icons8-youtube-shorts-24.png'width={30} height={30}alt='image'/>
        <h1>Shorts</h1>
        </div>
        <div className={style.play}>
        <Image src='/icons8-playlist-24.png'width={35} height={35}alt='image'/>
        <h1>Subscription</h1>
        </div>
        <div className={style.homes}>
            <Image src='/icons8-person-30.png'width={50} height={50}alt='image'/>
            <h1>You</h1>
            </div>
            </div>
            </div>

    )
}


export default MiniSideBar