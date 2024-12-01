import React from 'react'
import Navb from '../mini-modulos/Navbar'
import "../../style/notifi.css"
import chk from "../../assets/icons/check.png"

const Notificacion = () => {
  return (
    <section className='noti-cont'>
        <div className='navb'>
            <Navb/>
        </div>
        <div className='notif-cont'>
            <div className='notifi-bg'>
                <div className='notifi-e'>
                    <div className='notifi-head'>
                        <p className="not-titl">Compra exitosa</p>
                        <img src={chk} className='not-check'></img>
                    </div>
                    <div className='notifi-bod'>
                        <p className="not-txt">Se ha hecho la compra de 1 articulo en la tienda, con un valor total de de 1`999.900.</p>
                        <div className='not-dat'>
                            <div>
                                <p className='not-st'>Fecha de compra:</p> 
                                <p className='not-date'>01/01/2024</p> 
                            </div>
                            <div>
                                <p className='not-st'>Hora de compra:</p> 
                                <p className='not-time'>01:01 pm</p>
                            </div>
                            <div>
                                <p className='not-st'>Medio de pago:</p> 
                                <p className='not-method'>Tarjeta de credito</p>
                            </div>
                        </div>
                        <button className='not-more'>
                            ver mas...
                            <div className='down-opt'></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Notificacion