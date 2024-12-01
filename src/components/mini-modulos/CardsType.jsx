import React from 'react'
import "../../style/cards.css"
import tv from "../../assets/icons-cards/tvimg.png"
import pc from "../../assets/icons-cards/pcimg.png"
import tel from "../../assets/icons-cards/telimg.png"
import lav from "../../assets/icons-cards/lvimg.png"
import acc from "../../assets/icons-cards/acimg.png"
import lic from "../../assets/icons-cards/liimg.png"
import vdj from "../../assets/icons-cards/vdjimg.png"

const CardsType = () => {
  return (
    <div className='cards-c'>
        <div className='card-elm-1'>
            <img src={tv} className='img-t'></img>
            <p className='item-txt'>Televisores</p>
        </div>
        <div className='card-elm-2'>
            <img src={pc} className='img-t'></img>
            <p className='item-txt'>Computadores</p>
        </div>
        <div className='card-elm-3'>
            <img src={tel} className='img-tel'></img>
            <p className='item-txt'>Celulares</p>
        </div>
        <div className='card-elm-4'>
            <img src={lav} className='img-t'></img>
            <p className='item-txt'>Lavadoras</p>
        </div>
        <div className='card-elm-5'>
            <img src={acc} className='img-t'></img>
            <p className='item-txt'>Accesorios</p>
        </div>
        <div className='card-elm-6'>
            <img src={lic} className='img-t'></img>
            <p className='item-txt'>Licencias</p>
        </div>
        <div className='card-elm-7'>
            <img src={vdj} className='img-t'></img>
            <p className='item-txt'>Video Juegos</p>
        </div>
    </div>
  )
}

export default CardsType