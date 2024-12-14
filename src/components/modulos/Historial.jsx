import React,{useEffect, useState} from 'react'
import "../../style/historial.css"
import Navb from '../mini-modulos/Navbar'
import Invoke from "../../../config/Invoke";
const Historial = () => {
    //estado de los registros del historial
    const [histori, setHistori] = useState([]);
    const [searchWord, setSearchWord] = useState("");
    const tokn ={token: `${localStorage.getItem('token')}`};
    useEffect(()=>{
        const getHistorial = async ()=>{
            //validacion de autenticacion con token
            const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
            const resTransacc = await Invoke.invokeGET(`/api/transacc/registro/${resUser.usuario.id}`);
            setHistori(resTransacc);
        }
        getHistorial();
    },[])
    //formato de fecha y hora
    const getkey =(word,i)=>{
        const fecha = word.split("T")
        const part = fecha[i];
        if(i==1){
            const formatH = part.substring(0,5)
            return formatH
        }
        return(part)
    }
    //formato de precio 
    const formatoPrice =(num)=>{
        return new Intl.NumberFormat("es-CO").format(num)
      }
  return (
    <section className='histo-cont'>
        <div>
            <Navb
                setSearchWord={setSearchWord}
            />
        </div>
        <div className='panel-h-cont'>
        <div className='panel-optn'>
            <div className='option-h'>
                <p>General</p>
            </div>
            <div className='option-h'>
                <p>Cuenta</p>
            </div>
            <div className='option-h'>
                <p>Historial de compras</p>
            </div>
            <div className='option-h'>
                <p>Metodo de pago</p>
            </div>
            </div>
            <div className='hist-list'>
                <div className='histor-cont'>
                    <div className='cont-list-h'>
                    {histori.map((prod, index)=>(
                        <div className='item-date-c' key={index}>
                        <div className='date-h'>
                            <p className='dateh-ind'>{getkey(prod.createdAt, 0)}</p>
                            <div className='divih-l'></div>
                        </div>
                        <div className='elmnt-hist'>
                            <div className='head-hist'>
                                <p className='title-hist'>Transaccion exitosa</p>
                                <p className='hist-date'>Fecha:{getkey(prod.createdAt, 0)}</p>
                                <p className='hist-hour'>Hora:{getkey(prod.createdAt, 1)}</p>
                            </div>
                            <div className='description-c'>
                                <div className='hist-desc'>
                                    <p className='hist-desc'>Se ha realizado la compra de {prod.cantidad} articulos con valor total de:</p>
                                    <p className='hist-price'>{formatoPrice(prod.valorTotal)}</p>
                                </div>
                                <div className='medio-pago'>
                                <p className='hist-pago'>Medio de pago:<span className="mediodpago">{prod.metodoDpago}</span></p>
                                <p className='hist-dir'>Direccion de envio:<span className="direccionpago">{prod.direcc}</span></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Historial