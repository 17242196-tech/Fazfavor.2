const bcrypt = require("bcrypt");

async function run() {
  const senhaDigitada = "123456";

  // Hash que está salvo no banco
  const hashBanco = "$2b$08$bebzXO2kfzLpkzb/OCDO1eqvwhHhfAXY6aYoSEd68Y6OtknVO10Ey";

  const resultado = await bcrypt.compare(senhaDigitada, hashBanco);

  console.log("Senha digitada:", senhaDigitada);
  console.log("Hash do banco:", hashBanco);
  console.log("Resultado da comparação:", resultado);
}

run();
