import React from 'react'

export const Editar = ({peli, conseguirPeliculas}) => {
    const titulo_componente= "Editar titulo";

    const guardarEdicion = (e, id) =>{
        e.preventDefault();
        // conseguir formulario 
        let target = e.target;

        //buscar indice de la pelicula
        const pelis_almacenadas = conseguirPeliculas;
        

        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)
            console.log(indice)
       

    
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input  type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue={peli.title}
            />
            <textarea name='descripcion'
                      defaultValue={peli.description}
                      className='descripcion_editada'
            />
            <input type='submit' className='editar' value='Actualizar'
            />


        </form>


    </div>
  )
}
