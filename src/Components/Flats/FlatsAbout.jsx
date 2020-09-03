import React from 'react'
import Flat from '../Flat/Flat'
import s from './FlatsAbout.module.css'
import data from '../../state.json'

const FlatsAbout = () => {
    const state = data

    let AllFlats = state.map((x,key) => <Flat title={x.attributes.title}
                                        rooms = {x.attributes.rooms}
                                        address = {x.attributes.address}
                                        area = {x.attributes.area + ' ' + x.attributes.unit}
                                        saler = {x.relationships.attributes} 
                                        id = {x.id}/>)
    return (
        <div className={s.container + ' ' + s.widthContainer}>
            {AllFlats}
        </div>
    )
}

export default FlatsAbout