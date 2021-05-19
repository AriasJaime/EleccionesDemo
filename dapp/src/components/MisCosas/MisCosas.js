import {newContextComponents} from "@drizzle/react-components";
import MisDatos from "./MisDatos";
//import MisNotas from "./MisNotas";
    const {ContractData} = newContextComponents;

const MisCosas = (props) => {
    const {drizzle, drizzleState} = props;
    return <section className="AppMisCosas">
        <h2>Mis Cosas</h2>

        <MisDatos drizzle={drizzle}
                  drizzleState={drizzleState}/>

        <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"quienSoy"}
                    methodArgs={[]}
                    render={datos => {
                    if(datos._rol === "Presidente"){
                    return(
                        <>
                        <li>Nombre: <span style={{color: "blue"}}>{(datos && datos._nombre) || "Usuario no registrado"}</span></li>
                        <li>Dirección: <span style={{color: "blue"}}>{(datos && datos._direccion) || "Usuario no registrado"}</span></li>
                        <li>Colegio electoral asignado: <span style={{color: "blue"}}>{(datos && datos._idColegio) || "Usuario no registrado"}</span></li>
                        <li>Mesa electoral asignada: <span style={{color: "blue"}}>{(datos && datos._numeroMesa) || "Usuario no registrado"}</span></li>
                        </>
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
                        <li>Colegio electoral asignado: <span style={{color: "blue"}}>{(datos && datos._idColegio) || "Usuario no registrado"}</span></li>
                        <li>Mesa electoral asignada: <span style={{color: "blue"}}>{(datos && datos._numeroMesa) || "Usuario no registrado"}</span></li>
                        </>
                        )
                    }else{
                        return(
                        <>
                        <li>Mesa electoral asignada: <span style={{color: "blue"}}>{(datos && datos._numeroMesa) || "Usuario no registrado"}</span></li>
                        </>
                        )
                    }
                }
                }
                />
    </section>;
}

export default MisCosas;