import React, { useState, useEffect } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {
    // const [listadoState, setListadoState] = useState({})


    const [editar, setEditar] = useState(0);

    useEffect(() => {
      conseguirPeliculas();
    
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);
        return peliculas;
    }    
    
    console.log(listadoState);

    const borrarPeli = (id) => {
      //conseguir peli
        let pelis_almacenadas = conseguirPeliculas();
        //console.log(conseguirPeliculas)


      // filtrar pelis
        let new_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
        //console.log(new_array_pelis);
      // actualizar en localstorage
        setListadoState(new_array_pelis);
      // actualizar listado state
        localStorage.setItem('pelis', JSON.stringify(new_array_pelis));
    }


  return (
    <>
     
    { listadoState != null ?
      listadoState.length > 0  && listadoState.map(peli => {

            return (
            <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.title}</h3>
                <p className="description">{peli.description}</p>

               {/* <button className="edit" onClick={() => setEditar(peli.id)}>Borrar</button> */} 
                <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
            
            {/* Formulario */}
            { editar === peli.id && (
              < Editar peli={peli} 
                       conseguirPeliculas={conseguirPeliculas}
              />
            )}

            
            </article>)

            
    })
      : <h3>No hay peliculas</h3>
    }
        

       
    
    </>
    
  )
}
