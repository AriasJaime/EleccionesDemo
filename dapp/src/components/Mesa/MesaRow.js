import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const MesaRow = (props) => {
    const {drizzle, drizzleState, votanteIndex, votanteAddr} = props;
    return <tr key={"VOT-" + votanteIndex}>
        <th>V<sub>{votanteIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"datosVotante"}
            methodArgs={[votanteAddr]}
            render={datos => <>
            
                <td>{datos.numeroMesa}</td>
                <td>{datos.idColegio}</td>
                <td>{datos.nombre}</td>
                <td>{datos.dni}</td>
                <td>{datos.calle}</td>
                <td>{datos.votado? "Sí" : "No"}</td>
                <td>{datos.direccion}</td>
            </>}
        />

        
    </tr>;
};

export default MesaRow;