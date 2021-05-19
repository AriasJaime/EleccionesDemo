import {newContextComponents} from "@drizzle/react-components";

import MesasRow from "./MesaRow";

const {ContractData} = newContextComponents;

const MesasBody = (props) => {
    const {drizzle, drizzleState, mesasLength} = props;
    let rows = [];
    for (let i = 0; i < mesasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"mesas"}
            methodArgs={[i]}
            render={id => <MesasRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       mesaIndex={i}
                                       mesaId={id}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default MesasBody;