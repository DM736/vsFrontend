import React,{useEffect, useState} from 'react';
import Invoke from '../../../config/Invoke';

const Listcar = () => {
    const [userItems, setUserItems] = useState([]);
  const getList =async()=>{
    try {
      const tokn ={token: `${localStorage.getItem('token')}`}
      const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
      const resprodf = await Invoke.invokeGET(`/api/cesta/1/${resUser.usuario.id}`)
      return setUserItems(resprodf);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getList()
  },[])
  return (
    <div>
        <div>
            {userItems.map((elem, index)=>{
                {console.log(userItems)}
            <div key={index}>
                <p className='valor-t'>{elem.cantidad}</p>
                <p className='valor-t'>{elem.cantidad}</p>
                <p className='valor-t'>{elem.precio}</p>
            </div>
            })}
        </div>
        <div>
            <hr className='divi'></hr>
            <p className='valor-t'>Valor total:  1`999.990</p>
            <div className='price-t'>
            <p className='item-pr'>Subtotal: 1`99.900</p> 
            </div>
        </div>
            <div>
                <button className='pago'>Pagar</button>
            </div>
        </div> 
  )
}

export default Listcar