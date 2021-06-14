import{newContextComponents} from "@drizzle/react-components";
import MesasHead from "./MesasHead";
import MesasBody from "./MesasBody";

const{ContractData,ContractForm}=newContextComponents;

const Mesas = (props) => {
    const {cole,nummesa,setMesa,drizzle,drizzleState,nom} = props;
    if(cole === 99){
        console.log("if",cole)
    return(
    <section className="AppMesas">
        <h2  class="ps-5">
            Mesas
        </h2>
        <div class="row pt-4">
            <div class="col-md-3 pt-2 d-flex justify-content-center">
                <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                        contract="Elecciones" method="creaMesa"
                                        render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                            const labels = ["Número de colegio:"];
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
                                                <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Crear mesa</button>
                                            </form>
                                            )
                                        }}/>
            </div>
            <div class="col-md-9">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"mesasLength"}
                    cole={cole}
                    render={ml=>(
                        <table class="table table-responsive table-hover">
                            <MesasHead/>
                            <MesasBody drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        mesasLength={ml}
                                        nummesa={nummesa}
                                        setMesa={setMesa}
                                        cole={cole}/>
                        </table>
                    )
                    }
                    />
                </div>
            </div>
    </section>
    )
        }else{
            console.log("else",cole)
            return(
                <section className="AppMesas">
              <h2 class="ps-5">
                  Mesas del colegio: {nom}
              </h2>
              <div class="row pt-4">
              <div class="col-md-3 pt-2 d-flex justify-content-center">
                <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                contract="Elecciones" method="creaMesa"
                                render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                                    const labels = ["Número de colegio:"];
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
                                        <button key="submit" type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Crear mesa</button>
                                    </form>
                                    )
                                }}/>
              </div>
              <div class="col-md-9 pt-4 pt-md-0">
                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={"Elecciones"}
                    method={"mesaColegioLength"}
                    cole={cole}
                    methodArgs={[cole]}
                    render={ml=>(
                        <table class="table table-responsive table-hover">
                            <MesasHead/>
                            <MesasBody drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        mesaColegioLength={ml}
                                        nummesa={nummesa}
                                        setMesa={setMesa}
                                        cole={cole}/>
                        </table>
                    )
                    }
                    />
              </div>
        </div>      
      </section>
              )
        }
}

export default Mesas;