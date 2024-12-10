import React,{useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navb from '../mini-modulos/Navbar';
import "../../style/sear.css"
import Filtro from '../mini-modulos/Filtro';
import Cata from '../mini-modulos/Cata';
import Invoke from '../../../config/Invoke';


const Search = () => {
  const [elementos, setElementos] = useState([]);
  const [precioIni, setprecioIni] = useState(0);
  const [searchWord, setSearchWord] = useState("");
  const [precioFin, setprecioFin] = useState(15000000);
  const [filtroCate, setFiltroCate] = useState({
    Tecnologia: false,Electrodomestico: false, Accesorios: false,
    Muebles: false, Programas:false,
    Celular: false, Tablets: false, ComputadorLaptop: false,
    ComputadorEscritorio: false, Televisores: false,
    Samsung: false, Apple: false, Motorola: false, 
    HP: false, Lenovo: false, Azus: false
  });
  const direc = useLocation();
  const param = new URLSearchParams(direc.search)
  const itmSerch = param.get('valor');
  const [keyItem, setKeyItem]=useState(itmSerch);
  useEffect(()=>{
    const getElements=async()=>{
      const resp = await Invoke.invokeGET("/api/productos")
      setElementos(resp)
    }
    
    getElements()
  },[])
  const closeAll =()=>{
    const backg = document.querySelector(".sear-container-itm");
    backg.style.display ="none";
    setKeyItem("")
  }
  const elementosFiltrados = elementos.filter((elemento) => {
    if(keyItem.length>0){
      return(((elemento.nombreProducto.toLowerCase().includes(keyItem.toLowerCase())))||
      ((elemento.categoria.toLowerCase().includes(keyItem.toLowerCase())))
      )
    }else{
    return (
      (elemento.nombreProducto.toLowerCase().includes(searchWord.toLowerCase()))&&
        ((filtroCate.Tecnologia && elemento.categoria === 'Tecnologia') || 
        (filtroCate.Electrodomestico && elemento.categoria === 'Electrodomestico') || 
        (filtroCate.Accesorios && elemento.categoria === 'Accesorios') || 
        (filtroCate.Muebles && elemento.categoria === 'Muebles') || 
        (filtroCate.Programas && elemento.categoria === 'Programas') ||
        (!filtroCate.Tecnologia && !filtroCate.Electrodomestico && !filtroCate.Accesorios && !filtroCate.Muebles && !filtroCate.Programas) )&&

        ((elemento.precio >= precioIni && elemento.precio <= precioFin)||(!precioIni || !precioFin)||
        (elemento.precio >= precioIni) || (elemento.precio <= precioFin))&&

        ((filtroCate.Celular && elemento.tipoProducto === 'Celular') ||
        (filtroCate.Tablets && elemento.tipoProducto === 'Tablets') ||
        (filtroCate.ComputadorLaptop && elemento.tipoProducto === 'ComputadorLaptop') ||
        (filtroCate.ComputadorEscritorio && elemento.tipoProducto === 'ComputadorEscritorio') ||
        (filtroCate.Televisores && elemento.tipoProducto === 'Televisores') ||
        (!filtroCate.Celular && !filtroCate.Tablets && !filtroCate.ComputadorLaptop && !filtroCate.ComputadorEscritorio && !filtroCate.Televisores) )&&

        ((filtroCate.Samsung && elemento.marca === 'Samsung') ||
        (filtroCate.Apple && elemento.marca === 'Apple') ||
        (filtroCate.Motorola && elemento.marca === 'Motorola') ||
        (filtroCate.HP && elemento.marca === 'HP') ||
        (filtroCate.Lenovo && elemento.marca === 'Lenovo') ||
        (filtroCate.Azus && elemento.marca === 'Azus') ||
        (!filtroCate.Samsung && !filtroCate.Apple && !filtroCate.Motorola && !filtroCate.HP && !filtroCate.Lenovo && !filtroCate.Azus))
    );}
  });

    return (
        <section>
            <div>
                <Navb
                  setSearchWord={setSearchWord}
                />
            </div>
            <section className='sec-f-t'>
              <div className='sear-container-itm'>
                <div className='sear-itm-by'>
                  <p className='text-info-sear'>Buscando por: "{keyItem}"</p>
                  <button className="closbtn-sear" onClick={()=>{
                    closeAll();
                  }}>X</button>
                </div>
              </div>
                <Filtro
                    filtroCate={filtroCate}
                    setFiltroCate={setFiltroCate}
                    setprecioIni={setprecioIni}
                    setprecioFin={setprecioFin}
                />
                <Cata 
                  elementos={elementosFiltrados}
                />
            </section>
        </section>
    );
}

export default Search;
