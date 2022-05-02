Esse script foi feito como uma das etapas do seletivo para a vaga de Junior Software Engineer do Bud.

# como executar
Para executar este script você deve pela linha de comando executar: 
```javascript
node ./consecutivos.js [numero]
```

# como funciona
A função se inicia quando transformo o numero recebido em string, para que possa ser analisado. Na sequencia transformo a string em array e analiso caractere por caractere.


Na linha 8 inicio o meu laço para, com meus três parâmetros: inicializador: i=0 ; condição de parada : i < numeroArray.length ; e incremento : i++

Faço a comparação do meu número anterior +1 com o meu atual número, em caso positivo é porque há uma sequencia.

Caso minha nova sequencia seja maior que a anterior, o numero da minha maior sequencia é atualizado, caso contrário meu número atual é o inicio da minha nova sequencia.