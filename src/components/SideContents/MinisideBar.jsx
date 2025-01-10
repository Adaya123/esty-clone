import React from "react";
import style from './SideBar.module.css'
import image from'next/image'
const MiniSideBar = () => {
    return(
        <div className={style.SideBar}>
        <div className={style.item}>
        <div className={style.hom}>
            <image src='/home.png'width={30} height={30}alt='image'/>
            <h1>Shorts</h1>
            </div>
        <div className={style.Shrt}>
        <image src='/shorts.png'width={30} height={30}alt='image'/>
        <h1>Shorts</h1>
        </div>
        <div className={style.play}>
        <image src='/playlist.png'width={35} height={35}alt='image'/>
        <h1>Subscription</h1>
        </div>
        <div className={style.homes}>
            <image src='/person-circle.png'width={50} height={50}alt='image'/>
            <h1>You</h1>
            </div>
            </div>
            </div>

    )
}


export default MiniSideBar