import React, {useState} from 'react';
import "../../style/filtro.css";
import "../../style/reset.css";
import buscar from '../../assets/buscar1.svg'

// prop de estado del filtro desde Search 
const Filtro = ({filtroCate, setFiltroCate, setprecioIni,setprecioFin}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMarca, setIsOpenMarca] = useState(false);
    // estado del filtro
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFiltroCate((prevFiltroCate) => ({...prevFiltroCate,
            [name]: checked,
        }));
      };
      // estado del despliegue de opciones
      let arr
      let mar
      isOpen? arr = "box-de-Activ" : arr = "box-de"
      isOpenMarca? mar = "box-de-Activ" : mar= "box-de"
    const activOpt = ()=>{
        setIsOpen(!isOpen);
    }
    const activOptMarca = ()=>{
        setIsOpenMarca(!isOpenMarca);
    }
    // estructura del filtro y funciones de eventos
    return (
        <div className='catalogo'>
            <div className='t-catalogo'>
                <div className='e-catalogo'>
                    <p className='item-h'>Catalogo</p>
                    <div className='divisor-l'></div>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="Tecnologia" 
                        name="Tecnologia" 
                        checked={filtroCate.Tecnologia}
                        onChange={handleCheckboxChange}/>
                    <label htmlFor="Tecnologia">Tecnologia</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="Electrodomestico" 
                        name="Electrodomestico" 
                        checked={filtroCate.Electrodomestico}
                        onChange={handleCheckboxChange}/>
                    <label htmlFor="Electrodomestico">Electrodomesticos</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="Accesorios" 
                        name="Accesorios"
                        checked={filtroCate.Accesorios}
                        onChange={handleCheckboxChange}/>
                    <label htmlFor="Accesorios">Accesorios</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="Muebles" 
                        name="Muebles"
                        checked={filtroCate.Muebles}
                        onChange={handleCheckboxChange}/>
                    <label htmlFor="Muebles">Muebles</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="Programas" 
                        name="Programas" 
                        checked={filtroCate.Programas}
                        onChange={handleCheckboxChange}/>
                    <label htmlFor="Programas">Programas</label>
                </div>
            </div>
            <div className='precio'>
                <div className='e-catalogo'>
                    <p className='item-h'>Precio</p>
                    <div className='divisor-l'></div>
                </div>
                <div className='price-container'>
                    <div className='price-limit'>
                        <div className='field-i-l'>
                            <div className='condition-e'>
                                <label htmlFor="desde">Desde</label>
                                <input 
                                type="number" 
                                placeholder="700.000" 
                                id="desde" 
                                className='limit-i'
                                onChange={(e) => setprecioIni(Number(e.target.value))}/>
                            </div>
                            <div className='condition-e'>
                                <label htmlFor="hasta">Hasta</label>
                                <input 
                                    type="number" 
                                    placeholder="5`000.000" 
                                    id="hasta" 
                                    className='limit-i'
                                    onChange={(e) => setprecioFin(Number(e.target.value))}/>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className='calificacion'>
                <div className='e-catalogo'>
                    <p className='item-h'>Filtrar por:</p>
                    <div className='divisor-l'></div>
                </div>
                <div className='field-card' >
                    <div className='field-card-suv'>
                        <div className='f-card'>
                            <p className='text-f'>Tipo:</p>
                            <div className={arr} onClick={activOpt}></div>
                        </div>
                        {isOpen?(
                            <div className='box-option-cont-Activ'>
                                <div className='more-option-Activ'>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Celular" 
                                        name="Celular" 
                                        checked={filtroCate.Celular} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Celular">Celular</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Tablets"  
                                        name="Tablets" 
                                        checked={filtroCate.Tablets} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Tablets">Tablets</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="ComputadorLaptop"
                                        name="ComputadorLaptop"   
                                        checked={filtroCate.ComputadorLaptop} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="ComputadorLaptop">Computador Laptop</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="ComputadorEscritorio" 
                                        name="ComputadorEscritorio" 
                                        checked={filtroCate.ComputadorEscritorio} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="ComputadorEscritorio">Computador de escritorio</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Televisores"
                                        name="Televisores" 
                                        checked={filtroCate.Televisores} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Televisores">Televisores</label>
                                </div>
                                
                            </div>
                            </div>
                        ):(
                            <div className='box-option-cont'>
                                <div className='more-option'>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Celular" 
                                        name="Celular" 
                                        checked={filtroCate.Celular} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Celular">Celular</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Tablets"  
                                        name="Tablets" 
                                        checked={filtroCate.Tablets} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Tablets">Tablets</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="ComputadorLaptop"
                                        name="ComputadorLaptop"   
                                        checked={filtroCate.ComputadorLaptop} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="ComputadorLaptop">Computador Laptop</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="ComputadorEscritorio" 
                                        name="ComputadorEscritorio" 
                                        checked={filtroCate.ComputadorEscritorio} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="ComputadorEscritorio">Computador de escritorio</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Televisores"
                                        name="Televisores" 
                                        checked={filtroCate.Televisores} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Televisores">Televisores</label>
                                </div>
                                
                            </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='field-card'>
                    <div className='f-card'>
                        <p className='text-f'>Marca:</p>
                        <div className={mar} onClick={activOptMarca}></div>
                    </div>
                    {isOpenMarca?(
                            <div className='box-option-cont'>
                                <div className='more-option-Activ-m'>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Samsung" 
                                        name="Samsung" 
                                        checked={filtroCate.Samsung} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Samsung">Samsung</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Apple"  
                                        name="Apple" 
                                        checked={filtroCate.Apple} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Apple">Apple</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Motorola"
                                        name="Motorola"   
                                        checked={filtroCate.Motorola} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Motorola">Motorola</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="HP" 
                                        name="HP" 
                                        checked={filtroCate.HP} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="HP">HP</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Lenovo"
                                        name="Lenovo" 
                                        checked={filtroCate.Lenovo} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Lenovo">Lenovo</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Azus"
                                        name="Azus" 
                                        checked={filtroCate.Azus} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Azus">Azus</label>
                                </div>
                                
                            </div>
                            </div>
                        ):(
                            <div className='box-option-cont'>
                                <div className='more-option'>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Samsung" 
                                        name="Samsung" 
                                        checked={filtroCate.Samsung} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Samsung">Samsung</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Apple"  
                                        name="Apple" 
                                        checked={filtroCate.Apple} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Apple">Apple</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Motorola"
                                        name="Motorola"   
                                        checked={filtroCate.Motorola} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Motorola">Motorola</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="HP" 
                                        name="HP" 
                                        checked={filtroCate.HP} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="ComputadorEscritorio">HP</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Lenovo"
                                        name="Lenovo" 
                                        checked={filtroCate.Lenovo} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Lenovo">Lenovo</label>
                                </div>
                                <div className='items-sub-cont'>
                                    <input 
                                        type="checkbox" 
                                        id="Azus"
                                        name="Azus" 
                                        checked={filtroCate.Azus} 
                                        onChange={handleCheckboxChange}/>
                                    <label htmlFor="Azus">Azus</label>
                                </div>
                            </div>
                            </div>
                        )}
                </div>
                <div className='field-card'>
                    <div className='f-card'>
                        <p className='text-f'>Color:</p>
                        <div className='box-de'></div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='field-card'>
                    <div className='f-card'>
                        <p className='text-f'>Calificacion:</p>
                        <div className='box-de'></div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filtro;
