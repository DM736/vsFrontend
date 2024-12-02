import React,{useState, useEffect} from 'react'
import eliminar from '../../assets/icons/eliminar.png'
import emptyCar from '../../assets/icons/carro-vacio.png'
import save from '../../assets/icons/guardar.png'
import "../../style/producto.css"
import Invoke from "../../../config/Invoke";
import Alert from '../../notify/Aviso'


const Producto = () => {
  const [userList, setUserList] = useState([]);
  const [userListf, setUserListf] = useState("");
  useEffect(()=>{
    const getList =async()=>{
      try {
        //obtencion de los productos de la cesta
        const tokn ={token: `${localStorage.getItem('token')}`}
        const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
        const resProdLis = await Invoke.invokeGET(`/api/cesta/1/${resUser.usuario.id}`)
        if(resProdLis.msg=="no hay registros todavia"){//validacion de la existencia de los registros en el carrito
          return setUserListf("no hay registros todavia")
        }else{
          return setUserList(resProdLis);
        }
      } catch (error) {
        console.log(error)
      }
    }
    getList()
  },[])
  //cantidad por defecto de un producto
  const [inputval, setInputval] = useState(
    userList.map(() => 1)
  );
  const handleInputChange = (event) => {
    setInputval(event.target.value);
  };
   //actualizacion de la cesta
  const actuRegist = async(ide, user,proid,img, nombre, precio)=>{
    const data={
      id: ide,
      user: user,
      productoId: proid,
      imgProducto: img,
      nombreProd: nombre,
      precio: precio,
      cantidad: Number(inputval)
    }
    try {
      await Invoke.invokePUT(`/api/cesta/${ide}`, data)
      setUserList(prevUserList =>
        prevUserList.map(item => (item.ide === ide ? { ...item, ...data } : item))
      );
      const mssge = `Producto guardado: ${data.nombreProd}`
      Alert(mssge, "Informacion", "success", "#198754")
    } catch (error) {
      console.log(error)
    }
  }
  //formato de precio
  const formatoPrice =(num)=>{
    return new Intl.NumberFormat("es-CO").format(num)
  }
  //funcion para eliminar un producto de la cesta
  const delProdc = async (i, idProd)=>{
    i.preventDefault();
    const tokn ={token: `${localStorage.getItem('token')}`}
    const resUser = await Invoke.invokePOST("/api/auth/val", tokn);
    await Invoke.invokeDELETE(`/api/cesta/2/${resUser.usuario.id}/${idProd}`);
    setUserList(prevUserList => 
      prevUserList.filter(item => item.idProd !== idProd));
    const msg="Se ha retirado el producto de la lista";
    Alert(msg, "Informacion", "success","#198754");
}
  return (
    <div className='container-it'>
      {userListf=="no hay registros todavia"?
        <div className='noting-cont'>
          <p className='text-noth'>No hay productos aun, sigue explorando</p>
          <p className='text-noth'>Para ver tus elecciones!!</p>
          <img src={emptyCar} className='img-nothing'></img>
        </div>:
      userList.map((prod, index)=>(
        <div key={prod.id} className='card'>
          <img src={prod.imgProducto} className='img-card'></img>
          <div className='group-1'>
            <p className='cart-t'>{prod.nombreProd}</p>
          </div>
          <div className='unid'>
            <p className={`card-p-${index}`}>{formatoPrice(prod.precio)}</p>
            <p className='multi'>X</p>
            <input className='unidad' defaultValue={prod.cantidad} onChange={handleInputChange}></input>
          </div>
          <div className='opt-cont'>
            <button onClick={(e)=>delProdc(e, prod.productoid)} className='del2'>
              Eliminar
              <img src={eliminar} className='img-del'></img>
            </button>
            <button className='add2' onClick={()=>actuRegist(prod.id, prod.user, prod.productoid, prod.imgProducto, prod.nombreProd, prod.precio)
              }>
              Guardar
              <img src={save} className='img-save'></img>
            </button>
          </div>
        </div>
        ))}
    </div>
  )
}

export default Producto