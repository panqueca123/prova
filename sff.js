let usuarios = []

function adicionarUsuario(nome, idade, email) {
    const usuario = {
        nome,
        idade,
        email
    }

    if(idade > 0){
        console.log("idade valida")
    } else{
        console.log("idade é inválida.")
        return
    }

    if(nome === undefined && email === undefined && email === undefined) {
        console.log("Todos os dados faltando.")
        return
    } else if(nome === undefined || email === undefined || email === undefined){
        console.log("HNenhum dado definido.")
        return
    } else{
        usuarios.push(usuario)
        console.log(`Usuário ${nome} adicionado`)
    }
    
    
    listarUsuarios(usuarios);
}

function listarUsuarios(usuarios) {
    if (usuarios.length === 0) {
        console.log(" usuário Não cadastrado.")
        return
    } else {
        console.log(`Usuários cadastrados: ${usuarios.length}`)
        usuarios.forEach((usuario, index) => {
            console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`)
        })
    }
}

adicionarUsuario("Veroniquinha", 17 , "veronuiquinhagabrieldesouza@gmail.com")
