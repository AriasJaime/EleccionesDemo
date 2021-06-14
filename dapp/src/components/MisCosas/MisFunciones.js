import {newContextComponents} from "@drizzle/react-components";
import Mesa from "../Mesa/Mesa";
const {ContractData,ContractForm} = newContextComponents;

const MisFunciones = ({drizzle, drizzleState}) => {

    return (
        <article className="AppMisFunciones">
            
            <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"quienSoy"}
                    methodArgs={[]}
                    render={datos => {
                    if(datos._rol === "Presidente"){
                    return(
                        <Mesa drizzle={drizzle}
                        drizzleState={drizzleState}
                        mesaPresi={datos._numeroMesa}/>
                        )
                    }else if(datos._rol === "Votante"){
                        return(
                        <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Elecciones"}
                        method={"empezado"}
                        methodArgs={[]}
                        render={x => {
                        if(x === true){
                            return(
                                <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                contract="Elecciones" method="votaPartido"
                                render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                    const labels = ["Address del votante:","Partido a votar:"];
                                    return (
                                      
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group"> 
                                        {inputs.map((input, index) => (
                                            <p> <label class="pb-2">{labels[index]}</label>
                                                <input key={input.name} class="form-control" type={inputTypes[index]} name={input.name}
                                                        value={state[input.name]} placeholder={input.name}
                                                        onChange={handleInputChange}
                                                /> </p> ))}
                                        </div>
                                        <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Enviar voto</button>
                                    </form>
                                    )
                                }}/>
                                )
                            }else{
                                return(
                                    
                                 <h3>Las elecciones aún no han comenzado</h3>

                                )     
                            }
                        }
                    }
                        />)
                           
                    }else if(datos._rol === "Administrador"){
                        return(
                        <>
                        
                        </>
                        )
                    }else{
                        return(
                        <>
                        
                        </>
                        )
                    }
                }
                }
                />
                
        </article>);
};

export default MisFunciones;