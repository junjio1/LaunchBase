const classe01 = [{
        nome: "Junji",
        nota: 5
    },
    {
        nome: "Sara",
        nota: 9
    },
    {
        nome: "Avanilda",
        nota: 7
    },
]

const classe02 = [{
        nome: "Arnaldo",
        nota: 2
    },
    {
        nome: "Diego",
        nota: 9
    },
    {
        nome: "Reinaldo",
        nota: 7
    },
]

function calculaMedia(classe) {
    let soma = 0
    for (let i = 0; i < classe.length; i++) {
        soma = soma + classe[i].nota

    }
    const media = soma / classe.length
    return media
}

media01 = calculaMedia(classe01)
media02 = calculaMedia(classe02)

function enviaMenssagem(media, turma) {
    if (media >= 5) {
        console.log(`A media da ${turma} foi ${media} e é maior que 5`)
    } else {
        console.log(`A media da ${turma} e menor que 5`)
    }
}

enviaMenssagem(media01, "turma A")
enviaMenssagem(media02, "turma B")