module.exports = async callback => {

    try {
        const Elecciones = artifacts.require("./Elecciones.sol");

        // Usar las cuentas de usuario
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < 8) {
            throw new Error("No hay cuentas.");
        }

        let elecciones = await Elecciones.deployed();

        // Identificar al profesor:
        let admin = await elecciones.admin();
        console.log("Cuenta del administrador =", admin);

        //Crear partidos

        console.log("Añadir a dos candidatos:");
        let ppAccount = accounts[1];
        let psoeAccount = accounts[2];
        let podemosAccount = accounts[3];
        let csAccount = accounts[4];
        console.log("Cuenta del PP =", ppAccount);
        console.log("Cuenta del PSOE =", psoeAccount);
        console.log("Cuenta de Podemos =", podemosAccount);
        console.log("Cuenta de Ciudadanos =", csAccount);
        console.log("admin1=",admin)
        await elecciones.creaPartido("PP",{from: admin});
        console.log("admin2=",admin)
        await elecciones.creaPartido("PSOE");
        await elecciones.creaPartido("Podemos");
        await elecciones.creaPartido("Ciudadanos");
        let partidos = await elecciones.partidosLength();
        console.log(partidos)
        

        //crear votantes
        console.log("Crear votantes:");
        let jaimeAccount = accounts[5];
        let carlosAccount = accounts[6];
        let juanaAccount = accounts[7];
        let mariaAccount = accounts[8];
        console.log("Cuenta de Jaime =", jaimeAccount);
        console.log("Cuenta de Carlos =", carlosAccount);
        console.log("Cuenta de Juana =", juanaAccount);
        console.log("Cuenta de Maria =", mariaAccount);
        await elecciones.creaVotante(jaimeAccount,"Jaime","José Abascal 8", "123456789A");
        await elecciones.creaVotante(carlosAccount,"Carlos","Iglesia 2", "123456789B");
        await elecciones.creaVotante(juanaAccount,"Juana Jimenez","Rafael Calvo 12", "123456789C");
        await elecciones.creaVotante(mariaAccount,"María gutierrez","Alonso Cano 1", "123456789D");
        let votantes = await elecciones.votantesLength();
        console.log(votantes)

        //crea Colegio
        await elecciones.creaColegio(0,"Chamberi","Rafael Calvo 12");
        await elecciones.creaColegio(1,"Jesus Maria","Juan Bravo 28");
        await elecciones.creaColegio(2,"Rufino Blanco","Jose Abascal 32");
        
        //crea Mesa
        console.log("Crear mesas electorales");
        await elecciones.creaMesa("0");
        await elecciones.creaMesa("0");
        await elecciones.creaMesa("0");
        await elecciones.creaMesa("1");
        await elecciones.creaMesa("1");
        await elecciones.creaMesa("2");
        await elecciones.creaMesa("2");
        await elecciones.creaMesa("2");
        await elecciones.creaMesa("0");
        await elecciones.creaMesa("0");
        await elecciones.creaMesa("1");
        await elecciones.creaMesa("2");

        //asigna Presidente
        console.log("Asignar presidentes");
        let presidente1 = accounts[9];
        let presidente2 = accounts[10];
        let presidente3 = accounts[11];
        let presidente4 = accounts[12];
        let presidente5 = accounts[13];
        let presidente6 = accounts[14];
        let presidente7 = accounts[15];
        let presidente8 = accounts[16];
        let presidente9 = accounts[17];
        let presidente10 = accounts[18];
        console.log("Cuenta del presidente1 =", presidente1);
        console.log("Cuenta de presidente2 =", presidente2);
        console.log("Cuenta de presidente3 =", presidente3);
        console.log("Cuenta de presidente4 =", presidente4);
        console.log("Cuenta de presidente5 =", presidente5);
        console.log("Cuenta de presidente6 =", presidente6);
        console.log("Cuenta de presidente7 =", presidente7);
        console.log("Cuenta de presidente8 =", presidente8);
        console.log("Cuenta de presidente9 =", presidente9);
        console.log("Cuenta de presidente10 =", presidente10);
        await elecciones.presidenteMesa(presidente1,"0")
        await elecciones.presidenteMesa(presidente2,"1")
        await elecciones.presidenteMesa(presidente3,"2")
        await elecciones.presidenteMesa(presidente4,"3")
        await elecciones.presidenteMesa(presidente5,"4")
        await elecciones.presidenteMesa(presidente6,"5")
        await elecciones.presidenteMesa(presidente7,"6")
        await elecciones.presidenteMesa(presidente8,"7")
        await elecciones.presidenteMesa(presidente9,"8")
        await elecciones.presidenteMesa(presidente10,"9")


        
        


    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};