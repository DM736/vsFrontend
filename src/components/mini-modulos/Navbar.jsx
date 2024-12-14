import {React, useState, useEffect, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Notificacion from '../modulos/Notificacion';
import casa from "../../assets/icons/casa.svg"
import inicio from "../../assets/icons/iniciar.svg"
import camp from "../../assets/icons/camp.svg"
import lupa from "../../assets/icons/buscar.svg"
import logo from "../../assets/i-web.png"
import carrito from "../../assets/icons/carritonv1.png"
import Invoke from "../../../config/Invoke";
import '../../style/navb.css'
import '../../style/reset.css'
import "../../style/notifi.css"

const Navb = ({setSearchWord}) => {
    //estado del input, inicio de sesion, informacion de usuario y menu de usuario
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const tokn ={token: `${localStorage.getItem('token')}`};
    const navg = useNavigate();
    //referencia inicial del contenido del input
    const inputRef = useRef(null)
   useEffect(()=>{
    //validacion de la existencia del token
    if(!tokn) {
        setIsLoggedIn(false);
        setUserInfo(null)
    }else{
        //obtencion del usuario y validacion por medio del token
        const getUser= async ()=>{
            try {
                const response = await Invoke.invokePOST("/api/auth/val", tokn);
                if(tokn.token==null || response.msg=='Hubo un error al autenticar'){
                    setUserInfo(null);
                    setIsLoggedIn(false);
                 }else{
                    setUserInfo(response);
                    setIsLoggedIn(true);
                 }
            } catch (error) {
                setIsLoggedIn(false);
            }
            return setIsLoggedIn        
        }
        getUser()
    }
   },[]);
   //cierre de sesion
   const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserInfo(null);
    navg('/home'); // Redirige a la página de inicio de sesión
  };
  //informacion de usuario al haber cambio
    const showUser =()=>{
        setShowUserMenu(prevState => !prevState);
    }
    //despliegue de la informacion de usuario al haber cambio
    const openInfo = ()=>{
        const backg = document.querySelector(".bloq");
        backg.style.display = "block";
    }
    //cierre de la informacion de usuario al haber cambio
    const closeAll =()=>{
        const backg = document.querySelector(".bloq");
        backg.style.display ="none";
    }
    const closeAllNoti =()=>{
        const backg = document.querySelector(".dir-space");
        backg.style.display ="none";
      }
    const opnNotify =()=>{
        const backg = document.querySelector(".dir-space");
        backg.style.display = "block";
    }
    //retorno de la estructura y eventos segun el click
    return (
        <div>
            <div className="dir-space">
                <div className='clos-btn-cont'>
                    <button className="closbtn" onClick={()=>{
                        closeAllNoti();
                    }}>X</button>
                </div>
                <div className='notify-conten-lis'>
                    <div className='notify-sub-cont'>
                        <Notificacion/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='logo'>
                    <img src={logo}className='i-logo'/>
                </div>
                <div className="lupa">
                    <input type="text" autoComplete='off' className='lupa-s' ref={inputRef} onChange={(e)=>setSearchWord(e.target.value)}/>
                    <Link to={`/buscar?valor=${inputRef.current?.value || ''}`} className='buton-lupa'>
                        <img src={lupa} className='img-icon'></img>
                    </Link>
                </div>
                <div className='option-container'>
                    <div>
                        <a href='/home' className='link-n'>
                        <img src={casa}className='img-icon'></img>
                        </a>
                    </div>
                    <div>
                        <a href='#' className='link-n' onClick={opnNotify}>
                        <img src={camp}className='img-icon'></img>
                        </a>
                    </div>
                    <div className='option' id='user'>
                        <a  className='link-n'>
                        <img src={inicio}className='img-icon' onClick={()=>{
                            showUser();
                            openInfo();
                        }}></img>
                        </a>
                    </div>
                    <div className='option-cart'>
                        <a href='/carrito' className='link-n'>
                        <img src={carrito}className='img-icon-1'></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bloq'>
                <div className="btn-c">
                    <div className='btn-contt'>
                        <button className="closbtn-user" onClick={()=>{
                            showUser();
                            closeAll();
                        }}>X</button>
                    </div>
                    {showUserMenu && (
                        <div>
                        {isLoggedIn && tokn.token !=null ? (
                            <div className='menu-user'>
                                <img src={inicio}className='img-icon-u'></img>
                                <p className='user-name'>{userInfo.usuario.nombre}</p>
                                <p className='user-email'>{userInfo.usuario.email}</p> 
                                <button className='btn-close' onClick={logout}>Cerrar Sesion</button>
                                <Link to={'/historial-compras'} className='btn-histo'>Historial</Link>
                            </div>
                        ) : (
                            <div className='menu-user'>
                            <p className='Info-r'>Registrate o inicia sesion para continuar</p>
                            <Link to={'/login'} className='btn-inic'>Iniciar sesión</Link>
                            <Link to={'/registro'} className='btn-regist'>Registrarse</Link>
                            
                            </div>
                        )}
                        </div>
                    )}        
                </div>
            </div>
        </div>
    );
}

export default Navb;