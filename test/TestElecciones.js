let Elecciones = artifacts.require("Elecciones");

contract('Elecciones:', accounts =>{

    let elecciones;

    before(async () => {
        elecciones = await Elecciones.deployed();
        // console.log("Elecciones =", Elecciones.address);
    });
    describe("Despliegue", async()=> {

        it("El contrato se ha desplegado", async()=>{
            const address = elecciones.address;
            assert.notEqual(address,0x0)
            assert.notEqual(address,'')
            assert.notEqual(address,null)
            assert.notEqual(address,undefined)
        })

        it("El administrador es el que despliego el contrato",  async () => {
            let administrador = await elecciones.admin();
            let desplegador = accounts[0];
            assert.equal(administrador, desplegador,"El administrador debe ser quien despliega en contrato.");
        })
    
    })
    
    
    
    describe("Crear estructura elecciones", async() =>{
        
        it("Crear Colegios electorales", async()=>{
            await elecciones.creaColegio(0,"Chamberí","Rafael Calvo 12");
            await elecciones.creaColegio(1,"Esclavas","Santa Engracia 5");

            let numColegios =  await elecciones.colegiosLength();
            let colegio0 = await elecciones.colegios(0);
            let colegio1 = await elecciones.colegios(1);

            assert.equal(numColegios,2,"Las elecciones deben tener dos colegios");

            assert.equal(colegio0.id,0,"El id del primer colegio debe ser 0");
            assert.equal(colegio0.nombre,"Chamberí","El nombre del primer colegio debe ser: Chamberí");
            assert.equal(colegio0.direccion,"Rafael Calvo 12","El nombre del primer colegio debe ser: Chamberí");
            assert.equal(colegio0.numeroVotos,0,"El número de votos iniciales debe ser 0");
            assert.equal(colegio0.numeroMesas,0,"El número de mesas iniciales debe ser 0");
            assert.equal(colegio0.numeroVotantes,0,"El número de votantes iniciales debe ser 0");

            assert.equal(colegio1.id,1,"El id del primer colegio debe ser 0");
            assert.equal(colegio1.nombre,"Esclavas","El nombre del primer colegio debe ser: Chamberí");
            assert.equal(colegio1.direccion,"Santa Engracia 5","El nombre del primer colegio debe ser: Chamberí");
            assert.equal(colegio1.numeroVotos,0,"El número de votos iniciales debe ser 0");
            assert.equal(colegio1.numeroMesas,0,"El número de mesas iniciales debe ser 0");
            assert.equal(colegio1.numeroVotantes,0,"El número de votantes iniciales debe ser 0");
        })

        it("Crear Mesas electorales", async()=>{
            await elecciones.creaMesa(0);
            await elecciones.creaMesa(1);

            let numeroMesas = await elecciones.mesasLength();
            let mesa0 = await elecciones.mesas(0);
            let mesa1 = await elecciones.mesas(1);

            assert.equal(numeroMesas,2,"Debe haber 2 mesas");

            assert.equal(mesa0.idColegio,0,"El id del colegio de la mesa 0 debe ser 0");
            assert.equal(mesa0.numeroMesa,0,"El id de la mesa debe ser 0");
            
            assert.equal(mesa1.idColegio,1,"El id del colegio de la mesa 1 debe ser 1");
            assert.equal(mesa1.numeroMesa,1,"El id de la mesa debe ser 1");
        })

        it("Asignar presidente a mesas electorales", async()=>{

            let presidente1 = accounts[9];
            let presidente2 = accounts[10];
            await elecciones.asignaPresidenteMesa("presidente1",presidente1,"0")
            await elecciones.asignaPresidenteMesa("presidente2",presidente2,"1")

            let mesa0 = await elecciones.mesas(0);
            let mesa1 = await elecciones.mesas(1);

            assert.equal(mesa0.presidente,presidente1,"Debe haber 1 presidente en la mesa 0");
            assert.equal(mesa1.presidente,presidente2,"Debe haber 1 presidente en la mesa 1");
        })

        it("Crear votantes", async()=>{
        let jaimeAccount = accounts[5];
        let carlosAccount = accounts[6];
        await elecciones.creaVotante(jaimeAccount,"0","Jaime","José Abascal 8", "123456789A");
        await elecciones.creaVotante(carlosAccount,"1","Carlos","Iglesia 2", "123456789B");
        
        let votante1= await elecciones.datosVotante(jaimeAccount);
        let votante2= await elecciones.datosVotante(carlosAccount);
        let numeroVotantes = await elecciones.votantesLength();
        let mesa0 = await elecciones.mesas(0);
        let mesa1 = await elecciones.mesas(1);
        let colegio0 = await elecciones.colegios(0);
        let colegio1 = await elecciones.colegios(1);

        assert.equal(numeroVotantes,2,"Debe haber 2 votantes");
        
            assert.equal(votante1.direccion,jaimeAccount,"la dirección del votante debe ser correcta");
            assert.equal(votante1.idColegio,0,"Su colegio debe ser el 0");
            assert.equal(votante1.numeroMesa,0,"Su mesa debe ser la 0");
            assert.equal(votante1.nombre,"Jaime","Su nombre debe ser Jaime ");
            assert.equal(votante1.calle,"José Abascal 8","Su domicilio debe ser José Abascal 8");
            assert.equal(votante1.dni,"123456789A","Su DNI debe ser 123456789A");
            assert.equal(votante1.votado,false,"no debe haber votado");

            assert.equal(votante2.direccion,carlosAccount,"la dirección del votante debe ser correcta");
            assert.equal(votante2.idColegio,1,"Su colegio debe ser el 0");
            assert.equal(votante2.numeroMesa,1,"Su mesa debe ser la 0");
            assert.equal(votante2.nombre,"Carlos","Su nombre debe ser Carlos ");
            assert.equal(votante2.calle,"Iglesia 2","Su domicilio debe ser José Abascal 8");
            assert.equal(votante2.dni,"123456789B","Su DNI debe ser 123456789A");
            assert.equal(votante2.votado,false,"no debe haber votado");

            assert.equal(mesa0.numeroVotantes,1,"Debe haber 1 votante en la mesa 0");
            assert.equal(mesa1.numeroVotantes,1,"Debe haber 1 votante en la mesa 1");

            assert.equal(colegio0.numeroVotantes,1,"Debe haber 1 votante en el colegio 0");
            assert.equal(colegio1.numeroVotantes,1,"Debe haber 1 votante en el colegio 1");
        })

        it("Crear Partidos políticos",async()=>{
            await elecciones.creaPartido("PP");
            await elecciones.creaPartido("PSOE");

            let numeroPartidos = await elecciones.partidosLength();
            let partido1 = await elecciones.datosPartidos("PP");
            let partido2=  await elecciones.datosPartidos("PSOE")

            assert.equal(numeroPartidos,2,"Debe haber 2 partidos");

            assert.equal(partido1.nombre,"PP","El primer partido se debe llamar PP");
            assert.equal(partido1.votos,0,"El primer partido debe tener 0 votos iniciales");
            assert.equal(partido2.nombre,"PSOE","El segundo partido se debe llamar PSOE");
            assert.equal(partido2.votos,0,"El segundo partido debe tener 0 votos iniciales");
        })
    })

    describe("Empezar elecciones, votar y finalizar elecciones",async()=>{
        it("Empezar elecciones", async()=>{
            await elecciones.empezarElecciones();
            let estado = await elecciones.empezado();
            assert.equal(estado,true,"El estado de las elecciones debe ser true");
        })

        it("Votar a un partido",async()=>{
            let jaimeAccount = accounts[5];
            await elecciones.votaPartido("PP", {from: jaimeAccount});
            let votante1= await elecciones.datosVotante(jaimeAccount);
            assert.equal(votante1.votado,true,"El registro de votado debe ser true");
        })

        it("Comprobar resultados",async()=>{

            let partido1 = await elecciones.datosPartidos("PP");
            let partido2 = await elecciones.datosPartidos("PSOE");
            assert.equal(partido1.votos,1,"El primer partido debe tener 1 voto");
            assert.equal(partido2.votos,0,"El segundo partido debe tener 0 votos");
        })

        it("Finalizar elecciones",async()=>{
            await elecciones.finalizarElecciones();
            let estado = await elecciones.empezado();
            assert.equal(estado,false,"El estado de las elecciones debe ser false");
        })

    })
    
}

);