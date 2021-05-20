// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.4;

contract Elecciones {
    
    address public admin;
    
    string public nombre;
    
    string public year;
    
    
    //Pensar si meter idColegio e idMesa aquí
    struct DatosVotante{
        address direccion;
        uint idColegio;
        uint numeroMesa;
        string nombre;
        string calle;
        string dni;
        bool votado;
    }

    struct DatosPresidente{
        string nombre;
        address direccion;
        uint numeroMesa;
        uint idColegio;
    }
    
    struct Partido{
        string nombre;
        uint votos;
    }
    
    
    //Como crear array dentro de struct
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
      uint numeroMesa;
      address presidente;
      uint numeroVotantes;
      uint numeroVotos;
      bool actaFirmada;
  }
    
    
  
    //Arrays con el total de votantes, partidos, presidentes ...
    address[] public votantes;
    string[] public partidos;
    address[] public presidentes;
    Mesa[] public mesas;
    ColegioElectoral[] public colegios;
        
    mapping( address => DatosVotante) public datosVotante;
    mapping( string => Partido) public datosPartidos;
    mapping( uint => Mesa) public datosMesa;
    mapping( uint => ColegioElectoral) public colegioElectoral;
    //array que dado el indice de colegio, devuelve un array con los numeros de mesa de ese colegio.
    mapping( uint => uint[]) public mesaColegio;
    //array que dado un numero de mesa, te devuelve un array de direcciones de sus votantes.
    mapping( uint => address[]) public votanteMesa;
    mapping( address => DatosPresidente) public datosPresidente;
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

function creaPartido(string memory _nombrePartido) onlyAdmin public returns(uint){
    bytes memory bn = bytes(_nombrePartido);
    require(bn.length != 0, "El nombre del partido no puede estar vacio");
    uint _votosIniciales = 0;
    
    require(partidoExiste(_nombrePartido) == false,"El partido ya existe");
    
    Partido memory datos= Partido(_nombrePartido,_votosIniciales);
    datosPartidos[_nombrePartido]=datos;
    partidos.push(_nombrePartido);
    //partidos.push(Partido(_nombre,_votosIniciales));
    return partidos.length-1;
}

function partidosLength() public view returns(uint) {
        return partidos.length;
    }
    
function partidoExiste(string memory _nombrePartido) private view returns(bool){
         string memory _bnombre = datosPartidos[_nombrePartido].nombre;
         
         bytes memory b = bytes(_bnombre);
         
         return b.length != 0 ;
     }

function creaVotante(address _direccion,uint _numeroMesa, string memory _nombre, string memory _calle,string memory _dni) onlyAdmin public {
        
        
        
        bytes memory bn = bytes(_nombre);
        require(bn.length != 0, "El nombre no puede ser vacio");
        
        bytes memory bc = bytes(_calle);
        require(bc.length != 0, "La calle no puede ser vacio");
        
        bytes memory bdni = bytes(_nombre);
        require(bdni.length != 0, "El DNI no puede ser vacio");
        
        bool _votado = false;
        
        require(votanteExiste(_direccion) == false,"El votante ya existe");
        require(_votado == false, "El usuario nuevo no debe haber votado");
        
        uint _idColegio = datosMesa[_numeroMesa].idColegio;
       
        //creamos el nuevo votante con sus parametros iniciales
        DatosVotante memory datos = DatosVotante(_direccion,_idColegio,_numeroMesa,_nombre, _calle,_dni,_votado);
        datosVotante[_direccion]=(datos);
        
        //metemos el votante en el array global con todos los votantes, y luego en el arrya que asigna numero de mesa a votantes
        votantes.push(_direccion);
        votanteMesa[_numeroMesa].push(_direccion);
        
        mesas[_numeroMesa].numeroVotantes ++;
        datosMesa[_numeroMesa].numeroVotantes ++;
        colegios[_idColegio].numeroVotantes ++;
        colegioElectoral[_idColegio].numeroVotantes ++;
        
        
        
    }
    
    function votanteExiste(address _direccion) private view returns(bool){
         string memory _bnombre = datosVotante[_direccion].nombre;
         
         bytes memory b = bytes(_bnombre);
         
         return b.length != 0 ;
     }


    function votantesLength() public view returns(uint) {
        return votantes.length;
    }
    
    function votanteMesaLength(uint _numeroMesa) public view returns(uint) {
        return votanteMesa[_numeroMesa].length;
    }
    
    
    function votaPartido(address _direccionVotante, string memory _partido) public{
        
        require(partidoExiste(_partido) == true,"El partido no existe");
        require(votanteExiste(_direccionVotante) == true,"El votante no existe");
        require(datosVotante[_direccionVotante].votado == false, "El votante ya ha votado");
        require(_direccionVotante == msg.sender,"La direccion introducida no es la tuya");
        datosPartidos[_partido].votos ++;
        datosVotante[_direccionVotante].votado = true;
        
        //actualizar el numero de votos dentro de los colegios y las mesas correspondientes a ese votante;
        mesas[datosVotante[_direccionVotante].numeroMesa].numeroVotos ++;
        datosMesa[datosVotante[_direccionVotante].numeroMesa].numeroVotos ++;
        colegios[datosVotante[_direccionVotante].idColegio].numeroVotos ++;
        colegioElectoral[datosVotante[_direccionVotante].idColegio].numeroVotos ++;
        
    }

    

