import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const VotantesRow = (props) => {
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
                <td>{datos.nombre}</td>
                <td>{datos.idColegio}</td>
                <td>{datos.numeroMesa}</td>
                <td>{datos.dni}</td>
                <td>{datos.calle}</td>
                <td>{datos.votado? "Sí" : "No"}</td>
                <td>{datos.direccion}</td>
            </>}
        />

        
    </tr>;
};

export default VotantesRow;