import {React, useState, useEffect} from 'react';
import Invoke from "../../../config/Invoke";
import carrito from "../../assets/carrito.png";
import eliminar from "../../assets/icons/eliminar.png";
import Alert from '../../notify/Aviso';
import "../../style/catalog.css";
import "../../style/descripcion.css";

const Cata = ({elementos}) => {
    //estados del boton de agregar haber hecho clic
    const [moreOpt, setMoreOpt] = useState(null);
    const [moreOptid, setSelectedId] = useState([]);
    //funcion para agregar productos y validar existencia
    const getElemnt = async(id)=>{
        try {
            //validacion del token y la existencia del producto en la cesta
            const tokn ={token: `${localStorage.getItem('token')}`}
            const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
            const resProd = await Invoke.invokeGET(`/api/productos/${id}`);
            if(resUser.msg=="token no valido"){
                const msg = "Para agregar este producto debe iniciar sesion"
                Alert(msg, "Informacion", "warning", "#fcce03");
            }
            //manejo de la informacion del producto
            const data ={user: resUser.usuario.id, 
                productoid: resProd.id, 
                imgProducto: resProd.imgData, 
                nombreProd: resProd.nombreProducto, 
                precio: resProd.precio,
                cantidad: 1}
                //validacion de la existencia de un producto
            const verify = await Invoke.invokeGET(`/api/cesta/2/${resUser.usuario.id}/${resProd.id}`);
            const mssg = `Ya se habia agrego ${resProd.nombreProducto}`
            const mssge = `Producto agregado: ${resProd.nombreProducto}`
            if(verify.msg=="registro no encontrado"){
                await Invoke.invokePOST("/api/cesta/", data),
                Alert(mssge, "Informacion", "success", "#198754")
            }
            if(verify.msg!="registro no encontrado"){
                Alert(mssg, "Informacion", "warning", "#fcce03")
            }
        } catch (error) {
            console.log(`hubo un error`)
        }
        }
        //cambio de estado al agregar
        const Onclickid=(itemid)=>{
            setSelectedId(((prev) => [...prev, itemid]))
        }
        //cambio de estado al eliminar
        const Ondelid=(itemid)=>{
            setSelectedId(((prev) => prev.filter(previ => previ !== itemid)))
        }
        //funcion para remover desde la busqueda
    const delElemntCart=async(objid)=>{
        try {
            const tokn ={token: `${localStorage.getItem('token')}`}
            const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
            const objdel = await Invoke.invokeDELETE(`/api/cesta/${objid}`);
            const msg="Se ha retirado el producto de la lista";
            Alert(msg, "Informacion", "success","#198754");
        } catch (error) {
            console.log("hubo un error")
        }
    }
    //funcion para validar usuario para agregar un producto
    const valToken = ()=>{
        const tokn = localStorage.getItem('token')
        if(!tokn){
            const msg = "Para agregar productos al carrito, debe tener una cuenta, si no tiene una cuenta, porfavor registrarse y iniciar sesion"
            Alert(msg, "Informacion", "warning", "#fcce03");
        }
    }
    //formato de precio
    const formatoPrice =(num)=>{
        return new Intl.NumberFormat("es-CO").format(num)
      }
      //formato de precio
    return (
        <div className='search-results'>
           {elementos.map((elem, index)=>(
            <div key={elem.id} className='i-container'>
                
            <div className='t-img'>
                <img src={elem.imgData} alt="Imagen cargada" className='img-ref' />
                <div className='descrip-c'>
                <div className='charact'>
                    <p className='elem-1'>{elem.caract1}</p>
                    <p className='elem-2'>{elem.caract2}</p>
                    <p className='elem-3'>{elem.caract3}</p>
                    <p className='elem-4'>{elem.caract4}</p>
                    <p className='elem-4'>Incluye Envio</p>
                </div>
                </div>
            </div>
            <div className='e-container'>
                <p className='item-t'>{elem.nombreProducto}</p>
            </div>
            <div className='container-pb'>
                <div className='container-price'>
                    <p className='item-p-s'>0</p>
                    <p className='item-p'>{formatoPrice(elem.precio)}</p>
                </div>
                <div className='line'></div>
                <div className='container-btn'>
                
                {moreOptid.includes(elem.id)?(
                    <div className='more-optCart'>
                        <button className='selected-cart'> 
                        <img src={carrito} className='cart'></img>
                        Agregado
                        </button>
                        <button className='delete-cart' onClick={()=>{delElemntCart(elem.id); Ondelid(elem.id)}}> 
                        <img src={eliminar} className='cart'></img>
                        Eliminar
                        </button>
                    </div>
                ):(
                    <button className='add-cart' onClick={()=>{valToken(); getElemnt(elem.id); Onclickid(elem.id)}}> 
                    <img src={carrito} className='cart'></img>
                    Agregar
                    </button>
                )}
                </div>
            </div>
            </div>
        ))}
        </div>
    );
}


export default Cata;