/* 
Faltan comprobaciones de atributos , modificadores y si la mesa está creada
crear presidente aquí??? como crear address vacía
*/
    function creaMesa(uint _idColegio) onlyAdmin public{
        
        // bytes memory bc = bytes(_colegio);
        // require(bc.length != 0, "El colegio no puede ser vacio");
        
        
       // Array temporal, copia de las mesas que hay en el colegio dado en el parametro
        
        
        
        
        address _presidente = 0x0000000000000000000000000000000000000000;
        uint _numeroVotantes = 0;
        uint _numeroVotos = 0;
        bool _actaFirmada = false;
        
        require(_numeroVotos == 0, "El numero de votos iniciales debe ser 0");
        require(_numeroVotantes == 0, "El numero de votantes iniciales debe ser 0");
        
        //Cogemos el length del numero de mesas de ese colegio, sera el numero de la nueva mesa
        uint _numeroMesa = mesas.length;
        
        Mesa memory mesa = Mesa(_idColegio,_numeroMesa,_presidente,_numeroVotantes,_numeroVotos,_actaFirmada);
        
        datosMesa[_numeroMesa] = mesa;
        
        mesas.push(mesa);
        
        /*
        Metemos la nueva mesa en el array temporal
        despues metemos el array temporal con la nueva mesa en el colegio deseado
        */
        
        mesaColegio[_idColegio].push(_numeroMesa);
        colegios[_idColegio].numeroMesas++;
        colegioElectoral[_idColegio].numeroMesas++;
        
    }
    
    function mesasLength() public view returns(uint) {
        return mesas.length;
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
        colegios.push(colegio);
        
        
        
    }
    
    /*
    comprobar si existe el colegio, introducimos el id, comprobamos si en ese id hay un nombre, si tiene algun byte, entonces devuelve true, es decir, hay colegio
    */
    
     function colegioExiste(uint id) private view returns(bool){
         string memory _bnombre = colegioElectoral[id].nombre;
         
         bytes memory b = bytes(_bnombre);
         
         return b.length != 0 ;
     }
    
    
    function mesaColegioLength(uint _idColegio) public view returns(uint) {
        return mesaColegio[_idColegio].length;
    }
    
    
    
    /*
    
    - meter presidente en colegioMesa
    -Que pasa si creo el mismo presidente en otra mesa??
    
    */
    function asignaPresidenteMesa(string memory _nombre,address _direccionPresidente,uint  _numeroMesa) onlyAdmin public{
        
        
        
        datosMesa[_numeroMesa].presidente = _direccionPresidente;
        mesas[_numeroMesa].presidente =_direccionPresidente;
        presidentes.push(_direccionPresidente);
        uint _idColegio = mesas[_numeroMesa].idColegio;
        datosPresidente[_direccionPresidente] = DatosPresidente(_nombre,_direccionPresidente,_numeroMesa,_idColegio);
    }

    function presidenteExiste(address _direccion) public view returns(bool){
         string memory _bnombre = datosPresidente[_direccion].nombre;
         
         bytes memory b = bytes(_bnombre);
         
         return b.length != 0 ;
     }
    
    function quienSoy()  public view returns (string memory _nombre, address _direccion,uint _idColegio, uint _numeroMesa,string memory _rol) {
        DatosVotante memory datosV = datosVotante[msg.sender];
        DatosPresidente memory datosP = datosPresidente[msg.sender];
        if(votanteExiste(msg.sender) == true){
            _nombre = datosV.nombre;
            _direccion = datosV.direccion;
            _idColegio = datosV.idColegio;
            _numeroMesa= datosV.numeroMesa;
            _rol = "Votante";
        }else if(presidenteExiste(msg.sender)){
            _nombre = datosP.nombre;
            _direccion = datosP.direccion;
            _idColegio = datosP.idColegio;
            _numeroMesa= datosP.numeroMesa;
            _rol = "Presidente";
        }else if(msg.sender == admin){
        _nombre="admin";
        _direccion=admin;
        _idColegio=0;
        _numeroMesa=0;
        _rol="Administrador";
        }else{
        _nombre="Usuario no registrado";
        _direccion=0x0000000000000000000000000000000000000000;
        _idColegio=0;
        _numeroMesa=0;
        _rol="Usuario no registrado";    
        }
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