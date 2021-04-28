import {newContextComponents} from "@drizzle/react-components";

import CandidatosRow from "./CandidatosRow";

const {ContractData} = newContextComponents;

const CandidatosBody = (props) => {
    const {drizzle, drizzleState, partidosLength} = props;
    let rows = [];
    for (let i = 0; i < partidosLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"partidos"}
            methodArgs={[i]}
            render={addr => <CandidatosRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       partidoIndex={i}
                                       partidoAddr={addr}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default CandidatosBody;