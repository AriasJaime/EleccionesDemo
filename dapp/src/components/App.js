import {DrizzleContext} from "@drizzle/react-plugin";
import '../css/app.css';

import{BrowserRouter as Router,Route,Link} from "react-router-dom";

import Header from './Header';
import Candidatos from './Candidatos/Candidatos';
import Empezar from './Empezar/Empezar';
import Votantes from './Votantes/Votantes';
import Resultados from './Resultados/Resultados';
import Mesas from './Mesas/Mesas';
import MisCosas from './MisCosas/MisCosas';
import Colegios from './Colegios/Colegios';
import React, { useState } from 'react';
import Mesa from "./Mesa/Mesa";

import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;



const Navegacion = (props) => {
  const {rol,cole} = props;
  if(rol === "Administrador" && cole === 99){
  return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ps-0 ps-md-5">
      <div class="ps-3 ps-md-5">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav" >
        <ul class="navbar-nav">
          <li  class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/">Inicio</Link></li>
          <li class="nav-item active "><Link class="nav-link" style={{color: "white"}} to="/candidatos">Candidatos</Link></li>
          <li class="nav-item active "><Link class="nav-link" style={{color: "white"}} to="/votantes">Votantes</Link></li>
          <li class="nav-item active "><Link class="nav-link" style={{color: "white"}} to="/mesas">Mesas</Link></li>
          <li class="nav-item active "><Link class="nav-link" style={{color: "white"}} to="/resultados">Resultados</Link></li>
          <li class="nav-item active "><Link class="nav-link" style={{color: "white"}} to="/miscosas">Mis Cosas</Link></li>
          <li class="nav-item active "><Link class="nav-link" style={{color: "white"}} to="/empezar">Empezar/Terminar</Link></li>
        </ul>
        </div>
      </nav>
      )
  }else if(rol === "Administrador" && cole !== 99){
    return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ps-0 ps-md-5">
      <div class="ps-3 ps-md-5">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/">Inicio</Link></li>
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/candidatos">Candidatos</Link></li>
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/votantes">Votantes</Link></li>
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/mesas">Mesas</Link></li>
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/resultados">Resultados</Link></li>
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/miscosas">Mis Cosas</Link></li>
              <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/empezar">Empezar/Terminar</Link></li>
            </ul>
      </div>
    </nav>
      )
  }else if(rol === "Presidente"){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
        <ul  class="navbar-nav">
          <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/miscosas">Mi mesa</Link></li>
        </ul>
      </nav>
      )
  }else{
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
        <ul  class="navbar-nav">
          <li class="nav-item active"><Link class="nav-link" style={{color: "white"}} to="/miscosas">Votar</Link></li>
        </ul>
      </nav>
      )
  }
}




  

