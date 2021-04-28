import{newContextComponents} from "@drizzle/react-components";
import ResultadosHead from "./ResultadosHead";
import ResultadosBody from "./ResultadosBody";

const{ContractData}=newContextComponents;

const Resultados = (props) => (
    <section className="AppResultados">
        <h2>
            Resultados
        </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"partidosLength"}
            render={ml=>(
                <table>
                    <ResultadosHead/>
                    <ResultadosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 partidosLength={ml}/>
                </table>
            )
            }
            />
    </section>
);

export default Resultados;