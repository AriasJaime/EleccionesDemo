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

import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const Navegacion = (props) => {
  const {rol} = props;
  if(rol === "Administrador"){
  return(
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/candidatos">Candidatos</Link></li>
      <li><Link to="/votantes">Votantes</Link></li>
      <li><Link to="/mesas">Mesas</Link></li>
      <li><Link to="/resultados">Resultados</Link></li>
      <li><Link to="/miscosas">MisCosas</Link></li>
      <li><Link to="/empezar">Empezar/Terminar</Link></li>
    </ul>
  </nav>
  )
  }else{
    return(
      <nav>
        <ul>
          <li><Link to="/miscosas">MisCosas</Link></li>
        </ul>
      </nav>
      )
  }
}
function App() {
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const {drizzle, drizzleState, initialized} = drizzleContext;
        if (!initialized) {
        return (<main><h1>⚙ Cargando dapp...</h1></main>);
        }
 return (
   
  <ContractData drizzle={drizzle} 
  drizzleState={drizzleState} contract={"Elecciones"}
  method={"quienSoy"}
  methodArgs={[]}
  render={datos => {
    if(datos._rol === "Administrador"){
      return(
        <div className="App">
              <Router>        
                <Header       drizzle={drizzle} drizzleState={drizzleState}/>
                <Navegacion drizzle={drizzle} drizzleState={drizzleState} rol={datos._rol}/>
                <Route path="/" exact>
                  <p>Bienvenido a las elecciones</p>
                </Route>
                <Route path="/candidatos/">
                  <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/mesas/">
                  <Mesas        drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/resultados/">
                <Resultados   drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/votantes/">
                <Votantes     drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/miscosas/">
                <MisCosas      drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/empezar/">
                <Empezar      drizzle={drizzle} drizzleState={drizzleState}/>
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
