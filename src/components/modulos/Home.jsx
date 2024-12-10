import React,{useState} from 'react';
import Navb from '../mini-modulos/Navbar';
import "../../style/home.css";
import w10 from "../../assets/w10.png";
import Footer from '../mini-modulos/footer';
import CardsType from '../mini-modulos/CardsType';


const Home = () => {
     //estado del input de la busqueda
     const [searchWord, setSearchWord] = useState("");
return (
     <section className='home-c'>
          <header>
          <Navb
               setSearchWord={setSearchWord}/>
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
                         <p className='info-o'><span className='uppertxt'>25%</span>en licencias de software</p>
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
                         <p className='info-o'><span className='uppertxt'>25%</span>en licencias de software</p>
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
                         <p className='info-o'><span className='uppertxt'>25%</span>en licencias de software</p>
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
                         <p className='info-o'><span className='uppertxt'>25%</span>en licencias de software</p>
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
                         <p className='info-o'><span className='uppertxt'>25%</span>en licencias de software</p>
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