import React, { useState, useEffect } from 'react';
import Navb from '../mini-modulos/Navbar'
import "../../style/registro.css"
import volver from '../../assets/icons/volver.png'
import registrou from "../../assets/registro-u.png" 
import Footer from '../mini-modulos/footer';
import { Link} from "react-router-dom";
import Invoke from "../../../config/Invoke";
import Alert from '../../notify/Aviso';
const Registro = () => {
  const [user, setUser]= useState({
    nombre:"",
    email:"",
    password:"",
    password2:""
  });
  const { nombre, email, password, password2} = user;
  const atChange =(e)=>{
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    document.querySelector("#nombre").focus();
  }, []);
  const RegistroUser = async ()=> {
    if (password !== password2) {
        const msg = "Las contraseñas son diferentes"
        Alert(msg, "Informacion", "warning","#F2D544");
    } else if (password.length < 10) {
        const msg = "La contraseña debe tener minimo 10 caracteres"
        Alert(msg, "Error", "error","#DC3545");
    } else {
        const data = {
          nombre: user.nombre,
          email: user.email,
          password: user.password
        }
        const response = await Invoke.invokePOST('/api/usuario', data);
        const mensaje = response.msg
        if (mensaje === 'El usuario ya existe') {
            const msg = 'El usuario ya existe';
            Alert(msg, "Informacion", "warning","#F2D544");
        }else{
            const msg = 'El usuario fue creado correctamente'; 
            Alert(msg, "Informacion", "success","#198754");
            setUser({
                nombre: '',
                email: '',
                password: '',
                password2: ''
            })
            
        }
    }
  }
  const atSubmit =(e) =>{
    e.preventDefault();
    RegistroUser();
  }
  return (
    <section className='registro-c'>
        <div className='back-all-container-r'>
          <Link to={"/home"} className='back-container-r'>
            <img src={volver} className='back-icon-r'></img>
            <p className='back-text'>volver</p>
          </Link>
        </div>
        <div className='bg-container'>
            <div className='bg-element2'>   
            </div>
            <div className='bg-element'>
            </div>
            <form className='form-element' onSubmit={atSubmit}>
              <h1 className='form-tt'>Registrate</h1>
              <p className='form-t'>Para ingresar digite su usuario y contraseña</p>
              <div className='field-g'>
                <label htmlFor="nombre" className='regist-name'>Nombre de usuario</label>
                <input 
                  type='text' 
                  className='field-reg' 
                  placeholder="Nombre"
                  id="nombre"
                  name='nombre'
                  value={nombre}
                  onChange={atChange}
                  required/>
              </div>
              <div className='field-g'>
                <label htmlFor="email" className='regist-name'>Email</label>
                <input 
                  type='email' 
                  className='field-reg' 
                  placeholder="Email"
                  id="email"
                  name='email'
                  value={email}
                  onChange={atChange}
                  required/>
              </div>
              <div className='field-g'>
                <label htmlFor="password" className='regist-name'>Contraseña</label>
                <input 
                  type='password' 
                  className='field-reg' 
                  name='password'
                  id="password"
                  value={password}
                  onChange={atChange}
                  required/>
              </div>
              <div className='field-g'>
                <label htmlFor="password2" className='regist-name'>Confirmar contraseña</label>
                <input 
                  type='password' 
                  className='field-reg' 
                  name='password2'
                  id="password2"
                  value={password2}
                  onChange={atChange}
                  required/>
              </div>
              <button type="submit" className='btn-regis'>Registrarse</button>
            </form>
        </div>
        <div className='bg-container2'>
          <img src={registrou} className='img-r'></img>
        </div>
        <Footer/>
    </section>
  )
}
export default Registro
