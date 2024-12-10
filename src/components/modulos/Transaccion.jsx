import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navb from '../mini-modulos/Navbar'
import Producto from '../mini-modulos/Producto'
import "../../style/pago.css"
import Invoke from "../../../config/Invoke";
import Alert from '../../notify/Aviso';

function Transaccion() {
    const [userList, setUserList] = useState([]);
    const [userListf, setUserListf] = useState("");
    const [searchWord, setSearchWord] = useState("");
    const naveg = useNavigate();
    //estado de los datos para la transaccion
    const [transac, setTransac]=useState({
      nombre:"",apellido:"",cedula:"",fechaExp:"",
      clave:"",email:"",valorTotal:""
    })
    //estado de los datos para la direccion
    const [selectValor, setSelectValor]=useState({
      lugar1:"",numero1:"",tipo1:"",numero2:"",
      tipo2:"",numero3:"",ubicacion:"",lugar2:""
    })
    const selectedOptions = (e) => {
      const { name, value } = e.target; 
      setSelectValor({
        ...selectValor, 
        [name]: value,  
      });
    };
    useEffect(()=>{
      //obtencion de los datos de la cesta
      const getList =async()=>{
        try {
          const tokn ={token: `${localStorage.getItem('token')}`}
          const responUser = await Invoke.invokePOST("/api/auth/val", tokn);
          const resProdLis = await Invoke.invokeGET(`/api/cesta/1/${responUser.usuario.id}`)
          if(resProdLis.msg=="no hay registros todavia"){
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
    //calculo del total precio * cantidad
    const calculoSum = () => {
      return userList.reduce((acum, reg) => {
        return acum + reg.precio * reg.cantidad;
      }, 0); 
  
    };
    const formatoPrice =(num)=>{
      return new Intl.NumberFormat("es-CO").format(num)
    }
    //cierre de la pestaña de direccion
    const closeAll =()=>{
      const backg = document.querySelector(".dir-space");
      backg.style.display ="none";
    }
    const { nombre, apellido, cedula, fechaExp, clave,  email, valorTotal} = transac;
    //proceso de validacion de los datos ingresados
  const process = async()=>{
    try {
      const tokn ={token: `${localStorage.getItem('token')}`}
      const user = await Invoke.invokePOST("/api/auth/val", tokn);
      const data = {
        nombre: transac.nombre,
        cedula: transac.cedula,
        clave: transac.clave,
        fechaExp: transac.fechaExp,
        valorTotal: calculoSum()
      }
      const transfr = await Invoke.invokePOST("/api/transacc/validar/", data)
      //validacion segun la respuesta desde el backend
      if(transfr.message == "Los datos son validos"){
        const backg = document.querySelector(".dir-space");
        backg.style.display = "block";
      }else{
        Alert(transfr.message, "Error", "error","#fcce03");
      }
    } catch (error) {
      console.log("Hubo un error")
      console.log(error)
    }
  }
  //proceso final de los datos de transaccion y direccion
  const finalProcess =async()=>{
    const tokn ={token: `${localStorage.getItem('token')}`}
      const user = await Invoke.invokePOST("/api/auth/val", tokn);
      //manejo de la informacion para la transaccion
      const data = {
        nombre: transac.nombre,
        apellido: transac.apellido,
        cedula: transac.cedula,
        fechaExp: transac.fechaExp,
        clave: transac.clave,
        cesta: user.usuario.id,
        email: transac.email,
        direcc: getDirecc(),
        valorTotal: calculoSum()
      }
      //proceso de compra final
      const transff = await Invoke.invokePOST("/api/transacc/", data)
      if(transff.message !="Se proceso la transaccion"){
        Alert(transff.message, "Informacion", "error", "#DC3545");
      }else{
        Alert(transff.message, "Informacion", "success", "#198754");
        naveg("/home")
      }
  }
  //funcion para el cambio de estado en el formulario de direccion
  const atChange = (e) => {
    setTransac({
      ...transac, [e.target.name]: e.target.value
    })
}
//obtencion de la direccion
const getDirecc = ()=>{
  const direc = document.querySelector(".field-dir-complt").innerHTML
  return direc
}

//validacion de datos 
  const atSubmit = (e) => {
    e.preventDefault();
    process();
  }
  //ejecucion de la transaccion 
  const atFinalSubmit =(e)=>{
    e.preventDefault();
    finalProcess()
  }
    
  return (
    <section>
      <div className="dir-space">
        <button className="closbtn" onClick={()=>{
          closeAll();
        }}>X</button>
        <form onSubmit={atFinalSubmit} className="dir-form-container">
          <div className='form-str'>
            <div className='form-titl'>
              <p>Para proceder con el pago porfavor, generar la direccion de envio</p>
            </div>
            <div className='dir-form'>
              <div className='direc-element-c'>
                <label htmlFor="lugar1" className='field-title'>Carrera, Avenida etc..</label>
                <select name="lugar1"  className='field-dir' value={selectValor.lugar1} onChange={selectedOptions}>
                  <option value=""></option>
                  <option value="Apartado">Apartado</option><option value="Avenida">Avenida</option><option value="Bloque">Bloque</option><option value="Calle">Calle</option><option value="Carrera">Carrera</option>
                  <option value="Circunvalar">Circunvalar</option><option value="Bis">Bis</option><option value="No Bis">No Bis</option><option value="Conjunto">Conjunto</option><option value="Diagonal">Diagonal</option>
                </select>
              </div>
              <div className='direc-element-c'>
                <label htmlFor="numero1" className='field-title' >Numero:</label>
                <input type='number' className='field-dir' name='numero1' placeholder='56, 75, 60 etc..'value={selectValor.numero1} onChange={selectedOptions}/>
              </div>
              <div className='direc-element-c'>
              <label htmlFor="tipo1" className='field-title'>A, B, F, G etc..</label>
                <select name="tipo1"  className='field-dir' value={selectValor.tipo1} onChange={selectedOptions}>
                  <option value=""></option><option value="A">A</option><option value="B">B</option>
                  <option value="C">C</option><option value="D">D</option><option value="E">E</option>
                  <option value="F">F</option><option value="G">G</option><option value="H">H</option>
                  <option value="I">I</option><option value="J">J</option><option value="K">K</option>
                  <option value="L">L</option><option value="M">M</option><option value="N">N</option>
                  <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
                </select>
              </div>
              <div className='direc-element-c'>
                <label htmlFor="numero2" className='field-title'>Numero</label>
                <input type='number' className='field-dir' name='numero2' value={selectValor.numero2} onChange={selectedOptions}/>
              </div>
              <div className='direc-element-c'>
              <label htmlFor="tipo2" className='field-title'>A, B, F, G etc..</label>
                <select name="tipo2" className='field-dir' value={selectValor.tipo2} onChange={selectedOptions}>
                <option value=""></option><option value="A">A</option><option value="B">B</option>
                  <option value="C">C</option><option value="D">D</option><option value="E">E</option>
                  <option value="F">F</option><option value="G">G</option><option value="H">H</option>
                  <option value="I">I</option><option value="J">J</option><option value="K">K</option>
                  <option value="L">L</option><option value="M">M</option><option value="N">N</option>
                  <option value="O">O</option><option value="P">P</option><option value="Q">Q</option>
                </select>
              </div>
              <div className='direc-element-c'>
                <label htmlFor="numero3" className='field-title'>Numero:</label>
                <input type='number' className='field-dir' name='numero3' placeholder='56, 75, 60 etc..' value={selectValor.numero3} onChange={selectedOptions}/>
              </div>
              <div className='direc-element-c'>
              <label htmlFor="ubicacion" className='field-title'>Norte, Este..</label>
                <select name="ubicacion"  className='field-dir' value={selectValor.ubicacion} onChange={selectedOptions}>
                  <option value=""></option><option value="Norte">Norte</option><option value="Este">Este</option>
                  <option value="Sur">Sur</option><option value="Oeste">Oeste</option>
                </select>
              </div>
              <div className='direc-element-c'>
              <label htmlFor="lugar2" className='field-title'>Carrera, Avenida etc..</label>
                <select name="lugar2"  className='field-dir' value={selectValor.lugar2} onChange={selectedOptions}>
                  <option value=""></option>
                  <option value="Apartado">Apartado</option><option value="Avenida">Avenida</option><option value="Bloque">Bloque</option><option value="Calle">Calle</option><option value="Carrera">Carrera</option>
                  <option value="Circunvalar">Circunvalar</option><option value="Bis">Bis</option><option value="No Bis">No Bis</option><option value="Conjunto">Conjunto</option><option value="Diagonal">Diagonal</option>
                </select>
              </div>
            </div>
            <div className='all-dir'>
              <p className='field-dir-c'>Direccion completa</p>
              <p className='field-dir-complt'>{`${selectValor.lugar1} ${selectValor.numero1} ${selectValor.tipo1} ${selectValor.numero2} ${selectValor.tipo2} ${selectValor.numero3} ${selectValor.ubicacion} ${selectValor.lugar2}`}</p>
            </div>
            <div className='submt'>
              <button className='btn-submt'>Cargar direccion</button>
            </div>
          </div>
        </form>
      </div>
    <div>
        <Navb
        setSearchWord={setSearchWord}/>
    </div>
    <div className="global-c">
      <div className="product-c">
       <Producto/>
      </div>
      <div className='method-pa'>
        <form onSubmit={atSubmit} className='form-pc'>
            <div className='label-t'>
              <p>Metodo de  pago</p>
            </div>
            <div className='label-c'>
              <label htmlFor="nombre" className='field-title'>nombre</label>
              <input 
                type='text' 
                className='field-u' 
                name='nombre'
                placeholder='Nombre' 
                id='nombre'
                value={nombre}
                onChange={atChange}
                required
                autoComplete='off'/>
            </div>
            <div className='label-c'>
              <label htmlFor="apellido">Apellido</label>
              <input 
                type='text' 
                className='field-u' 
                placeholder='Apellido' 
                name='apellido' 
                id="apellido"
                value={apellido}
                onChange={atChange}/>
            </div>
            <div className='label-c'>
              <label htmlFor="cedula" className='field-title'>Cedula</label>
              <input 
                type='text' 
                className='field-u' 
                name='cedula'
                placeholder='Cedula' 
                id='cedula'
                value={cedula}
                onChange={atChange}
                required
                autoComplete='off'/>
            </div>
            <div className='label-cc'>
              <div className='label-cc2'>
                <label htmlFor="fechaExp" className='field-title'>Fecha de expiracion</label>
                <input 
                  type='month' 
                  className='field-u2' 
                  name='fechaExp'
                  placeholder='MM/AAAA' 
                  value={fechaExp}
                  onChange={atChange}
                  id='fechaExp'
                  required
                  autoComplete='off'/>
              </div>
              <div className='label-cc2'>
                <label htmlFor="clave" className='field-title'>Codigo de seguridad</label>
                <input 
                  type='password' 
                  className='field-u2'
                  maxLength={4} 
                  name='clave'
                  value={clave}
                  onChange={atChange}
                  id='clave'
                  required/>
              </div>
            </div>
            <div className='label-c'>
              <label htmlFor="email" className='field-title'>Email</label>
              <input 
                type='text' 
                className='field-u' 
                placeholder='ejemplo@correo.com' 
                name='email' 
                id="email"
                value={email}
                onChange={atChange}/>
            </div>
            <div className='label-c'>
              <label htmlFor="valorTotal" className='field-title'>Valor total</label>
              <p 
                className='field-pago' 
                value={valorTotal}
                onChange={atChange}
                > {formatoPrice(calculoSum())}</p>
            </div>
            <div className='btn-pagar'>
              <button className='pagar'>Pagar</button>
            </div>
        </form>        
      </div>
    </div>
    </section>
  )
  }

export default Transaccion