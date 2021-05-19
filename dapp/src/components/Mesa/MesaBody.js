import {newContextComponents} from "@drizzle/react-components";

import MesaRow from "./MesaRow";

const {ContractData} = newContextComponents;

const MesaBody = (props) => {
    const {drizzle, drizzleState, votantesLength,mesaPresi} = props;
    let rows = [];
    for (let i = 0; i < votantesLength; i++) {
       
        //var mesaPresidente= drizzleState.contracts.Elecciones.quienSoy._nombre
        //console.log("presi",mesaPresidente)
        //var addressV = drizzle.contracts.Elecciones.methods.votantes.cacheCall(i);
        //console.log("addresV",addressV)
        //var mesa = drizzleState.contracts.Elecciones.datosVotante[addressV].numeroMesa
        
        
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"votanteMesa"}
            methodArgs={[mesaPresi,i]}
            render={addr => <MesaRow drizzle={drizzle}
            drizzleState={drizzleState}
            votanteIndex={i}
            votanteAddr={addr}/>
            }
            />
        )
        
    }
    

    return <tbody>{rows}</tbody>;
}

export default MesaBody;