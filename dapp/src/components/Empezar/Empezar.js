import{newContextComponents} from "@drizzle/react-components";


const{ContractData}=newContextComponents;


const empezarElecciones = (props) => {

    const instance = props.drizzle.contracts.Elecciones;
    instance.methods.empezarElecciones.cacheSend({
    from: props.drizzleState.accounts[0]
    })
    props.setEstado(true)
}

  const finalizarElecciones = (props) => {

    const instance = props.drizzle.contracts.Elecciones;
    instance.methods.finalizarElecciones.cacheSend({
    from: props.drizzleState.accounts[0]
    });
    props.setEstado(false)
  }

const Empezar = (props) => {
    
    return(
        <div>
            <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Elecciones"}
            method={"empezado"}
            render={x => 
            <>
            <div>
               <h2> Estado de las elecciones: <b>{x? "En curso" : "No iniciadas/Finalizadas"}</b></h2>
            </div>
            </>
            }
            />
            <div>
                <button onClick={() => empezarElecciones(props)}>Empezar</button>
            </div>
            <div>
                <button onClick={() => finalizarElecciones(props)}>Finalizar</button>
            </div>
        </div>
        
       

    ) 
        }
   export default Empezar;