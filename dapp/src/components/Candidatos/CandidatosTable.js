import{newContextComponents} from "@drizzle/react-components";
import CandidatosHead from "./CandidatosHead";
import CandidatosBody from "./CandidatosBody";

const{ContractData}=newContextComponents;

const Candidatos = (props) => (
        
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"Elecciones"}
                method={"partidosLength"}
                render={ml=>(
                    <div class="table-responsive">
                    <table class="table table-hover">
                        <CandidatosHead/>
                        <CandidatosBody drizzle={props.drizzle}
                                    drizzleState={props.drizzleState}
                                    partidosLength={ml}/>
                    </table>
                    </div>
                )
                }
                />
        
    
);

export default Candidatos;