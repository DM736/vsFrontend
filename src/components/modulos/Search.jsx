import React,{useState, useEffect} from 'react';
import Navb from '../mini-modulos/Navbar';
import "../../style/sear.css"
import Filtro from '../mini-modulos/Filtro';
import Cata from '../mini-modulos/Cata';
import Invoke from '../../../config/Invoke';

const Search = () => {
  const [elementos, setElementos] = useState([]);
  const [precioIni, setprecioIni] = useState(0);
  const [precioFin, setprecioFin] = useState(15000000);
  const [filtroCate, setFiltroCate] = useState({
    Tecnologia: false,Electrodomestico: false, Accesorios: false,
    Muebles: false, Programas:false,
    Celular: false, Tablets: false, ComputadorLaptop: false,
    ComputadorEscritorio: false, Televisores: false,
    Samsung: false, Apple: false, Motorola: false, 
    HP: false, Lenovo: false, Azus: false

  });
  useEffect(()=>{
    const getElements=async()=>{
      const resp = await Invoke.invokeGET("/api/productos")
      setElementos(resp)
    }
    getElements()
  },[])
  const elementosFiltrados = elementos.filter((elemento) => {
    return (
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
    );
  });

    return (
        <section>
            <div>
                <Navb/>
            </div>
            <section className='sec-f-t'>
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
