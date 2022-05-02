function maiorSequencia(numero) {
  const numeroString = numero.toString();
  const numeroArray = numeroString.split("");
  let inicioSequencia = 0;
  let tamanhoSequencia = 1;  
  let maiorSequencia = 0;

  for (let i = 0; i < numeroArray.length; i++) {
    if (numeroArray[i] == parseInt(numeroArray[i - 1]) + 1) {

      tamanhoSequencia++;

      let novaSequencia = numeroString.substring(
        inicioSequencia,
        inicioSequencia + tamanhoSequencia
      );

      if (parseInt(novaSequencia) > maiorSequencia){
        maiorSequencia = parseInt(novaSequencia);
      }

    } else {
      tamanhoSequencia = 1;
      inicioSequencia = i;
    }
  }

  return maiorSequencia;
}

console.log(maiorSequencia(process.argv[2]));
