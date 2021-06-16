import{newContextComponents} from "@drizzle/react-components";

import ColegiosBody from "./ColegiosBody";
const{ContractData,ContractForm}=newContextComponents;

const Colegios = (props) => {
    const {setCount,cole,nom,drizzle,drizzleState,setNom} = props;
    return (
    
    <section className="AppColegios">
        <div class="py-3 ps-5">
            <button type="button" class="btn btn-outline-primary" onClick={() => setCount(99)}>Volver al inicio</button>
        </div>
        <div class="row pt-4 px-3">
            <div class="col-md-3 pt-2 d-flex justify-content-center">
                    
                    <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                            contract="Elecciones" method="creaColegio"
                                            render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                                const labels = ["Número del colegio:","Nombre","Domicilio"];
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
                                                    <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Crear colegio</button>
                                                </form>
                                                )
                                            }}/>
                
            </div>
            <div class="col-md-9 pt-4 pt-md-0">   
                <h2 class="d-flex justify-content-center">
                    
                    Colegios electorales:
                </h2>
                <hr></hr>
                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"colegiosLength"}
                    render={cl=>(
                            
                                <ColegiosBody drizzle={drizzle}
                                            drizzleState={drizzleState}
                                            colegiosLength={cl}
                                            nom={nom}
                                            cole={cole}
                                            setNom={setNom}
                                            setCount={setCount}/>
                            
                        
                    )
                    }
                    />
            </div>
        </div>
    </section>
);
        }

export default Colegios;