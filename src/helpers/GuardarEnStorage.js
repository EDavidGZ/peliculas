export const GuardarEnStorage = (clave, elemento) => {

      
    //conseguir elementos

    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    //comprobar si son array
    if(Array.isArray(elementos)) {
      //añadir a array
      elementos.push(elemento);
    }else {
      //crear array
      elementos = [elemento];
    }
    

    //guardar en el local
      localStorage.setItem(clave, JSON.stringify(elementos))

    //devolver objeto
      return elemento;

  }