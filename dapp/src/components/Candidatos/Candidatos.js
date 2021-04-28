import{newContextComponents} from "@drizzle/react-components";
import CandidatosHead from "./CandidatosHead";
import CandidatosBody from "./CandidatosBody";

const{ContractData}=newContextComponents;

const Candidatos = (props) => (
    <section className="AppCandidatos">
        <h2>
            Candidatos
        </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"partidosLength"}
            render={ml=>(
                <table>
                    <CandidatosHead/>
                    <CandidatosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 partidosLength={ml}/>
                </table>
            )
            }
            />
    </section>
);

export default Candidatos;