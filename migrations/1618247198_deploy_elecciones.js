let Elecciones = artifacts.require("Elecciones");

module.exports = function(_deployer) {
 _deployer.deploy(Elecciones, "EleccionesGenerales", "2021-2022");
};
