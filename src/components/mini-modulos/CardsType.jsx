import React from 'react'
import "../../style/cards.css"
import {Link} from 'react-router-dom'
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
        <Link to={`/buscar?valor=Televisores`} className='card-elm-1'>
            <img src={tv} className='img-t'></img>
            <p className='item-txt'>Televisores</p>
        </Link>
        <Link to={`/buscar?valor=Computador`} className='card-elm-2'>
            <img src={pc} className='img-t'></img>
            <p className='item-txt'>Computador</p>
        </Link>
        <Link to={`/buscar?valor=Celular`} className='card-elm-3'>
            <img src={tel} className='img-tel'></img>
            <p className='item-txt'>Celular</p>
        </Link>
        <Link to={`/buscar?valor=Electrodomestico`} className='card-elm-4'>
            <img src={lav} className='img-t'></img>
            <p className='item-txt'>Electrodomestico</p>
        </Link>
        <Link to={`/buscar?valor=Accesorios`} className='card-elm-5'>
            <img src={acc} className='img-t'></img>
            <p className='item-txt'>Accesorios</p>
        </Link>
        <Link to={`/buscar?valor=Licencias`} className='card-elm-6'>
            <img src={lic} className='img-t'></img>
            <p className='item-txt'>Licencias</p>
        </Link>
        <Link to={`/buscar?valor=Videogame`} className='card-elm-7'>
            <img src={vdj} className='img-t'></img>
            <p className='item-txt'>Video Juegos</p>
        </Link>
    </div>
  )
}

export default CardsType