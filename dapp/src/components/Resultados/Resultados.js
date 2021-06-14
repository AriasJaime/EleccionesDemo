import{newContextComponents} from "@drizzle/react-components";
import ResultadosHead from "./ResultadosHead";
import ResultadosBody from "./ResultadosBody";

const{ContractData}=newContextComponents;

const Resultados = (props) => (
    <section className="AppResultados">
        <div class="px-5">
        <h2>
            Resultados generales:
        </h2>
        <div class="pt-4">
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"partidosLength"}
            render={ml=>(
                <table class="table table-hover">
                    <ResultadosHead/>
                    <ResultadosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 partidosLength={ml}/>
                </table>
            )
            }
            />
            </div>
            </div>
    </section>
);


export default Resultados;