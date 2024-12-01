import {React, useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import casa from "../../assets/icons/casa.svg"
import inicio from "../../assets/icons/iniciar.svg"
import camp from "../../assets/icons/camp.svg"
import lupa from "../../assets/icons/buscar.svg"
import logo from "../../assets/i-web.png"
import carrito from "../../assets/icons/carritonv1.png"
import Invoke from "../../../config/Invoke";
import '../../style/navb.css'
import '../../style/reset.css'

const Navb = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const tokn ={token: `${localStorage.getItem('token')}`}
    const navg = useNavigate();
   useEffect(()=>{
    if(!tokn) {
        setIsLoggedIn(false);
        setUserInfo(null)
    }else{
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
   const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserInfo(null);
    navg('/home'); // Redirige a la página de inicio de sesión
  };
    const showUser =()=>{
        setShowUserMenu(prevState => !prevState);
    }
    const openInfo = ()=>{
        const backg = document.querySelector(".bloq");
        backg.style.display = "block";
    }
    const closeAll =()=>{
        const backg = document.querySelector(".bloq");
        backg.style.display ="none";
    }
    return (
        <div>
            <div className='container'>
                <div className='logo'>
                    <img src={logo}className='i-logo'/>
                </div>
                <div className="lupa">
                    <input type="text"autoComplete='off'className='lupa-s'/>
                    <img src={lupa}className='img-icon'></img>
                </div>
                <div className='option-container'>
                    <div>
                        <a href='/home' className='link-n'>
                        <img src={casa}className='img-icon'></img>
                        </a>
                    </div>
                    <div>
                        <a href='/notificaciones' className='link-n'>
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