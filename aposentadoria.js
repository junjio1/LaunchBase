// Calculadora de imc 
const nome ="Junji"
const sexo = "F"
const idade = 26
const contribuicao = 50

if (sexo == "M" && contribuicao >=35 && idade+contribuicao >= 95 || (sexo == "F" && contribuicao >=30 && idade+contribuicao >= 85)){
    console.log(`${nome} pode se aposentar `)
}

// else if(sexo == "F" && contribuicao >=30 && idade+contribuicao >= 85){
//     console.log(`${nome} pode se aposentar `)
// }
else{
    console.log(`${nome} nao pode se aposentar `)
}

