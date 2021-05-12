import{newContextComponents} from "@drizzle/react-components";
import MesasHead from "./MesasHead";
import MesasBody from "./MesasBody";

const{ContractData}=newContextComponents;

const Mesas = (props) => (
    <section className="AppMesas">
        <h2>
            Mesas
        </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"mesasLength"}
            render={ml=>(
                <table>
                    <MesasHead/>
                    <MesasBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 mesasLength={ml}/>
                </table>
            )
            }
            />
    </section>
);

export default Mesas;