import React,{ Fragment, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/modulos/Home'
import Login from './components/modulos/Login'
import Registro from './components/modulos/Registro'
import RutaProtegida from './components/modulos/Protegido'
import Search from './components/modulos/Search'
import Carrito from './components/modulos/Carrito'
import Transaccion from './components/modulos/Transaccion'
import Direccion from './components/modulos/Direccion'
import Historial from './components/modulos/Historial'
import Notificacion from './components/modulos/Notificacion'


function App() {
  return (
    <>
      <div className='App'>
        <Fragment>
          <BrowserRouter>
            <Routes>
            <Route path='/' exact element={<Navigate to="/login"/>}/>
              <Route path='/home' exact element={<Home />}/>
              <Route path='/login' exact element={<Login/>}/>
              <Route path='/registro' exact element={<Registro/>}/>
              <Route path="/buscar" exact element={<Search/>}/>
              <Route path="/carrito" exact element={<Carrito/>}/>
              <Route path="/pago" exact element={<RutaProtegida element= {<Transaccion/>}/>}/>
              <Route path="/direccion" exact element={<RutaProtegida element= {<Direccion/>}/>}/>
              <Route path="/notificaciones" exact element={<RutaProtegida element= {<Notificacion/>}/>}/>
              <Route path="/historial-compras" exact element={<RutaProtegida element= {<Historial/>}/>}/>
            </Routes>
          </BrowserRouter>
        </Fragment>
      </div>
    </>
  )
}

export default App
