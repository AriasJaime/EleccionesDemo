import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const ColegiosRow = (props) => {
    const {drizzle, drizzleState,colegioId,setCount} = props;
    
    return(

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"colegioElectoral"}
            methodArgs={[colegioId.id]}
            render={datos => <><div>
                <button onClick={() => setCount(datos.id)}>Colegio {datos.id}</button> 
                </div>
            </>}
        />

    )  
    
};

export default ColegiosRow;