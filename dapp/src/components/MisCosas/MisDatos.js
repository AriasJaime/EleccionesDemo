import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const MisDatos = ({drizzle, drizzleState}) => {

    return (
        <article className="AppMisDatos">
            <h3>Mis Datos:</h3>
            <ul class="list-group pt-3">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"quienSoy"}
                    methodArgs={[]}
                    render={datos => <>
                        <li class="list-group-item d-flex justify-content-center">Rol del usuario: <span style={{color: "blue"}}>{(datos && datos._rol) || "Usuario no registrado"}</span></li>
                        <li class="list-group-item d-flex justify-content-center">Nombre: <span style={{color: "blue"}}>{(datos && datos._nombre) || "Usuario no registrado"}</span></li>
                        {/* <li class="list-group-item d-flex justify-content-center">Dirección: <span style={{color: "blue"}}>{(datos && datos._direccion) || "Usuario no registrado"}</span></li> */}
                        <li class="list-group-item d-flex justify-content-center">Colegio electoral asignado: <span style={{color: "blue"}}>{(datos && datos._idColegio) || "Usuario no registrado"}</span></li>
                        <li class="list-group-item d-flex justify-content-center">Mesa electoral asignada: <span style={{color: "blue"}}>{(datos && datos._numeroMesa) || "Usuario no registrado"}</span></li>
                    </>}
                />
                
            </ul>
        </article>);
};

export default MisDatos;