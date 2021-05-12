import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const MesasRow = (props) => {
    const {drizzle, drizzleState, mesaIndex, mesaId} = props;
    return <tr key={"MESA-" + mesaIndex}>
        <th>M<sub>{mesaIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"datosMesa"}
            methodArgs={[mesaId.numeroGlobal]}
            render={datos => <>
                <td>{datos.idColegio}</td>
                <td>{datos.numero}</td>
                <td>{datos.numeroGlobal}</td>
                <td>{datos.presidente}</td>
                <td>{datos.numeroVotantes}</td>
                <td>{datos.numeroVotos}</td>
                <td>{datos.actaFirmada}</td>
            </>}
        />

        
    </tr>;
};

export default MesasRow;