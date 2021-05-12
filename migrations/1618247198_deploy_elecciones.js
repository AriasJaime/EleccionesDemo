let Elecciones = artifacts.require("Elecciones");

module.exports = function(_deployer) {
 _deployer.deploy(Elecciones, " Elecciones Generales", " 2021/2022");
};
