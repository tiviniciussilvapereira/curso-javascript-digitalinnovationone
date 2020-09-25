//Introdução ao Javascript

//var nome = "Vinicius";
//var idade  = 26; 
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ");
//alert(idade s+ idade2);
//console.log(nome); 
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil")); 
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"))

//------------------------------------------------

//Array e Dicionario

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - ")); 
//alert(lista[1]);

//listas de bibliotecas
//var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"},{nome:"laranja", cor:"laranja"}]; 
//console.log(frutas);
//console.log(frutas[2]);

//------------------------------------------------

//Condicionais, laços de repetição de Date
/*
var idade = prompt("Qual sua idade?");
//var idade = 18; 
if(idade >= 18){
    alert("maior de idade");   
}else{
    alert("menor de idade");
}; 
*/
/*
var count = 0; 
while (count <= 5){
    console.log(count); 
    alert(count); 
    //count = count + 1; 
    count++; 
}
*/
/*
var count; 
for(count=0; count <= 5; count++){
    alert(count);
}
*/ 
/*/
var data = new Date(); 
alert(data.getMonth()+1);
alert(data.getMinutes());
*/

//------------------------------------------------
//Functions
/*
function soma(n1, n2){
    return n1 + n2; 
}
alert (soma(5, 10));
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
//variaveis globais ou locais. O var dentro da function sera utilizado apenas para aquela function, fora sera uma var global
function validaIdade(idade){
    var validar; 
    if (idade >= 18){
        validar = true; 
    }else{
        validar = false;
    }
    return validar; 
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade)); 
*/

function botao(){
    //alert("Você clicou!"); 
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<b>";
}
function redirecionar(){
    window.open("https://google.com"); //abre em outra aba
    //window.location.href = "https://google.com"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!";
   elemento.innerHTML = "Obrigado por passar o mouse!";
}
function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}