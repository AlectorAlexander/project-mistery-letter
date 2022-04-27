let textoInsert = document.querySelector("#carta-texto")
let campoTexto = document.getElementById("gera")
let criar = document.getElementById("criar-carta")
let palavras;
criar.addEventListener("click", insereTexto)
textoInsert.addEventListener("keyup", function (){
    if (event.keyCode === 13)  {
        insereTexto()
    }
})


function insereTexto () {
    
let h1 = document.getElementById("carta-gerada")


h1.innerText = ""
  
    let futuroArray = textoInsert.value

       //referência:  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
       let fatiador =  futuroArray.split(" ")

  

   //oi, eu sou goku


for (let i = 0; i < fatiador.length; i++) {
    const element = fatiador[i];
    let span = document.createElement("span")
    span.innerText = element
    
    h1.appendChild(span)
}

valorInput = ""
cofere ()
}

function cofere () {
    let p = document.getElementById("carta-gerada")
    for (let i = 0; i < p.childElementCount; i++) {
        const span = p.children[i];
        if (span.innerText != "") {
            ClasseAleatória ()
            break;
           
        }else {
            if  (i == (p.childElementCount - 1)){
     
            p.innerText = "Por favor, digite o conteúdo da carta."}
        }
        
    }


    
    
}
function ClasseAleatória () {
    let p = document.getElementById("carta-gerada")
    let estilo = [`newspaper`, `magazine1`, `magazine2` ]
    let tamanho = [`medium`, `big`, `reallybig`]
    let rotacao = [`rotateleft`, `rotateright`]
    let inclinacao = [`skewleft`, `skewright`]
    let classes1 = [estilo, tamanho]
    let classes2 = [rotacao, inclinacao]

    for (let i = 0; i < p.childElementCount; i++) {

    //Referência de como gerar um numero de índice de array aleatório: https://www.horadecodar.com.br/2021/06/22/como-pegar-um-valor-aleatorio-de-array-em-javascript/
const numero = Math.floor(Math.random() * classes1.length);
let classSorteada1 = classes1[numero];
const numero2 = Math.floor(Math.random() * classSorteada1.length);
classSorteada2 = classSorteada1[numero2]

        const span = p.children[i];
        span.className += classSorteada2

    }
    for (let ind = 0; ind < p.childElementCount; ind++) {

    const numero = Math.floor(Math.random() * classes2.length);
    let classSorteada1 = classes2[numero];
    const numero2 = Math.floor(Math.random() * classSorteada1.length);
    classSorteada2 = classSorteada1[numero2]
    
            const span = p.children[ind];
            span.className += " " + classSorteada2
            span.addEventListener("click", dezessete)
    
        }
}

function dezessete (palavra) {
let span = palavra.target
let estilo = [`newspaper`, `magazine1`, `magazine2` ]
    let tamanho = [`medium`, `big`, `reallybig`]
    let rotacao = [`rotateleft`, `rotateright`]
    let inclinacao = [`skewleft`, `skewright`]




const numero = Math.floor(Math.random() * estilo.length);
let classSorteada1 = estilo[numero];
const numero2 = Math.floor(Math.random() * tamanho.length);
classSorteada2 = tamanho[numero2]
const Numero = Math.floor(Math.random() * rotacao.length);
let classSorteada3 = rotacao[Numero];
const Numero2 = Math.floor(Math.random() * inclinacao.length);
classSorteada4 = inclinacao[Numero2]


    let classes = [classSorteada1 + " "+ classSorteada2+ " "+ classSorteada3+ " "+ classSorteada4]
    span.className = classes
   


    

        
    

    
}



