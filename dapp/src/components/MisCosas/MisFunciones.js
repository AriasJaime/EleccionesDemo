import {newContextComponents} from "@drizzle/react-components";
import Mesa from "../Mesa/Mesa";
const {ContractData,ContractForm} = newContextComponents;

const MisFunciones = ({drizzle, drizzleState}) => {

    return (
        <article className="AppMisFunciones">
            
            <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"quienSoy"}
                    methodArgs={[]}
                    render={datos => {
                    if(datos._rol === "Presidente"){
                    return(
                        <Mesa drizzle={drizzle}
                        drizzleState={drizzleState}
                        mesaPresi={datos._numeroMesa}/>
                        )
                    }else if(datos._rol === "Votante"){
                        return(
                        <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Elecciones"}
                        method={"empezado"}
                        methodArgs={[]}
                        render={x => {
                        if(x === true){
                            return(
                                <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                contract="Elecciones" method="votaPartido"/>
                                )
                            }else{
                                return(
                                    
                                 <h3>Las elecciones aún no han comenzado</h3>

                                )     
                            }
                        }
                    }
                        />)
                           
                    }else if(datos._rol === "Administrador"){
                        return(
                        <>
                        <li>No hay nada para ti</li>
                        
                        </>
                        )
                    }else{
                        return(
                        <>
                        
                        </>
                        )
                    }
                }
                }
                />
                
        </article>);
};

export default MisFunciones;