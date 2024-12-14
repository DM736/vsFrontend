import React,{useEffect, useState} from 'react'
import Navb from '../mini-modulos/Navbar'
import "../../style/notifi.css"
import chk from "../../assets/icons/check.png"
import Invoke from "../../../config/Invoke";
import sinUser from "../../assets/icons/sin-perfil.png";
import sinNotify from "../../assets/icons/campana-notify.png";

const Notificacion = () => {
    const [historiList, setHistoriList]=useState([]);
    const tokn ={token: `${localStorage.getItem('token')}`};
    useEffect(()=>{
        const getHistorial = async ()=>{
            //validacion de autenticacion con token
            const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
            const resTransacc = await Invoke.invokeGET(`/api/transacc/registro/${resUser.usuario.id}`);
            setHistoriList(resTransacc);
        }
        getHistorial();
    },[])
    const getkey =(word,i)=>{
        const fecha = word.split("T")
        const part = fecha[i];
        if(i==1){
            const formatH = part.substring(0,5)
            return formatH
        }
        return(part)
    }
    const formatoPrice =(num)=>{
        return new Intl.NumberFormat("es-CO").format(num)
      }
  return (
        <div className='noti-list-cont'>
            { tokn.token== "null"?
                <div className='notifi-elem-cont'>
                    <img src={sinUser} className='img-user-off'></img>
                    <p className="not-txt">Para ver las notificacion debe tener una cuenta</p>
                </div>
            :
                tokn.token!="null" && historiList.length==0?
                    <div className='notifi-elem-cont'>
                        <img src={sinNotify} className='img-user-off'></img>
                        <p className="not-txt">No hay notificaciones aun</p>
                    </div>
                :
                    historiList.map((elem, index)=>(
                        <div className='notifi-e' key={index}>
                            <div className='notifi-head'>
                                <p className="not-titl">Compra exitosa</p>
                                <img src={chk} className='not-check'></img>
                            </div>
                            <div className='notifi-bod'>
                                <p className="not-txt">Se ha hecho la compra de {elem.cantidad} articulo en la tienda, con un valor total de de {formatoPrice(elem.valorTotal)}.</p>
                                <div className='not-dat'>
                                    <div>
                                        <p className='not-st'>Fecha de compra:</p> 
                                        <p className='not-date'>{getkey(elem.createdAt, 0)}</p> 
                                    </div>
                                    <div>
                                        <p className='not-st'>Hora de compra:</p> 
                                        <p className='not-time'>{getkey(elem.createdAt, 1)}</p>
                                    </div>
                                    <div>
                                        <p className='not-st'>Medio de pago:</p> 
                                        <p className='not-method'>{elem.metodoDpago}</p>
                                    </div>
                                </div>
                                <button className='not-more'>
                                    ver mas...
                                    <div className='down-opt'></div>
                                </button>
                            </div>
                        </div>
                        ))
            }
        </div>
           
  )
}

export default Notificacion