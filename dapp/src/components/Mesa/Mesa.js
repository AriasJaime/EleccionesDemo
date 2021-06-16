import{newContextComponents} from "@drizzle/react-components";
import MesaHead from "./MesaHead";
import MesaBody from "./MesaBody";

const{ContractData,ContractForm}=newContextComponents;

const Mesa = (props) => {
    const {drizzle, drizzleState, mesaPresi,nummesa,setMesa,rol} = props;
    if(rol === "Administrador"){
        return(
            <section className="AppMesa">
                <div class="py-3 ps-5">
                    <button class="btn btn-outline-dark" onClick={() => setMesa(999)}>Volver al inicio</button>
                </div>
                <h2 class="ps-5">
                    Mesa número: {mesaPresi}
                </h2>
                <div class="row pt-4 px-3">
                    <div class="col-md-3 pt-2 d-flex justify-content-center">
                        <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                        contract="Elecciones" method="asignaPresidenteMesa"
                                        render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                            const labels = ["Nombre del presidente","Address del presidente","Nº Mesa"];
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
                                                <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Asignar presidente</button>
                                            </form>
                                            )
                                        }}/>
                    </div>
                    <div class="col-md-9 pt-4 pt-md-0"> 
                        <ContractData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            contract={"Elecciones"}
                            method={"votanteMesaLength"}
                            methodArgs={[mesaPresi]}
                            render={vl=>(
                                <div class="table-responsive">
                                <table class="table table-hover">
                                    <MesaHead/>
                                    <MesaBody drizzle={drizzle}
                                                drizzleState={drizzleState}
                                                votantesLength={vl}
                                                mesa={nummesa} 
                                                setMesa={setMesa}
                                                mesaPresi={mesaPresi}/>
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
    return(
        <section className="AppMesa">
            <h2>
                Mesa número: {mesaPresi}
            </h2>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Elecciones"}
            method={"votanteMesaLength"}
            methodArgs={[mesaPresi]}
            render={vl=>(
                <div class="table-responsive">
                <table class="table table-hover">
                    <MesaHead/>
                    <MesaBody drizzle={drizzle}
                                 drizzleState={drizzleState}
                                 votantesLength={vl}
                                 mesa={nummesa} 
                                 setMesa={setMesa}
                                 mesaPresi={mesaPresi}/>
                </table>
                </div>
            )
            }
            />
    </section>
    )
}
export default Mesa;