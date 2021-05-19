import {newContextComponents} from "@drizzle/react-components";
import Mesa from "../Mesa/Mesa";
const {ContractData} = newContextComponents;

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
                        <>
                        <li>Dirección: <span style={{color: "blue"}}>{(datos && datos._direccion) || "Usuario no registrado"}</span></li>
                        <li>Colegio electoral asignado: <span style={{color: "blue"}}>{(datos && datos._idColegio) || "Usuario no registrado"}</span></li>
                        <li>Mesa electoral asignada: <span style={{color: "blue"}}>{(datos && datos._numeroMesa) || "Usuario no registrado"}</span></li>
                        </>
                        )
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