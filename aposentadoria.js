// Calculadora de imc 
const nome ="Junji"
const sexo = "M"
const idade = 26
const contribuicao = 60

if (sexo == "M" && contribuicao >=35 && idade+contribuicao >= 95){
    console.log(`${nome} pode se aposentar `)
}

else if(sexo == "F" && contribuicao >=30 && idade+contribuicao >= 85){
    console.log(`${nome} pode se aposentar `)
}
else{
    console.log(`${nome} nao pode se aposentar `)
}

