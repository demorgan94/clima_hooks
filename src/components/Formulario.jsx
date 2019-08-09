import React, { useState } from 'react';

const Formulario = ({ datosConsulta }) => {

   // busqueda = "state" y guardarBusqueda = "this.setState({})" 
   const [busqueda, guardarBusqueda] = useState({
      ciudad: '',
      pais: ''
   });

   const handleChange = e => {
      guardarBusqueda({
         ...busqueda,
         [e.target.name]: e.target.value
      });
   }

   const handleSubmit = e => {
      e.preventDefault();

      datosConsulta(busqueda);
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="input-field col s12">
            <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
            <label htmlFor="ciudad">Ciudad:</label>
         </div>

         <div className="input-field col s12">
            <select name="pais" id="pais" onChange={handleChange}>
               <option value="">-- Selecciona un País --</option>
               <option value="MX">México</option>
               <option value="US">Estados Unidos</option>
               <option value="AR">Argentina</option>
               <option value="CO">Colómbia</option>
               <option value="ES">España</option>
            </select>
         </div>

         <div className="input-field col 12">
            <input type="submit" value="Buscar Clíma" className="waves-effect waves-light btn-large btn-block yellow accent-4" />
         </div>
      </form>
   );
};

export default Formulario;