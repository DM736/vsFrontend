import React from 'react'
import "../../style/historial.css"
import Navb from '../mini-modulos/Navbar'
import Invoke from "../../../config/Invoke";
const Historial = () => {
    const [cita, setCita] = useState([]);

    const getHist= async ()=>{
        const response = await Invoke.invokeGET("/api/historial");
        setCita(response);
    }
    useEffect(()=>{
        getHist();
    },[])

    const delCitas = async (i, idc)=>{
        i.preventDefault();
        const resp =await Invoke.invokeDELETE(`/api/historial/${idc}`);
        const msg="Se ha eliminado la cita medica";
        Alert(msg, "Informacion", "success","#198754");
        getCitas();
    }
    const historiList =()=>{
        let elmnt =[]
        for(let i=0;i<4;i++){
            elmnt.push(
                <div className='item-date-c'>
                    <div className='date-h'>
                        <p className='dateh-ind'>01/01/2024</p>
                        <div className='divih-l'></div>
                    </div>
                    <div className='elmnt-hist'>
                        <div className='head-hist'>
                            <p className='title-hist'>Transaccion exitosa</p>
                            <p className='hist-date'>Fecha:01/01/2014</p>
                            <p className='hist-hour'>Fecha:01:01</p>
                        </div>
                        <div className='description-c'>
                            <div className='hist-desc'>
                                <p className='hist-desc'>Se ha realizado la compra de 3 articulos con valor total de:</p>
                                <p className='hist-price'>1`999.990</p>
                            </div>
                            <div className='medio-pago'>
                            <p className='hist-pago'>Medio de pago:<spam className="mediodpago">Tarjeta de credito</spam></p>
                            <p className='hist-dir'>Direccion de envio:<spam className="direccionpago">Cra 9 #56 -C15 sur</spam></p>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
        return elmnt
    }
  return (
    <section className='histo-cont'>
        <div>
            <Navb/>
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
                        {historiList()}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Historial