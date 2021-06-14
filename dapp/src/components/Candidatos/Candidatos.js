import{newContextComponents} from "@drizzle/react-components";
import CandidatosHead from "./CandidatosHead";
import CandidatosBody from "./CandidatosBody";

const{ContractData,ContractForm}=newContextComponents;

const Candidatos = (props) => (
    <section className="AppCandidatos">
        <h2 class="ps-5">
            Candidatos
        </h2>

        <div class="row pt-4">
        <div class="pt-2 col-md-3 d-flex justify-content-center">
            <ContractForm drizzle={props.drizzle} drizzleState={props.drizzleState}
                                    contract="Elecciones" method="creaPartido"
                                    render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                        const labels = ["Nombre del partido:"];
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
                                            <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Crear candidato</button>
                                        </form>
                                        )
                                    }}/>
        </div>
        <div class="col-md-9 pt-4 pt-md-0">
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"Elecciones"}
                method={"partidosLength"}
                render={ml=>(
                    <table class="table table-hover">
                        <CandidatosHead/>
                        <CandidatosBody drizzle={props.drizzle}
                                    drizzleState={props.drizzleState}
                                    partidosLength={ml}/>
                    </table>
                )
                }
                />
            </div>
        </div>
    </section>
);

export default Candidatos;