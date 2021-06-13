import{newContextComponents} from "@drizzle/react-components";

import ColegiosBody from "./ColegiosBody";
const{ContractData}=newContextComponents;

const Colegios = (props) => {
    const {setCount,cole} = props;
    return (
    
    <section className="AppColegios">
        <button onClick={() => setCount(99)}>Volver al inicio</button>
        <h2>
            Colegios
        </h2>
        
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"colegiosLength"}
            
            render={cl=>(
                
                    
                    <ColegiosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 colegiosLength={cl}
                                 cole={cole}
                                 setCount={setCount}/>
                
            )
            }
            />
    </section>
);
        }

export default Colegios;