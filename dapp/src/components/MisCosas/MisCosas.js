
import MisDatos from "./MisDatos";
import MisFunciones from "./MisFunciones";
//import MisNotas from "./MisNotas";
    

const MisCosas = (props) => {
    const {drizzle, drizzleState} = props;
    return <section className="AppMisCosas">
        <div class="px-5">
            <div>    
                <MisDatos drizzle={drizzle}
                        drizzleState={drizzleState}/>
            </div>
            <div class="pt-4">
                <MisFunciones drizzle = {drizzle}
                            drizzleState={drizzleState}/>
            </div>
        </div>
    </section>;
}

export default MisCosas;