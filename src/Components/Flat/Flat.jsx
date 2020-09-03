import React, { useState } from 'react'
import s from './Flat.module.css'
import flat from '../../img/flat.jpg'

const Flat = (props) => {
    const [ClickedFlat, setClick] = useState([])

    const SetAmountOfFlat = (id) => {
        setClick(id)
    }
    return (
        <div className={s.container}>
            <h4 className={s.title}>{props.title}</h4>
            <div className={s.Line}></div>
            <div className={s.img_Container}><img alt='' src={flat} /></div>
            <div className={s.house_About}>
                <div className={s.Numbers_About}>
                    <div className={s.Rooms_Amount_Container}>Количество комнат</div>
                    <div className={s.room_Amount}>{props.rooms}</div>
                    <div className={s.stickLine}></div>
                    <div className={s.area}>Площадь</div>
                    <div className={s.area_Amount}> {props.area}</div>
                </div>
                <div className={s.address}>г.{props.address.city}, ул.{props.address.street}, д.{props.address.house}, кв.{props.address.room} </div>
            </div>

            <div className={s.relationships}>
                Обращаться: {props.saler.last_name + ' ' + props.saler.first_name + ' ' + props.saler.middle_name}
            </div>

            {ClickedFlat === props.id
                ?
                <div onClick={() => SetAmountOfFlat(-1)} className={s.heart_Container}>
                    <div className={s.heart + ' ' + (ClickedFlat !== props.id ? s.notClicked : s.Clicked)} ></div>
                </div>
                :
                <div onClick={() => SetAmountOfFlat(props.id)} className={s.heart_Container}>
                    <div className={s.heart + ' ' + (ClickedFlat !== props.id ? s.notClicked : s.Clicked)}></div>
                </div>
            }


        </div>
    )

}
export default Flat