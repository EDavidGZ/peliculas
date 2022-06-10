import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false)

  
  const buscarPeli = (e) => {
    //crear estado
    setBusqueda(e.target.value)
    //e.preventDefault();
    //console.log(e.target.value)


    //preponderanteCatalogo.filter(element => element.descripcion.includes(value))
    //preponderanteCatalogo.filter(element => element.numero === value);
   // let result = peliculas.filter(pelicula => pelicula.title.includes(e.target.value))
    //let result = peliculas.filter(pelicula => pelicula.title === e.target.value)
    //console.log('Resultados de busqueda', result )

    //listado completo


    //filtrar 

    let pelis_encontradas = listadoState.filter(peli => {
        return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase())
    });

    if(busqueda.length <= 1 || busqueda.length <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);

    } else {
      setNoEncontrado(false);
    }


    
    //cpomprobar resultado 

    //dar valor

    //actualizar state
      setListadoState(pelis_encontradas)

  }

  const search = () => {
    console.log('busqueda', busqueda)
    let pelis_encontradas = listadoState.filter(peli => {
      return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase())

      
    });
    //console.log("Busqueda", busqueda)
    if(busqueda.length <= 1 || busqueda.length <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);

    } else {
      setNoEncontrado(false);
    }
    console.log('peliculas encontradas', pelis_encontradas)
    setListadoState(pelis_encontradas)

  }



  return (
    <div className="search">
        <h3 className="title">Buscador</h3>
        {(noEncontrado == true && busqueda.length > 1 ) && (
          <span className='span'>No se encontro ninguna coincidencia.</span>
        )}
        <form>
            <input type="text"
                   id="search_field" 
                   name='busqueda'
                   autoComplete={busqueda}
                   onChange={(e) => setBusqueda(e.target.value)}
            />
            <button id="search" 
                    type='button'
                    onClick={search}>Buscar</button>
        </form>
    </div>
  )
}
