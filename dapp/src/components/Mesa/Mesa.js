import{newContextComponents} from "@drizzle/react-components";
import MesaHead from "./MesaHead";
import MesaBody from "./MesaBody";

const{ContractData}=newContextComponents;

const Mesa = (props) => {
    const {drizzle, drizzleState, mesaPresi,nummesa,setMesa,rol} = props;
    if(rol === "Administrador"){
        return(
            <section className="AppMesa">
                <button onClick={() => setMesa(999)}>Volver al inicio</button>
                <h2>
                    Mesa número: {mesaPresi}
                </h2>
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Elecciones"}
                method={"votanteMesaLength"}
                methodArgs={[mesaPresi]}
                render={vl=>(
                    <table>
                        <MesaHead/>
                        <MesaBody drizzle={props.drizzle}
                                     drizzleState={props.drizzleState}
                                     votantesLength={vl}
                                     mesa={nummesa} 
                                     setMesa={setMesa}
                                     mesaPresi={mesaPresi}/>
                    </table>
                )
                }
                />
        </section>
        )
    }
    return(
        <section className="AppMesa">
            <h2>
                Mesa número: {mesaPresi}
            </h2>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"votanteMesaLength"}
            methodArgs={[mesaPresi]}
            render={vl=>(
                <table>
                    <MesaHead/>
                    <MesaBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 votantesLength={vl}
                                 mesa={nummesa} 
                                 setMesa={setMesa}
                                 mesaPresi={mesaPresi}/>
                </table>
            )
            }
            />
    </section>
    )
}
export default Mesa;