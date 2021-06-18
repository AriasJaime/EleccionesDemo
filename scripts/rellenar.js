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
        
        await elecciones.creaPartido("PP");
        await elecciones.creaPartido("PSOE");
        await elecciones.creaPartido("Podemos");
        await elecciones.creaPartido("Ciudadanos");
        let partidos = await elecciones.partidosLength();
        console.log(partidos)
        

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
        await elecciones.asignaPresidenteMesa("presi1",presidente1,"0")
        await elecciones.asignaPresidenteMesa("presi2",presidente2,"1")
        await elecciones.asignaPresidenteMesa("presi3",presidente3,"2")
        await elecciones.asignaPresidenteMesa("presi4",presidente4,"3")
        await elecciones.asignaPresidenteMesa("presi5",presidente5,"4")
        await elecciones.asignaPresidenteMesa("presi6",presidente6,"5")
        await elecciones.asignaPresidenteMesa("presi7",presidente7,"6")
        await elecciones.asignaPresidenteMesa("presi8",presidente8,"7")
        await elecciones.asignaPresidenteMesa("presi9",presidente9,"8")
        await elecciones.asignaPresidenteMesa("presi10",presidente10,"9")


        //crear votantes
        console.log("Crear votantes:");
        let jaimeAccount = accounts[5];
        let carlosAccount = accounts[6];
        let juanaAccount = accounts[7];
        let mariaAccount = accounts[8];
        let pedroAccount = accounts[20];
        let jimenaAccount = accounts[21];
        let luciaAccount = accounts[22];
        let miriamAccount = accounts[23];
        let lauraAccount = accounts[24];
        let chascaAccount = accounts[25];
        let lucasAccount = accounts[26];
        let pacoAccount = accounts[27];
        console.log("Cuenta de Jaime =", jaimeAccount);
        console.log("Cuenta de Carlos =", carlosAccount);
        console.log("Cuenta de Juana =", juanaAccount);
        console.log("Cuenta de Pedro =", pedroAccount);
        console.log("Cuenta de Jimena =", jimenaAccount);
        console.log("Cuenta de Lucia =", luciaAccount);
        console.log("Cuenta de Miriam =", miriamAccount);
        console.log("Cuenta de Laura =", lauraAccount);
        console.log("Cuenta de Chasca =", chascaAccount);
        console.log("Cuenta de Lucas =", lucasAccount);
        console.log("Cuenta de Paco =", pacoAccount);
        await elecciones.creaVotante(jaimeAccount,"0","Jaime","José Abascal 8", "123456789A");
        await elecciones.creaVotante(carlosAccount,"1","Carlos","Iglesia 2", "123456789B");
        await elecciones.creaVotante(juanaAccount,"0","Juana Jimenez","Rafael Calvo 12", "123456789C");
        await elecciones.creaVotante(mariaAccount,"3","María gutierrez","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(pedroAccount,"2","Pedro","Alonso Cano 1", "123456789F");
        await elecciones.creaVotante(jimenaAccount,"10","Jimena","Alonso Cano 1", "123456789G");
        await elecciones.creaVotante(luciaAccount,"5","lucia","Alonso Cano 1", "123456789H");
        await elecciones.creaVotante(miriamAccount,"10","Miriam","Alonso Cano 1", "123456789I");
        await elecciones.creaVotante(lauraAccount,"0","Laura","Alonso Cano 1", "123456789J");
        await elecciones.creaVotante(chascaAccount,"9","Chasca ","Alonso Cano 1", "123456789K");
        await elecciones.creaVotante(lucasAccount,"8","Lucas ","Alonso Cano 1", "123456789L");
        await elecciones.creaVotante(pacoAccount,"1","Paco ","Alonso Cano 1", "123456789M");
        let votantes = await elecciones.votantesLength();
        console.log(votantes);
        


    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};