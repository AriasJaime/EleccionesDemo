import {newContextComponents} from "@drizzle/react-components";
import MesasRow from "./MesasRow";

const {ContractData} = newContextComponents;

const MesasBody = (props) => {
    const {drizzle, drizzleState,mesasLength,mesaColegioLength,cole} = props;
    if(cole === 99){
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
                                       mesaId={id}
                                       cole={cole}/>
            }
        />);
    }
    return (<tbody>{rows}</tbody>);
    }else{
        console.log("iodfofsd",cole)
        let rows = [];
    for (let i = 0; i < mesaColegioLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"mesaColegio"}
            methodArgs={[cole,i]}
            render={id => <MesasRow drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        mesaIndex={i}
                                        cole={cole}
                                        mesaId={id}/>
            }
            />
        )
    }
    return (<tbody>{rows}</tbody>);
};
    }
    

export default MesasBody;