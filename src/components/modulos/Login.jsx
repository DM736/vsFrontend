import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../../style/inicio.css"
import "../../style/footer.css"
import volver from '../../assets/icons/volver.png'
import bolsa from "../../assets/bolsa-comp.png" 
import Footer from '../mini-modulos/footer';
import Invoke from "../../../config/Invoke";
import Alert from '../../notify/Aviso';
const Login = () => {
  const navg = useNavigate();
  //estado iniciar de los datos para iniciar sesion
  const [user, setUser]= useState({
    email:"",
    password:""
  });
  const { email, password} = user;
  //cambio de estado de los datos de usuario al hacer click
  const atChange =(e)=>{
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    document.querySelector("#email").focus();
  }, []);
  //funcion para ejecutar el inicio de sesion y autenticacion
  const InicioSes = async ()=> {
    if(password.length<10){
        const msg = "La contraseña debe tener minimo 10 caracteres"
        Alert(msg, "Error", "error", "#DC3545");
    }else{
      const data={
          email: user.email,
          password: user.password
      }
      //exito #198754 error #DC3545
      const response = await Invoke.invokePOST('/api/auth', data);
      const mensaje = response.msg;
      if(mensaje === "El usuario no existe" || mensaje === "Contraseña incorrecta"){
          const msg ="No es posible iniciar sesion, porfavor validar sesion";
          Alert(msg, "Error", "error","#DC3545");
      }else{
          const msg ="Inicio de sesion exitoso";
          Alert(msg, "Informacion", "success","#198754");
          //obtener token
          const jwt = response.token
          //guardar token
          localStorage.setItem("token", jwt)
          //logueo
          navg("/home");
      }
    }
  }
  //funcion para ejecutar el logeo y atenticacion al enviar
  const atSubmit =(e) =>{
    e.preventDefault();
    InicioSes();
  }
  //estrutura del componente de inicio de sesion
  return (
    <section className='registro-c'>
      <div className='bg-container'>
          <div className='back-all-container'>
            <Link to={"/home"} className='back-container'>
              <img src={volver} className='back-icon'></img>
              <p className='back-text'>volver</p>
            </Link>
          </div>
          <div className='bg-elementi2'>   
          </div>
          <div className='bg-elementi'>
          </div>
          <form onSubmit={atSubmit} className='form-element-f'>
            <h1 className='form-l-titl'>Iniciar Sesion</h1>
            <p className='form-l-txt'>Para ingresar digite su usuario y contraseña</p>
            <div className='field-g'>
              <label htmlFor="name" className='login-name'>Email</label>
              <input 
                type='text' 
                className='field-reg'
                placeholder='email' 
                id='email'
                name='email'
                value={email}
                onChange={atChange}
                required
                autoComplete='off'
              />
            </div>
            <div className='field-g'>
              <label htmlFor="name" className='login-name'>Contraseña</label>
              <input 
                type='password' 
                className='field-reg' 
                name='password'
                id="password"
                value={password}
                onChange={atChange}
                required
              />
            </div>
            <button className='btn-inicio' type="submit">Iniciar Sesion</button>
            <div className='divi'></div>
            <div className='more-opt'>
              <button className='btn-opt'>Olvido su contraseña</button>
              <Link to={"/registro"} className="btn-registro" >¿No tiene cuenta?</Link>
            </div>
          </form>
      </div>
      <div className='bg-cont2'>
          <img src={bolsa} className='bg-imgb'></img>
      </div>
      <Footer/>
  </section>
  );
}

export default Login;
