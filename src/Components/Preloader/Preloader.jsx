import React from 'react'
import preloader from '../../img/preloader.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return(
        <div className = {s.preloader}>
            <img className = {s.imgPreloader} alt = '' src = {preloader}/>  
        </div>
       
    )
}

export default Preloader