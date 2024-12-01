import React from 'react'
import Navb from '../mini-modulos/Navbar'
import "../../style/dirform.css"
import "../../style/reset.css"
function Direccion() {
  return (
    <section>
      <div>
        <Navb/>
      </div>
      <div className='dir-c'>
        <div className='form-str'>
          <div className='form-titl'>
            <p>Completa el formulario para generar la direccion de envio</p>
          </div>
          <div className='dir-form'>
            <div className='direc-element-c'>
            <label htmlFor="name" className='field-title'>Carrera, Avenida etc..</label>
              <select name="dir1"  className='field-dir'>
                <option value=""></option>
                <option value="">Calle</option>
                <option value="">Carrera</option>
                <option value="">Avenida</option>
                <option value="">Circunvalar</option>
              </select>
            </div>
            <div className='direc-element-c'>
              <label htmlFor="name" className='field-title'>Numero:</label>
              <input type='number' className='field-dir' name='number' placeholder='56, 75, 60 etc..'/>
            </div>
            <div className='direc-element-c'>
            <label htmlFor="name" className='field-title'>A, B, F, G etc..</label>
              <select name="dir1"  className='field-dir'>
                <option value=""></option><option value="">A</option><option value="">B</option>
                <option value="">C</option><option value="">D</option><option value="">E</option>
                <option value="">F</option><option value="">G</option><option value="">H</option>
                <option value="">I</option><option value="">J</option><option value="">K</option>
                <option value="">L</option><option value="">M</option><option value="">N</option>
                <option value="">O</option><option value="">P</option><option value="">Q</option>
              </select>
            </div>
            <div className='direc-element-c'>
              <label htmlFor="name" className='field-title'>Numero</label>
              <input type='number' className='field-dir' name='number'/>
            </div>
            <div className='direc-element-c'>
            <label htmlFor="name" className='field-title'>A, B, F, G etc..</label>
              <select name="dir1"  className='field-dir'>
                <option value=""></option><option value="">A</option><option value="">B</option>
                <option value="">C</option><option value="">D</option><option value="">E</option>
                <option value="">F</option><option value="">G</option><option value="">H</option>
                <option value="">I</option><option value="">J</option><option value="">K</option>
                <option value="">L</option><option value="">M</option><option value="">N</option>
                <option value="">O</option><option value="">P</option><option value="">Q</option>
              </select>
            </div>
            <div className='direc-element-c'>
              <label htmlFor="name" className='field-title'>Numero:</label>
              <input type='number' className='field-dir' name='number' placeholder='56, 75, 60 etc..'/>
            </div>
            <div className='direc-element-c'>
            <label htmlFor="name" className='field-title'>A, B, F, G etc..</label>
              <select name="dir1"  className='field-dir'>
                <option value=""></option><option value="">A</option><option value="">B</option>
                <option value="">C</option><option value="">D</option><option value="">E</option>
                <option value="">F</option><option value="">G</option><option value="">H</option>
                <option value="">I</option><option value="">J</option><option value="">K</option>
                <option value="">L</option><option value="">M</option><option value="">N</option>
                <option value="">O</option><option value="">P</option><option value="">Q</option>
              </select>
            </div>
            <div className='direc-element-c'>
            <label htmlFor="name" className='field-title'>Bis / No Bis.</label>
              <select name="dir1"  className='field-dir'>
                <option value=""></option>
                <option value="">Bis</option>
                <option value="">No Bis</option>
              </select>
            </div>
          </div>
          <div className='all-dir'>
            <label htmlFor="dir-compl" className='field-dir-c'>Direccion completa</label>
            <input type='Text' className='field-dir-complt' name='dir-compl'/>
          </div>
          <div className='submt'>
            <button className='btn-submt'>Cargar direccion</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Direccion