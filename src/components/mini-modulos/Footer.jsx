import React from 'react'
import "../../style/footer.css"
import icon2 from "../../assets/icons/icon-blanco.png"
function Footer() {
  return (
    <div className='menu-footer'>
        <div className='ft-container'>
            <img src={icon2} className='imgsize'></img>
            <div className='options-1'>
                <p className='elmt'>Sobre nosotros</p>
                <p className='elmt'>Nuestros productos</p>
                <p className='elmt'>Contacto</p>
            </div>
            <div className='options-2'>
                <p className='elmt'>Politicas</p>
                <p className='elmt'>Soporte</p>
                <p className='elmt'>Preguntas</p>
            </div>
        </div>
    </div>
  )
}

export default Footer