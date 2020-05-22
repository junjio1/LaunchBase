// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios =[
    {
        nome: "Junji",
        tecnologias:[
            "html", 
            "css"
        ]
    },
    {
        nome: "Marcio",
        tecnologias:[
            "python", 
            "java"
        ]
    },
    {
        nome: "Reinaldo",
        tecnologias:[
            "javascript", 
            "sass"
        ]
    },
    {
        nome: "Isac",
        tecnologias:[
            "html", 
            "css"
        ]
    },
    {
        nome: "Mateus",
        tecnologias:[
            "html", 
            "css"
        ]
    },
]

// for (let i = 0; i<usuarios.length; i++ ){
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(`, `)}`)
// }

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o
//  usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

 function checaSeUsuarioUsaCSS(usuario) {

     for(let i = 0; i<usuario.tecnologias.length; i ++){
         if(usuario.tecnologias[i] == 'css'){
             return true
     }
    }
}
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
  
    // Percorra o array de usuários e, para cada um, verifique se o mesmo 
    // trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:
    

    for (let i = 0 ; i < usuarios.length; i ++){
      let check = checaSeUsuarioUsaCSS(usuarios[i])
      if(check){
          console.log(`o usuario ${usuarios[i].nome} trabalha com css`)
      }
    }

