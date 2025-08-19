
// CALCULO DE MEDIA, APROVACAO, RECUPERACAO E REPROVACAO //

/* variaveis com as notas
    let nota1 = 2;
    let nota2 = 3;
    let nota3 = 5;
    let nota4 = 1;

// funcao para calcular a media, usando parametros ''nota1, nota2...'' 
    function calcularMedia (nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media
}

// variavel media, define que o valor da media sera igual a soma dos parametros/4
    let media = calcularMedia(nota1, nota2, nota3, nota4);
// serve para mostrar o resultado da media no console
    console.log(media);

// chamo a funcao pro codigo!
    verificarAprovacao(media);

        // funcao criada para verificar se a nota e acima ou abaixo da media
function verificarAprovacao(media) {
        // se a soma dos parametros/4 for maior ou igual a 7 esta aprovado!
    if (media >= 7) {
        console.log("Aprovado");
       // else if serve para criar duas situacoes, se a soma dos parametros/4 for maior ou igual a 5 a pessoa esta de recuperacao, caso seja menor reprovado.
    } else if (media >= 5) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
} */


// CALCULO IMC // 

/* Variaveis altura e peso para o calculo
    let altura = 1.73;
    let peso = 75;
// funcao do calculo do imc, peso / altura x altura = imc
    function calculoImc (altura, peso) {
    let imc = peso / (altura * altura);
    return imc
}
// variavei imc dando vida ao resultado da funcao
    let imc = calculoImc(altura, peso);
// resultado no console, .toFixed() serve para limitar o numero de casas decimais exemplo: .toFixed(2) = 1.01, .toFixed(3) = 1.001
    console.log(imc.toFixed(2));
*/


/*
// CALCULO FATORIAL // 

// funcao determina o numero que vai ser o valor multiplicado no fatorial
    function calcularFatorial(numero) {
    // se o numero for identico a 0 ou identico a 1 o valor vai retornar pra 1 e o resultado sera 1 ou 0
    if (numero === 0 || numero === 1) {
    return 1;
    }
    // O fatorial é uma multiplicação de números inteiros positivos, e o número neutro da multiplicação é o 1 (começamos com 1, e vamos multiplicando)
    let fatorial = 1;
    // aqui comeca um looping, laco, descrito pelo for ou while
    // let i = 2;     ->> estamos criando uma variavel i e dando o valor de 2 a ela vai ser o numero do qual a gente vai comecar a multiplicacao
    // i <= numero;   ->> Enquanto i for menor ou igual ao número que queremos o fatorial, o laço continua.
    // i++            ->> a cada volta que o looping da aumenta 1 o valor de i
    for (let i = 2; i <= numero; i++) {

        // pegamos o valor atual de fatorial e multiplicamos pelo valor de i, que vai aumentando a cada volta do looping com isso acumulando no resultado final
        fatorial *= i;

        // Exemplo: se o numero do fatorial for 5 
        // fatorial = 1 inicial            
        // i = 2: fatorial = 1 * 2 = 2
        // i = 3: fatorial = 2 * 3 = 6
        // i = 4: fatorial = 6 * 4 = 24
        // i = 5: fatorial = 24 * 5 = 120  
    }
    return fatorial;

}

    let numero = 21;
    let resultado = calcularFatorial(numero);
    console.log(`resultado do fatorial de ${numero} e igual a ${resultado}`); */


// CONVERSAO DOLLAR PRA REAL // 

/*  let real = 20;
    let dolar = 4.80;
    function converterDolar (real, dolar) {
    let conversao = (real) / dolar;
    return conversao
}

    conversao = converterDolar(real, dolar);
    let resultado = conversao
    console.log(`${real} Reais convertido a 4.80 pela cotacao ira resultar em ${resultado.toFixed(2)} dolares`); */


// AREA E O PERIMETRO //

/* calculo do perimetro e area do local, parametro usado ''largura'' e ''altura'', eles sao chamado pela funcao com parametros com as especificacoes de cada um fora da funcao do codigo
function calculoSala (largura, altura) {                               //                                                                                                              |
    let area = largura * altura;                                       //                                                                                                              |
    let perimetro = 2 * (altura + largura);                            //                                                                                                              |
    console.log(`${area}`);                                            //                                                                                                              |
    console.log(`${perimetro}`);                                       //                                                                                                              |
}                                                                      //                                                                                                              |
    calculoSala(5, 3);// <-------------------------------------------------------------------------------------------------------------------------------------------------------------+
    */


    /* CALCULO DO RAIO DA AREA CIRCULAR // BOM PRA APRENDER GEOMETRIA !!

    // criaremos uma funcao com o parametro sendo o raio da area, tendo uma constante PI = 3.14, use a constante invez de let quando for um numero fixo.
    // faremos variaveis para a area e o perimetro e nelas colocaremos a forma para o calculo do raio da sala, no final chamaremos a funcao fora das chaves e definiremos o valor do raio dentro dela.
    function calcularSalaCircular (raio) {
        const pi = 3.14;
        let area = pi * raio * raio;
        let perimetro = 2 * pi * raio;

        console.log(`a area tera o tamanho de ${area.toFixed(2)} metros e o perimetro ${perimetro.toFixed(2)} metros`);
    }

    calcularSalaCircular(5); */

        //      TABUADA     //

    /*

    function calcularTabuada (numero) {
        for (let y = 1; y <= 10; y++) {
            let resultado = numero * y;
            console.log(`${numero} x ${y} = ${resultado}`);
        }
    }

    let numero = 9;
    calcularTabuada(numero); */

    prompt('Sem bom dia!');


    let listaDeProgramacao = ['python', 'javaScript', 'java', 'c#'];
    listaDeProgramacao.push('c++', 'html', 'css');
    console.log(listaDeProgramacao); 


   