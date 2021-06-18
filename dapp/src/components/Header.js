import {newContextComponents} from "@drizzle/react-components";
const {ContractData} = newContextComponents;

const Header = props => (
    <header className="AppHeader">
        <h1>
            Bienvenido a las 
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"Elecciones"}
                method={"nombre"}
            />
              - 
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"Elecciones"}
                method={"year"}
                render={data=>(
                    <em>{data}</em>
                )}
            />
        </h1>
    </header>
);

export default Header;