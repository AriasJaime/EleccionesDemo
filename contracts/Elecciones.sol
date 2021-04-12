// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.4;

contract Elecciones {
    
    address public admin;
    
    string public nombre;
    
    string public year;
    
    struct DatosVotante{
        string direccion;
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
      string nombre;
      address admin;
      string direccion;
      uint numeroMesas;
      uint numeroVotantes;
      uint numeroVotos;
  }
    
        
  struct Mesa{
      uint numero;
      address presidente;
      string colegio;
      uint numeroVotantes;
      uint numeroVotos;
      bool actaFirmada;
  }
    
    //Partido[] public partidos;
    
  
    
    address[] public votantes;
    string[] public partidos;
    uint[] public mesas;
    address[] public presidentes;
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


function creaPartido(string memory _nombre) public returns(uint){
    bytes memory bn = bytes(_nombre);
    require(bn.length != 0, "El nombre del partido no puede estar vacio");
    uint _votosIniciales = 0;
    
    
    Partido memory datos= Partido(_nombre,_votosIniciales);
    datosPartidos[_nombre]=datos;
    partidos.push(_nombre);
    //partidos.push(Partido(_nombre,_votosIniciales));
    return partidos.length-1;
}

function creaVotante(string memory _direccion, string memory _nombre, string memory _calle,string memory _dni) public {
        
        bytes memory bd = bytes(_direccion);
        require(bd.length != 0, "La direccion no puede ser vacio");
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre no puede ser vacio");
        
        bytes memory bc = bytes(_calle);
        require(bc.length != 0, "La calle no puede ser vacio");
        
        bytes memory bdni = bytes(_nombre);
        require(bdni.length != 0, "El DNI no puede ser vacio");
        
        bool _votado = false;
        
        require(_votado == false, "El usuario nuevo no debe haber votado");
        
       
        
        DatosVotante memory datos = DatosVotante(_direccion,_nombre, _calle,_dni,_votado);
        
        datosVotante[msg.sender] = datos;
        
        votantes.push(msg.sender);
        
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
    function creaMesa(address _presidente,string memory _colegio) public{
        
        bytes memory bc = bytes(_colegio);
        require(bc.length != 0, "El colegio no puede ser vacio");
        
        
        
        
        
        uint _numeroVotantes = 0;
        uint _numeroVotos = 0;
        uint _numero = 1;
        bool _actaFirmada = false;
        
        require(_numeroVotos == 0, "El numero de votos iniciales debe ser 0");
        require(_numeroVotantes == 0, "El numero de votantes iniciales debe ser 0");
        
       _numero = mesas.length;
        
        Mesa memory mesa = Mesa(_numero,_presidente,_colegio, _numeroVotantes,_numeroVotos,_actaFirmada);
        
        datosMesa[_numero] = mesa;
        
        mesas.push(_numero);
        
    }
    
    
    /*
    
    Asigna presidente a la mesa, pero si la mesa no está creada, la crea solo con el presidente
    Que pasa si creo el mismo presidente en otra mesa??
    
    */
    function presidenteMesa(address _direccionPresidente,uint  _numeroMesa) public{
        
        
        
        datosMesa[_numeroMesa].presidente = _direccionPresidente;
        presidentes.push(_direccionPresidente);
        
    }

}