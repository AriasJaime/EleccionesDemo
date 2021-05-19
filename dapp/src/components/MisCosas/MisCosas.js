
import MisDatos from "./MisDatos";
import MisFunciones from "./MisFunciones";
//import MisNotas from "./MisNotas";
    

const MisCosas = (props) => {
    const {drizzle, drizzleState} = props;
    return <section className="AppMisCosas">
        <h2>Mis Cosas</h2>

        <MisDatos drizzle={drizzle}
                  drizzleState={drizzleState}/>
        <MisFunciones drizzle = {drizzle}
                      drizzleState={drizzleState}/>
    </section>;
}

export default MisCosas;