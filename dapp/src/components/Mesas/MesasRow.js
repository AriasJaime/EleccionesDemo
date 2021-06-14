import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;


const MesasRow = (props) => {
    const {drizzle, drizzleState, mesaIndex, mesaId,cole,setMesa} = props;
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
                
                <td><button class="btn btn-outline-dark btn-sm" onClick={() => setMesa(datos.numeroMesa)}>Detalles</button></td>
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
                <td><button class="btn btn-outline-dark" onClick={() => setMesa(datos.numeroMesa)}>Detalles</button></td>
            </>}
        />

        
    </tr>;
    }
    
};

export default MesasRow;