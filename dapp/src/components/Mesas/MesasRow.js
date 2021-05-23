import {newContextComponents} from "@drizzle/react-components";
import Mesa from "../Mesa/Mesa";
import{BrowserRouter as Router,Route,Link} from "react-router-dom";
const {ContractData} = newContextComponents;

const Nave = ()=>(
    <button><Link to="/mesas/mesa">Acceder</Link></button>
)
const MesasRow = (props) => {
    const {drizzle, drizzleState, mesaIndex, mesaId,cole} = props;
    if(cole === 99){
        console.log("dsadsa",cole)
        return <tr key={"MESA-" + mesaIndex}>
        <th>M<sub>{mesaIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"datosMesa"}
            methodArgs={[mesaId.numeroMesa]}
            render={datos => <>
                <td>{datos.idColegio}</td>
                <td>{datos.numeroMesa}</td>
                <td>{datos.presidente}</td>
                <td>{datos.numeroVotantes}</td>
                <td>{datos.numeroVotos}</td>
                <td>{datos.actaFirmada}</td>
                
                <Router>
                <Nave drizzle={drizzle} drizzleState={drizzleState}/>
                   <Route path="/mesas/mesa">
                   <button><Link to = "/mesas/">X</Link></button>
                    <Mesa drizzle={drizzle}
                        drizzleState={drizzleState}
                        mesaPresi={datos.numeroMesa}/>
                    </Route> 
                </Router>
            </>}
        />

        
    </tr>;
    }else{
        console.log("paco",cole)
        return <tr key={"MESA-" + mesaIndex}>
        <th>M<sub>{mesaIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"datosMesa"}
            methodArgs={[mesaId]}
            render={datos => <>
                <td>{datos.idColegio}</td>
                <td>{datos.numeroMesa}</td>
                <td>{datos.presidente}</td>
                <td>{datos.numeroVotantes}</td>
                <td>{datos.numeroVotos}</td>
                <td>{datos.actaFirmada}</td>
                <Router>
                <Nave drizzle={drizzle} drizzleState={drizzleState}/>
                   <Route path="/mesas/mesa">
                       <button><Link to = "/mesas/">X</Link></button>
                        <Mesa drizzle={drizzle}
                                drizzleState={drizzleState}
                                mesaPresi={datos.numeroMesa}/>
                    </Route> 
                </Router>
            </>}
        />

        
    </tr>;
    }
    
};

export default MesasRow;