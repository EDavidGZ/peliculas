import { useState } from 'react';
import './App.css';
import { Buscador } from './componentes/Buscador';
import { Crear } from './componentes/Crear';
import { Listado } from './componentes/Listado';

function App() {
    const [listadoState, setListadoState] = useState({})


  return (
    <div className="layout">
    {/*Cabecera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegación*/}
    <nav className="nav">
        
    </nav>

    {/*Contenido principal*/}
    <section id="content" className="content">

        {/*aqui van las peliculas*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>

    </section>

    {/*Barra lateral*/}
    <aside className="lateral">
       <Buscador listadoState={listadoState} setListadoState={setListadoState} />

       <Crear setListadoState={setListadoState} />
    </aside>

    {/*Pie de página*/}
    <footer className="footer">
        &copy; Pelis.David - <a href="https://github.com/EDavidGZ?tab=repositories">Efren David Garza Zacamolpa</a>
    </footer>

</div>

  );
}

export default App;
