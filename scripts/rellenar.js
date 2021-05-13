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
        await elecciones.creaPartido("PP",{from: admin});
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
        await elecciones.asignaPresidenteMesa(presidente1,"0")
        await elecciones.asignaPresidenteMesa(presidente2,"1")
        await elecciones.asignaPresidenteMesa(presidente3,"2")
        await elecciones.asignaPresidenteMesa(presidente4,"3")
        await elecciones.asignaPresidenteMesa(presidente5,"4")
        await elecciones.asignaPresidenteMesa(presidente6,"5")
        await elecciones.asignaPresidenteMesa(presidente7,"6")
        await elecciones.asignaPresidenteMesa(presidente8,"7")
        await elecciones.asignaPresidenteMesa(presidente9,"8")
        await elecciones.asignaPresidenteMesa(presidente10,"9")


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
        await elecciones.creaVotante(jimenaAccount,"10","Jimena","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(luciaAccount,"5","lucia","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(miriamAccount,"10","Miriam","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(lauraAccount,"0","Laura","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(chascaAccount,"9","Chasca ","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(lucasAccount,"8","Lucas ","Alonso Cano 1", "123456789D");
        await elecciones.creaVotante(pacoAccount,"1","Paco ","Alonso Cano 1", "123456789D");
        let votantes = await elecciones.votantesLength();
        console.log(votantes);
        


    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};