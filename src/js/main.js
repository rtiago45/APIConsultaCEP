const cep = document.querySelector("#cep")

const showData = (result)=>{
    for (const campo in result) {
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
            console.log(campo)
        }
    }
}


cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","") // o traço do cep caso ele encontre ele troque por vazio
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})

