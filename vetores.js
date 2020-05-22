// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// // As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:/


const programador=
    {
        nome: "Junji",
        idade: 26,
        tecnologia:[{
            nome: "C++",
            especialidade: 'Desktop'
        },
        {
            nome: 'java script',
            especialidade: 'Front'

        },
        {
            nome: 'python',
            especialidade: 'data science'

        },
    ]
        
    }


    // O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop 
console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[1].nome} 
com especialidade em ${programador.tecnologia[1].especialidade} `)