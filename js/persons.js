

const setPersons = function(listaDePersons){

    let cardPersons = document.getElementById('cardPersons')

    listaDePersons.results.forEach(function(item){

        let divCaixaPerson        = document.createElement('div')
        let h2CaixaName           = document.createElement('h2')
        let textPerson            = document.createTextNode(item.name)
        let figureCaixaImagem     = document.createElement('figure')
        let img                   = document.createElement('img')

        let divCaixaSpecie        = document.createElement('div')
        let pCaixaSpecie          = document.createElement('p')
        let textEspecie           = document.createTextNode(item.species)


        let divCaixaGenero        = document.createElement('div')
        let pCaixaGenero          = document.createElement('p')
        let textGenero            = document.createTextNode(item.gender)


        let divCaixaOrigin        = document.createElement('div')
        let pCaixaOrigin          = document.createElement('p')
        let textOrigin            = document.createTextNode(item.origin.name)

        divCaixaPerson.setAttribute('class', 'card-person')
        h2CaixaName.setAttribute('class', 'caixa-nome')
        pCaixaSpecie.setAttribute('class', 'especie')
        pCaixaGenero.setAttribute('class', 'genero')
        pCaixaOrigin.setAttribute('class', 'origem')
        img.setAttribute('src', item.image)
        img.setAttribute('alt', 'Fotos de Personagens')
        img.setAttribute('title', 'Foto do Personagens')
        figureCaixaImagem.setAttribute('class', 'caixa-imagem')

        cardPersons.appendChild(divCaixaPerson)
        divCaixaPerson.appendChild(h2CaixaName)
        h2CaixaName.appendChild(textPerson)
        divCaixaPerson.appendChild(figureCaixaImagem)
        figureCaixaImagem.appendChild(img)

        divCaixaPerson.appendChild(divCaixaSpecie)
        divCaixaSpecie.appendChild(pCaixaSpecie)
        pCaixaSpecie.appendChild(textEspecie)

        divCaixaPerson.appendChild(divCaixaGenero)
        divCaixaGenero.appendChild(pCaixaGenero)
        pCaixaGenero.appendChild(textGenero)

        divCaixaPerson.appendChild(divCaixaOrigin)
        divCaixaOrigin.appendChild(pCaixaOrigin)
        pCaixaOrigin.appendChild(textOrigin)
        

    });
}

const getPersonsAPI = async function(){

    let url = 'https://rickandmortyapi.com/api/character'

    let response = await fetch(url)

    let characterPersons = await response.json()

    setPersons(characterPersons)

}

window.addEventListener('load', function(){
    getPersonsAPI()
})