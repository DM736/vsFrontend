import React,{useEffect, useState} from 'react'
import Navb from '../mini-modulos/Navbar'
import {Link, useNavigate} from 'react-router-dom'
import "../../style/producto.css"
import Producto from '../mini-modulos/Producto'
import Invoke from "../../../config/Invoke";


const Carrito=()=> {
  const [userList, setUserList] = useState([]);
  const [userListf, setUserListf] = useState("");
  const [searchWord, setSearchWord] = useState("");

  useEffect(()=>{
    //validacion de la existencia de los registros en el carrito desde la busqueda
    const getList =async()=>{
      try {
        const tokn ={token: `${localStorage.getItem('token')}`}
        const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
        const resProdLis = await Invoke.invokeGET(`/api/cesta/1/${resUser.usuario.id}`)
        if(resProdLis.msg=="no hay registros todavia"){
          return setUserListf("no hay registros todavia")
        }else{
          return setUserList(resProdLis);
        }
      } catch (error) {
        console.log(error)
        Alert("Hubo un error", "Informacion", "error", "#fcce03")
      }
    }
    getList()
  },[])
  //calculo del total segun la cantidad y precio de los productos
  const calculoSum = () => {
    return userList.reduce((acum, reg) => {
      return acum + reg.precio * reg.cantidad;
    }, 0); 

  };
  //formato de suma
  const formatoPrice =(num)=>{
    return new Intl.NumberFormat("es-CO").format(num)
  }
  return (
    <section>
      <div>
          <Navb
          setSearchWord={setSearchWord}/>
      </div>
      <div className="global-c">
        <div className="product-c">
         <Producto/>
        </div>
        <div className="method-c">
          <div className='list'>
            <div className='list-content'>
              <div className="container-list-it">
              
              {userListf=="no hay registros todavia"?
                <div className='const-not-list'>
                  <p className='elm-noth-t'>No hay productos aun..</p>
                  <p className='elm-noth-t'>¯\_(ツ)_/¯</p>
                </div>:
              userList.map((prod, index)=>(
                <div key={index} className='card-1-list'>
                  <div className='group-1-list'>
                    <p className='cart-list-i'>{prod.nombreProd}</p>
                  </div>
                  <div className='group-itm-c'>
                    <p className='cart-list-i'>{prod.cantidad}</p>
                  </div>
                  <div className='group-itm-p'>
                    <p className='cart-list-i'>{formatoPrice(prod.precio)}</p>
                  </div>
                </div>
              ))}
              </div>
         
               <hr className='divi-li'></hr>
               <p className='valor-t'>Subtotal: ${formatoPrice(calculoSum())}  </p>
               <div className='price-t'>
                <p className='item-pr'>Valor Total: ${formatoPrice(calculoSum())}</p> 
               </div>
            </div>
            {userListf=="no hay registros todavia"?
              <Link to={'/buscar'} className='agregar'>Agrega un producto</Link>:
              <Link to={'/pago'} className='pago'>Pagar</Link>
            }
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Carrito