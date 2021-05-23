import {newContextComponents} from "@drizzle/react-components";
import ColegiosRow from "./ColegiosRow";

const {ContractData} = newContextComponents;

const ColegiosBody = (props) => {
    const {drizzle, drizzleState, colegiosLength,setCount,cole} = props;
    let rows = [];
    for (let i = 0; i < colegiosLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"colegios"}
            methodArgs={[i]}
            render={id => <ColegiosRow drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        colegioIndex={i}
                                        colegioId={id}
                                        cole={cole}
                                        setCount={setCount}/>                      
            }
        />);
    }
    return  <tbody>{rows}</tbody>
};

export default ColegiosBody;