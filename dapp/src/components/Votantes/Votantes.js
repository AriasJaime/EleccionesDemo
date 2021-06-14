import{newContextComponents} from "@drizzle/react-components";
import VotantesHead from "./VotantesHead";
import VotantesBody from "./VotantesBody";

const{ContractData,ContractForm}=newContextComponents;

const Votantes = (props) => {
    const {cole,drizzle,drizzleState,nom} = props;
    if(cole === 99){
        console.log("if",cole)
    return(
    <section className="AppVotantes">
        <div>
            <h2 class="ps-5">
                Votantes
            </h2>
        </div>
        <div class="row pt-4">
            <div class="col-md-3 pt-2 d-flex justify-content-center">
                <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                        contract="Elecciones" method="creaVotante"
                                        render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                            const labels = ["Address del votante:", "Nº mesa electoral:",
                                                "Nombre:", "Domicilio:","DNI:"];
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
                                                <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Crear votante</button>
                                            </form>
                                            )
                                        }}/>
            </div>
            <div class="col-md-9">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"votantesLength"}
                    cole={cole}
                    render={vl=>(
                        <div class="table-responsive">
                        <table class="table table-hover">
                            <VotantesHead/>
                            <VotantesBody drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        votantesLength={vl}
                                        cole={cole}/>
                        </table>
                        </div>
                    )
                    }
                    />
            </div>
            </div>
    </section>
    )
        }
        else{
            console.log("else",cole)
            return(
            <section className="AppVotantes">
            <h2 class="ps-5">
                Votantes del colegio: {nom}
            </h2>
            <div class="row pt-4">
                <div class="col-md-3 pt-2 d-flex justify-content-center">
                    <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                            contract="Elecciones" method="creaVotante"
                                            render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                                const labels = ["Address del votante:", "Nº mesa electoral:",
                                                    "Nombre:", "Domicilio:","DNI:"];
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
                                                    <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Crear votante</button>
                                                </form>
                                                )
                                            }}/>
                </div>
                <div class="col-md-9 pt-4 pt-md-0">
                    <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract={"Elecciones"}
                        method={"votanteColegioLength"}
                        methodArgs={[cole]}
                        render={cl=>(
                            <div class="table-responsive">
                            <table class="table table-hover">
                                <VotantesHead/>
                                <VotantesBody drizzle={drizzle}
                                            drizzleState={drizzleState}
                                            votantesColegioLength={cl}
                                            cole={cole}/>
                            </table>
                            </div>
                        )
                        }
                        />
                </div>
        </div>
    </section>
            )
            
        }
}

export default Votantes;