function App() {
 
  
  const [cole,setCount] = useState(99);
  const [nummesa,setMesa] = useState(999);
  const [estado,setEstado] = useState(false);
  const [nom,setNom] = useState("");
  var BloqueMesa;
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const {drizzle, drizzleState, initialized} = drizzleContext;
        if (!initialized) {
        return (<main><h1>⚙ Cargando dapp...</h1></main>);
        }
 return (
   
  <ContractData drizzle={drizzle} 
  drizzleState={drizzleState}
  cole={cole}
  setCount={setCount}
  contract={"Elecciones"}
  method={"quienSoy"}
  methodArgs={[]}
  render={datos => {
    if(datos._rol === "Administrador" && cole === 99){
      console.log(cole)
      console.log(nummesa)
      console.log(datos._rol)
      if(nummesa===999){
        BloqueMesa = <Mesas    nummesa={nummesa} setMesa={setMesa} cole={cole} nom={nom} drizzle={drizzle} drizzleState={drizzleState}/>
      }else{
        BloqueMesa =  <Mesa rol={datos._rol} mesaPresi={nummesa} setMesa={setMesa} nom={nom} drizzle={drizzle} drizzleState={drizzleState} />
      }
      return(
        <div className="App">
              <Router>
                <div class="py-lg-0 py-2 px-3 px-lg-2">      
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                </div>
                <Navegacion cole={cole} drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/" exact>
                  <div class="px-5 pt-4">
                      <Colegios cole={cole} nom={nom} setNom={setNom} setCount={setCount} drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                  <Route path="/candidatos/">
                    <div class="px-5 pt-4">
                      <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
                    </div>
                </Route>
                <Route path="/mesas/">
                    <div class="px-5 pt-4">
                      {BloqueMesa}
                    </div>
                </Route>
                <Route path="/resultados/">
                  <div class="px-5 pt-4">
                    <Resultados  cole={cole} nom={nom} drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/votantes/">
                  <div class="px-5 pt-4">
                    <Votantes    cole={cole} nom={nom} drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/miscosas/">
                  <div class="px-5 pt-4">
                    <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/empezar/">
                <div class="px-5 pt-4">
                  <Empezar    estado={estado} setEstado={setEstado}  drizzle={drizzle} drizzleState={drizzleState}/>
                </div>
                </Route>
                
              </Router>
              
            </div>
      )
    // }else if(datos._rol === "Administrador" && cole === 1){
    //   <Router>        
    //             <Header       drizzle={drizzle} drizzleState={drizzleState}/>
    //             <Navegacion drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
    //             <Route path="/" exact>
    //               <p>Bienvedasdsalas elecciones</p>
    //               <Colegios cole={cole} setCount={setCount} drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
    //             <Route path="/candidatos/">
    //               <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
    //             <Route path="/mesas/">
    //               <Mesas        drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
    //             <Route path="/resultados/">
    //             <Resultados   drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
    //             <Route path="/votantes/">
    //             <Votantes     drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
    //             <Route path="/miscosas/">
    //             <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
    //             <Route path="/empezar/">
    //             <Empezar      drizzle={drizzle} drizzleState={drizzleState}/>
    //             </Route>
                
    //           </Router>
    }else if(datos._rol === "Administrador" && cole !== 99){
      console.log(cole)
      console.log(datos._rol)
      
      if(nummesa===999){
        BloqueMesa = <Mesas    nummesa={nummesa} setMesa={setMesa} cole={cole} nom={nom} drizzle={drizzle} drizzleState={drizzleState}/>
      }else{
        BloqueMesa =  <Mesa rol={datos._rol} mesaPresi={nummesa} setMesa={setMesa} nom={nom} drizzle={drizzle} drizzleState={drizzleState} />
      }
      return(
        <div className="App">
              <Router>        
                <div class="py-lg-0 py-2 px-3 px-lg-2"> 
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                </div>
                <Navegacion cole={cole} drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/" exact>
                  <div class="px-5 pt-4">
                    <h2 class="ps-5 ">Colegio seleccionado: {nom}</h2>
                    <Colegios cole={cole}  setNom={setNom} nom={nom} setCount={setCount} drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/candidatos/">
                  <div class="px-5 pt-4">
                    <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/mesas/">
                  <div class="px-5 pt-4">
                    {BloqueMesa}
                  </div>
                </Route>
                <Route path="/resultados/">
                  <div class="px-5 pt-4">
                    <Resultados  cole={cole} nom={nom} drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/votantes/">
                  <div class="px-5 pt-4"> 
                    <Votantes   cole={cole} nom={nom}  drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/miscosas/">
                  <div class="px-5 pt-4">
                    <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                <Route path="/empezar/">
                  <div class="px-5 pt-4">
                    <Empezar    estado={estado} setEstado={setEstado}  drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
                
              </Router>
              
            </div>
      )
    
  }else{
      return(
        <Router>   
                <div class="py-lg-0 py-2 px-3 px-lg-2">      
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                </div>
                <Navegacion drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/miscosas/">
                  <div class="px-5 pt-4">
                    <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
                  </div>
                </Route>
        </Router>
      )
    }
    
  }
}
/>
    );
  }}
  </DrizzleContext.Consumer>
  );
}

export default App;
