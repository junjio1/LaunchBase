const usuarios = [{
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

//   Percorra o array de usuários e para cada usuário chame 
//   uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

function calculaSaldo(receitas, despesas) {
    let rec = 0
    let desp = 0
    for (let i = 0; i < usuarios.length; i++) {
        rec = somaNumeros(usuarios[i].receitas)
        desp = somaNumeros(usuarios[i].despesas)
        let total = rec - desp

        if (total > 0) {
            console.log(`${usuarios[i].nome} positivo de ${Math.round(total * 100) / 100}`)
        } else if (total < 0)
            console.log(`${usuarios[i].nome} negativo de ${Math.round( total * 100) / 100}`)

    }
}
// console.log(usuarios[0].receitas[0])
calculaSaldo()

// Crie uma segunda função que recebe como parâmetro um array de números e 
// retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}
// Soma todos números dentro do array "numeros"