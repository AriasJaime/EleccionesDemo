import {newContextComponents} from "@drizzle/react-components";

import ResultadosRow from "./ResultadosRow";

const {ContractData} = newContextComponents;

const ResultadosBody = (props) => {
    const {drizzle, drizzleState, partidosLength} = props;
    let rows = [];
    for (let i = 0; i < partidosLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"partidos"}
            methodArgs={[i]}
            render={addr => <ResultadosRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       partidoIndex={i}
                                       partidoAddr={addr}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default ResultadosBody;