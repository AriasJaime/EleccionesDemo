import{newContextComponents} from "@drizzle/react-components";
import MesasHead from "./MesasHead";
import MesasBody from "./MesasBody";

const{ContractData}=newContextComponents;

const Mesas = (props) => {
    const {cole} = props;
    if(cole === 99){
        console.log("if",cole)
    return(
    <section className="AppMesas">
        <h2>
            Mesas
        </h2>
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"mesasLength"}
            cole={cole}
            render={ml=>(
                <table>
                    <MesasHead/>
                    <MesasBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 mesasLength={ml}
                                 cole={cole}/>
                </table>
            )
            }
            />
    </section>
    )
        }else{
            console.log("else",cole)
            return(
                <section className="AppMesas">
              <h2>
                  Mesas del colegio nº: {cole}
              </h2>
          <ContractData
              drizzle={props.drizzle}
              drizzleState={props.drizzleState}
              contract={"Elecciones"}
              method={"mesaColegioLength"}
              cole={cole}
              methodArgs={[cole]}
              render={ml=>(
                  <table>
                      <MesasHead/>
                      <MesasBody drizzle={props.drizzle}
                                   drizzleState={props.drizzleState}
                                   mesaColegioLength={ml}
                                   cole={cole}/>
                  </table>
              )
              }
              />
      </section>
              )
        }
}

export default Mesas;