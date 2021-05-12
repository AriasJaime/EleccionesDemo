// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.4;

contract Elecciones {
    
    address public admin;
    
    string public nombre;
    
    string public year;
    
    struct DatosVotante{
        address direccion;
        string nombre;
        string calle;
        string dni;
        bool votado;
    }
    
    struct Partido{
        string nombre;
        uint votos;
    }
    
    
    
  struct ColegioElectoral{
      uint id;
      string nombre;
      address adminColegio;
      string direccion;
      uint numeroMesas;
      uint numeroVotantes;
      uint numeroVotos;
  }
    
        
  struct Mesa{
      uint idColegio;
      uint numero;
      uint numeroGlobal;
      address presidente;
      uint numeroVotantes;
      uint numeroVotos;
      bool actaFirmada;
  }
    
    //Partido[] public partidos;
    
  
    
    address[] public votantes;
    string[] public partidos;
    address[] public presidentes;
    
    
    Mesa[] public mesasS;
    ColegioElectoral[] public colegiosS;
    Mesa[][] public mesaColegio;
    
    mapping( address => DatosVotante) public datosVotante;
    mapping( string => Partido) public datosPartidos;
    mapping( uint => Mesa) public datosMesa;
    mapping( uint => ColegioElectoral) public colegioElectoral;

constructor(string memory _nombre, string memory _year){
    
    bytes memory bn = bytes(_nombre);
    require(bn.length != 0, "El nombre de estas elecciones no puede estar vacio");
    
    bytes memory ba = bytes(_year);
    require(ba.length !=0, "El year de estas elecciones no puede estar vacio");
    
    admin= msg.sender;
    nombre= _nombre;
    year= _year;
    
}

modifier onlyAdmin() {
    require(msg.sender == admin ,"Solo permitido al administrador");
    
    _;
}

function creaPartido(string memory _nombre) onlyAdmin public returns(uint){
    bytes memory bn = bytes(_nombre);
    require(bn.length != 0, "El nombre del partido no puede estar vacio");
    uint _votosIniciales = 0;
    
    
    Partido memory datos= Partido(_nombre,_votosIniciales);
    datosPartidos[_nombre]=datos;
    partidos.push(_nombre);
    //partidos.push(Partido(_nombre,_votosIniciales));
    return partidos.length-1;
}

function partidosLength() public view returns(uint) {
        return partidos.length;
    }

function creaVotante(address _direccion, string memory _nombre, string memory _calle,string memory _dni) onlyAdmin public {
        
        
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre no puede ser vacio");
        
        bytes memory bc = bytes(_calle);
        require(bc.length != 0, "La calle no puede ser vacio");
        
        bytes memory bdni = bytes(_nombre);
        require(bdni.length != 0, "El DNI no puede ser vacio");
        
        bool _votado = false;
        
        require(_votado == false, "El usuario nuevo no debe haber votado");
        
       
        
        DatosVotante memory datos = DatosVotante(_direccion,_nombre, _calle,_dni,_votado);
        
        datosVotante[_direccion] = datos;
        
        votantes.push(_direccion);
        
    }


    function votantesLength() public view returns(uint) {
        return votantes.length;
    }
    
    function votaPartido(address _direccionVotante, string memory _partido) public{
        
        
        require(datosVotante[_direccionVotante].votado == false, "El votante ya ha votado");
        datosPartidos[_partido].votos ++;
        datosVotante[_direccionVotante].votado = true;
    }



/* 
Faltan comprobaciones de atributos , modificadores y si la mesa está creada
crear presidente aquí??? como crear address vacía
*/
    function creaMesa(uint _idColegio) public{
        
        // bytes memory bc = bytes(_colegio);
        // require(bc.length != 0, "El colegio no puede ser vacio");
        
        
       // Array temporal, copia de las mesas que hay en el colegio dado en el parametro
        
        
        Mesa[] storage P = mesaColegio[_idColegio];
        
        address _presidente = 0x0000000000000000000000000000000000000000;
        uint _numeroVotantes = 0;
        uint _numeroVotos = 0;
        bool _actaFirmada = false;
        
        require(_numeroVotos == 0, "El numero de votos iniciales debe ser 0");
        require(_numeroVotantes == 0, "El numero de votantes iniciales debe ser 0");
        
        //Cogemos el length del numero de mesas de ese colegio, sera el numero de la nueva mesa
        
        uint _numero = mesaColegio[_idColegio].length;
        uint _numeroGlobal = mesasS.length;
        
        Mesa memory mesa = Mesa(_idColegio,_numero,_numeroGlobal,_presidente,_numeroVotantes,_numeroVotos,_actaFirmada);
        
        datosMesa[_numeroGlobal] = mesa;
        
        mesasS.push(mesa);
        
        /*
        Metemos la nueva mesa en el array temporal
        despues metemos el array temporal con la nueva mesa en el colegio deseado
        */
        
        P.push(mesa);
        mesaColegio[_idColegio] = P; 
        
        
        
    }

    function mesasLength() public view returns(uint) {
        return mesasS.length;
    }
    
    
    
    function creaColegio(uint id, string memory _nombre,string memory _direccion) onlyAdmin public{
        
        address _admin = admin;
        uint numeroMesas = 0;
        uint numeroVotantes = 0;
        uint numeroVotos = 0;
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre no puede ser vacio");
        
        bytes memory bd = bytes(_direccion);
        require(bd.length != 0, "El nombre no puede ser vacio");
        
        require(colegioExiste(id) == false,"El colegio ya existe");
        
        ColegioElectoral memory colegio = ColegioElectoral(id,_nombre,_admin,_direccion,numeroMesas,numeroVotantes,numeroVotos);
        colegioElectoral[id]= colegio;
        colegiosS.push(colegio);
        //creamos un nuevo colegio vacio en el array mesaColegio
        mesaColegio.push();
        
    }
    
    /*
    comprobar si existe el colegio, introducimos el id, comprobamos si en ese id hay un nombre, si tiene algun byte, entonces devuelve true, es decir, hay colegio
    */
    
     function colegioExiste(uint id) private view returns(bool){
         string memory _bnombre = colegioElectoral[id].nombre;
         
         bytes memory b = bytes(_bnombre);
         
         return b.length != 0 ;
     }
    
    
    
    
    
    /*
    
    Asigna presidente a la mesa, pero si la mesa no está creada, la crea solo con el presidente
    Que pasa si creo el mismo presidente en otra mesa??
    
    */
    function presidenteMesa(address _direccionPresidente,uint  _numeroMesa) public{
        
        
        
        datosMesa[_numeroMesa].presidente = _direccionPresidente;
        mesasS[_numeroMesa].presidente =_direccionPresidente;
        presidentes.push(_direccionPresidente);
        
    }
    
    
    
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
            uint j = _i;
            uint len;
                while (j != 0) {
                    len++;
                    j /= 10;
                }
            bytes memory bstr = new bytes(len);
            uint k = len - 1;
                while (_i != 0) {
                    bstr[k--] = byte(uint8(48 + _i % 10));
                    _i /= 10;
                }
        return string(bstr);
    }

}