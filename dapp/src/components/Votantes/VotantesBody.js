import {newContextComponents} from "@drizzle/react-components";

import VotantesRow from "./VotantesRow";

const {ContractData} = newContextComponents;

const VotantesBody = (props) => {
    const {drizzle, drizzleState,votantesColegioLength,votantesLength,cole} = props;
    if(cole === 99){
    let rows = [];
    for (let i = 0; i < votantesLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"votantes"}
            methodArgs={[i]}
            render={addr => <VotantesRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       votanteIndex={i}
                                       votanteAddr={addr}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
}else{
    let rows = [];
    for (let i = 0; i < votantesColegioLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"votanteColegio"}
            methodArgs={[cole,i]}
            render={addr => <VotantesRow drizzle={drizzle}
            drizzleState={drizzleState}
            votanteIndex={i}
            votanteAddr={addr}/>
            }
            />
        )
    }
    return (<tbody>{rows}</tbody>);
};
}
export default VotantesBody;