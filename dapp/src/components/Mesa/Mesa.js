import{newContextComponents} from "@drizzle/react-components";
import MesaHead from "./MesaHead";
import MesaBody from "./MesaBody";

const{ContractData}=newContextComponents;

const Mesa = (props) => {
    const {drizzle, drizzleState, mesaPresi} = props;
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
                                 mesaPresi={mesaPresi}/>
                </table>
            )
            }
            />
    </section>
    )
}
export default Mesa;