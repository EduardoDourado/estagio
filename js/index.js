// alert('Hello, world!');
window.onload = (event) => {
    //var submit = document.getElementById("submit_Id");//procura pelo oq tem "submit_Id"

    //submit.style = "background-color : red";// mostra oq esta em style dentro de submit
    //console.log(submit)//mostra  na tela

    // submit.nodeValue()
    console.log("dasfpsfk");
    
}

function onLogin() {
    
    var inputemail = document.getElementById('id_email')
    var inputsenha = document.getElementById('id_senha')

    email = inputemail.value
    senha = inputsenha.value
    

    if (email.trim()) {
        console.log('email nao é null');
    }
    else {
        console.log('email é null');
    }

    if (senha.trim()) {
        console.log('senha nao é null');

        if (senha.length >= 8) {
            if (email == "angeloeduardo445@gmail.com" && senha == "12345678") {
                alert('usuario logado com sucesso.')
            }
            else {
                alert('Não foi possivel logar.')
            }

           
        }
        else{
            console.log("senha menor que 8 char")
        }
 }

}

console.log('hello word');

const minhaurl = document.URL;
document.write(minhaurl)

switch (variavel = 'zod') {
    case 1:
        document.write('Opção 1');
        break;
    case 2:
        document.write('Opção 2');
        break;
    default:
        document.write('padrão');
        break;
}

var var1 = 0;
document.write(typeof var1)
while (var1 <= 10) {
    document.write('</br>linha' + var1);
    var1++;
}

var myArray = ['um', 'dois', 'tres', 'quatro', 'cinco'];

myArray.forEach(function (value, key) {
    if (key == 2 || key == 4) {

        console.log(value);
    }
})

console.log(myArray[2]);
const var2 = "teste";
const var3 = "boodaf"
function minhafunção(varx, vary) {
    console.log(varx, vary)
}
minhafunção(var2, var3)


const tamanho = myArray.push('seis');
console.log(tamanho)