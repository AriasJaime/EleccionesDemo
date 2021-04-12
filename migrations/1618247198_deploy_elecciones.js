module.exports = function(_deployer) {
  // Use deployer to state migration tasks.

  let Elecciones = artifacts.require("Elecciones");
module.exports = function(_deployer) {
 _deployer.deploy(Elecciones, "Elecciones", "20201-2022");
};
};
