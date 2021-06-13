import {newContextComponents} from "@drizzle/react-components";
import MesasRow from "./MesasRow";

const {ContractData} = newContextComponents;

const MesasBody = (props) => {
    const {drizzle, drizzleState,mesasLength,mesaColegioLength,cole,setMesa,nummesa} = props;
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
                                       mesa={nummesa} 
                                       setMesa={setMesa}
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
                                        mesaId={id}
                                        nummesa = {nummesa}
                                        setMesa={setMesa}/>
            }
            />
        )
    }
    return (<tbody>{rows}</tbody>);
};
    }
    

export default MesasBody;