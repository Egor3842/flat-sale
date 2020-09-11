import React from 'react'
import preloader from '../../img/preloader.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return(
        <div className = {s.preloader}>
            <img className = {s.img_Preloader} alt = '' src = {preloader}/>  
        </div>
       
    )
}

export default Preloader