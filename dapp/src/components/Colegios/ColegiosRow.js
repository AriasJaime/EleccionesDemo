import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;


const ColegiosRow = (props) => {
    const {drizzle, drizzleState,colegioId,setCount,setNom} = props;
    const onClick = (datos) =>{
        setCount(datos.id);
        setNom(datos.nombre);
    }
    return(

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"colegioElectoral"}
            methodArgs={[colegioId.id]}
            render={datos => <>
                <div>
                    <button class="btn btn-outline-dark btn-lg"  onClick={() => onClick(datos)}>{datos.nombre}</button> 
                </div>
            </>}
        />

    )  
    
};

export default ColegiosRow;