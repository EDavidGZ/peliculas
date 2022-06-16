import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const titlePrincipal = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
      title: '',
      description: '' 
    })
    const { title, description } = peliState;

    const conseguirDatos = e => {
        e.preventDefault();

        //conseguir datos
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;


        //crear objeto 
        let peli =  {
            id: new Date().getTime(),
            title,
            description
        }
        //Guardar estado
        setPeliState(peli);
       setListadoState(elementos => { 
          if(elementos != null){
            
            return [ ...elementos, peli]
          } else {
            return [peli]
          }
        
        })

        //Guardar en el local storage
        GuardarEnStorage("pelis",peli);


          
      }
      


  return (
    <div className="add">
        <h3 className="title">{titlePrincipal}</h3>
          <strong>
            {(title && description) && "Has creado la pelicula: "+title}
          </strong>
        <form onSubmit={conseguirDatos}>
            <input      type="text" 
                        id="title"
                        name='title'
                        placeholder="Titulo" />     

            <textarea   id="description" 
                        name='description'
                        placeholder="Descripción"></textarea>

            <input      type="submit"    
                        id="save" 
                        value="Guardar" />
        </form>
    </div>
  )
}
