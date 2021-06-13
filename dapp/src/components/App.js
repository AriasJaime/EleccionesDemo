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
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/candidatos">Candidatos</Link></li>
      <li><Link to="/votantes">Votantes</Link></li>
      <li><Link to="/mesas">Mesas</Link></li>
      <li><Link to="/resultados">Resultados</Link></li>
      <li><Link to="/miscosas">Mis Cosas</Link></li>
      <li><Link to="/empezar">Empezar/Terminar</Link></li>
    </ul>
  </nav>
  )
  }else if(rol === "Administrador" && cole !== 99){
    return(
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/candidatos">Candidatos</Link></li>
          <li><Link to="/votantes">Votantes</Link></li>
          <li><Link to="/mesas">Mesas</Link></li>
          <li><Link to="/resultados">Resultados</Link></li>
          <li><Link to="/miscosas">Mis Cosas</Link></li>
          <li><Link to="/empezar">Empezar/Terminar</Link></li>
        </ul>
      </nav>
      )
  }else{
    return(
      <nav>
        <ul>
          <li><Link to="/miscosas">Votar</Link></li>
        </ul>
      </nav>
      )
  }
}




  

function App() {
 
  
  const [cole,setCount] = useState(99);
  const [nummesa,setMesa] = useState(999);
  const [estado,setEstado] = useState(false);
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
        BloqueMesa = <Mesas    nummesa={nummesa} setMesa={setMesa} cole={cole} drizzle={drizzle} drizzleState={drizzleState}/>
      }else{
        BloqueMesa =  <Mesa rol={datos._rol} mesaPresi={nummesa} setMesa={setMesa} drizzle={drizzle} drizzleState={drizzleState} />
      }
      return(
        <div className="App">
              <Router>        
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                <Navegacion cole={cole} drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/" exact>
                  <h1>Bienvenido a las elecciones</h1>
                  <Colegios cole={cole} setCount={setCount} drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/candidatos/">
                  <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/mesas/">
                  {BloqueMesa}
                </Route>
                <Route path="/resultados/">
                <Resultados  cole={cole}  drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/votantes/">
                <Votantes    cole={cole} drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/miscosas/">
                <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/empezar/">
                <Empezar    estado={estado} setEstado={setEstado}  drizzle={drizzle} drizzleState={drizzleState}/>
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
        BloqueMesa = <Mesas    nummesa={nummesa} setMesa={setMesa} cole={cole} drizzle={drizzle} drizzleState={drizzleState}/>
      }else{
        BloqueMesa =  <Mesa rol={datos._rol} mesaPresi={nummesa} setMesa={setMesa} drizzle={drizzle} drizzleState={drizzleState} />
      }
      return(
        <div className="App">
              <Router>        
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                <Navegacion cole={cole} drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/" exact>
                  <h1>Se encuentra en el colegio {cole}</h1>
                  <Colegios cole={cole} setCount={setCount} drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/candidatos/">
                  <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/mesas/">
                  {BloqueMesa}
                </Route>
                <Route path="/resultados/">
                <Resultados  cole={cole} drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/votantes/">
                <Votantes   cole={cole}  drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/miscosas/">
                <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/empezar/">
                <Empezar    estado={estado} setEstado={setEstado}  drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                
              </Router>
              
            </div>
      )
    
  }else{
      return(
        <Router>        
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                <Navegacion drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/miscosas/">
                <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
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
