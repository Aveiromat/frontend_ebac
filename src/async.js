function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes
}

const funcaoMuitoPesadaPromise = new Promise((resolve,reject) => {
    try {
        let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    resolve(execucoes);
    } catch(e) {
        reject ('Malucao, deu erro aqui na iteração')
    }
})

// console.log(funcaoMuitoPesada())

async function execucaoPrincipal() {
    console.log("Inicio")

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('matheusaveiro@gmail.com', 12354).then((resultado) => {
        console.log(resultado);
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado)
    } catch (e) {
        console.log(e)
    }

    console.log("Fim!")
}

const promiseComParametros = (login, senha) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado como: ${login}`)
        }, 3000)
    })
}

execucaoPrincipal()