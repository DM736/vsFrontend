import {React, useState, useEffect} from 'react';
import Navb from '../mini-modulos/Navbar';
import "../../style/home.css";
import w10 from "../../assets/w10.png";
import Footer from '../mini-modulos/footer';
import CardsType from '../mini-modulos/CardsType';
import Invoke from "../../../config/Invoke";


const Home = () => {
return (
     <section className='home-c'>
          <header>
          <Navb/>
          </header>
          <main>
          <div className='type-card-c'>
               <CardsType/>
          </div>
          <section className='banner'>
               <div className='imag'></div>
               </section>
               <section className='add-c'>
               <div className='add-elmt'>
                    <div className='decor-c1'>
                         <div className='decor'></div>
                    </div>
                    <div className='decor-c2'>
                         <div className='decor2'></div>
                    </div>
                    <div className="info-div">
                         <p className='info-o'><div className='uppertxt'>25%</div>en licencias de software</p>
                         <img src={w10} className='wimg'></img>
                    </div>
               </div>
               <div className='add-elmt'>
                    <div className='decor-c1'>
                         <div className='decor'></div>
                    </div>
                    <div className='decor-c2'>
                         <div className='decor2'></div>
                    </div>
                    <div className="info-div">
                         <p className='info-o'><div className='uppertxt'>25%</div>en licencias de software</p>
                         <img src={w10} className='wimg'></img>
                    </div>
               </div>
               <div className='add-elmt'>
                    <div className='decor-c1'>
                         <div className='decor'></div>
                    </div>
                    <div className='decor-c2'>
                         <div className='decor2'></div>
                    </div>
                    <div className="info-div">
                         <p className='info-o'><div className='uppertxt'>25%</div>en licencias de software</p>
                         <img src={w10} className='wimg'></img>
                    </div>
               </div>
               <div className='add-elmt'>
                    <div className='decor-c1'>
                         <div className='decor'></div>
                    </div>
                    <div className='decor-c2'>
                         <div className='decor2'></div>
                    </div>
                    <div className="info-div">
                         <p className='info-o'><div className='uppertxt'>25%</div>en licencias de software</p>
                         <img src={w10} className='wimg'></img>
                    </div>
               </div>
               <div className='add-elmt'>
                    <div className='decor-c1'>
                         <div className='decor'></div>
                    </div>
                    <div className='decor-c2'>
                         <div className='decor2'></div>
                    </div>
                    <div className="info-div">
                         <p className='info-o'><div className='uppertxt'>25%</div>en licencias de software</p>
                         <img src={w10} className='wimg'></img>
                    </div>
               </div>
               </section>
               <div className='footer-c'>
               <Footer/>
               </div>
          </main>
     </section>
    );
}

export default Home;