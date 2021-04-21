import {DrizzleContext} from "@drizzle/react-plugin";
import '../css/app.css';

import Header from './Header';
import Candidatos from './Candidatos/Candidatos';
import Empezar from './Empezar/Empezar';
import Votantes from './Votantes/Votantes';
import Resultados from './Resultados/Resultados';
import Mesas from './Mesas/Mesas';


function App() {
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const {drizzle, drizzleState, initialized} = drizzleContext;
        if (!initialized) {
        return (<main><h1>⚙ Cargando dapp...</h1></main>);
        }
 return (
    <div className="App">
      <Header       drizzle={drizzle} drizzleState={drizzleState}/>
      <Candidatos   drizzle={drizzle} drizzleState={drizzleState}/>
      <Empezar      drizzle={drizzle} drizzleState={drizzleState}/>
      <Mesas        drizzle={drizzle} drizzleState={drizzleState}/>
      <Resultados   drizzle={drizzle} drizzleState={drizzleState}/>
      <Votantes     drizzle={drizzle} drizzleState={drizzleState}/>
    </div>
    );
  }}
  </DrizzleContext.Consumer>
  );
}

export default App;
