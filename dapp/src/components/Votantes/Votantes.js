import{newContextComponents} from "@drizzle/react-components";
import VotantesHead from "./VotantesHead";
import VotantesBody from "./VotantesBody";

const{ContractData}=newContextComponents;

const Votantes = (props) => (
    <section className="AppVotantes">
        <h2>
            Votantes
        </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"votantesLength"}
            render={vl=>(
                <table>
                    <VotantesHead/>
                    <VotantesBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 votantesLength={vl}/>
                </table>
            )
            }
            />
    </section>
);

export default Votantes;