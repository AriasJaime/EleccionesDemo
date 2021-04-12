import {DrizzleContext} from "@drizzle/react-plugin";
import '../css/app.css';

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
      <header className="App-header">
        
       <h1>Elecciones</h1>
      </header>
    </div>
    );
  }}
  </DrizzleContext.Consumer>
  );
}

export default App;
