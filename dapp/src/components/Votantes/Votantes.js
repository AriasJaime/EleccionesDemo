import{newContextComponents} from "@drizzle/react-components";
import VotantesHead from "./VotantesHead";
import VotantesBody from "./VotantesBody";

const{ContractData}=newContextComponents;

const Votantes = (props) => {
    const {cole} = props;
    if(cole === 99){
        console.log("if",cole)
    return(
    <section className="AppVotantes">
        <h2>
            Votantes
        </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"votantesLength"}
            cole={cole}
            render={vl=>(
                <table>
                    <VotantesHead/>
                    <VotantesBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 votantesLength={vl}
                                 cole={cole}/>
                </table>
            )
            }
            />
    </section>
    )
        }
        else{
            console.log("else",cole)
            return(
              <section className="AppVotantes">
            <h2>
                Votantes del colegio nº: {cole}
            </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"votanteColegioLength"}
            methodArgs={[cole]}
            render={cl=>(
                <table>
                    <VotantesHead/>
                    <VotantesBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 votantesColegioLength={cl}
                                 cole={cole}/>
                </table>
            )
            }
            />
    </section>
            )
            
        }
}

export default Votantes;