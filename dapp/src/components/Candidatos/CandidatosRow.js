import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const CandidatosRow = (props) => {
    const {drizzle, drizzleState, partidoIndex, partidoAddr} = props;
    return <tr key={"PART-" + partidoIndex}>
        <th>P<sub>{partidoIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"datosPartidos"}
            methodArgs={[partidoAddr]}
            render={datos => <>
                <td>{datos.nombre}</td>
            </>}
        />

        {/* <td>{partidoAddr}</td>  */}
    </tr>;
};

export default CandidatosRow;