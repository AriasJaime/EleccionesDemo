import {newContextComponents} from "@drizzle/react-components";
import ColegiosRow from "./ColegiosRow";

const {ContractData} = newContextComponents;

const ColegiosBody = (props) => {
    const {drizzle, drizzleState, colegiosLength,setCount,cole,nom,setNom} = props;
    let rows = [];
    for (let i = 0; i < colegiosLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"colegios"}
            methodArgs={[i]}
            render={id => 
                    <div class="col d-flex justify-content-center pb-4">
                    <ColegiosRow drizzle={drizzle}
                                                drizzleState={drizzleState}
                                                colegioIndex={i}
                                                colegioId={id}
                                                nom={nom}
                                                cole={cole}
                                                setNom={setNom}
                                                setCount={setCount}/>    
                    </div>
            }
        />);
    }
    return  (
    <div>    
    
        <div class="row row-cols-md-3 row-cols-2 pt-4">
            {rows}
        </div>
    
    </div>
    )
};

export default ColegiosBody;