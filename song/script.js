// ************************************
// ************************************
const b = document.body

const pokemon = document.querySelector("#pokemon")
const pokedex = document.querySelector("#pokedex")
const pokedexCover = document.querySelector("#pokedex-cover")
const pokedexShadow = document.querySelector("#pokedex-shadow")
const pokemonAuthor = document.querySelector("#pokemon-author")

const arrowBack = document.querySelector("#arrow-back")
const arrowNext = document.querySelector("#arrow-next")
const pokemonNumber = document.querySelector("#pokemon-number")
const pokemonName = document.querySelector("#pokemon-name")
const pokemonImage = document.querySelector("#pokemon-image")
const pokemonAudio = document.querySelector("#pokemon-audio")
const pokemonTag = document.querySelectorAll(".pokemon-tag")
const pokemonSource = document.querySelector("#pokemon-audio source")

const pokelist =
    [
        {
        "number": "07",
        "name": "Clandestine",
        "image": "https://pixeldrain.com/api/file/v4Gwd85N",
        "audio": "https://pixeldrain.com/api/file/LeyhLE2E",
        "tagA": 'ANSH',
        "tagB": 'PREET©',
        },
        {
        "number": "06",
        "name": "CPeakyBlinder",
        "image": "https://pixeldrain.com/api/file/L1k5aC98",
        "audio": "https://pixeldrain.com/api/file/LF4n6uTx",
        "tagA": '(●'◡'●)',
        "tagB": '♪',
        },
        {
        "number": "01",
        "name": "Timbaland",
        "image": "https://pixeldrain.com/api/file/cCN5mpR6",
        "audio": "https://pixeldrain.com/api/file/3ErZWVL8",
        "tagA": 'Thanks for',
        "tagB": ' Visiting..',
        },
    ]
let con = -1
let cover = 0
// ************************************
// ************************************
let pokedexFunc = (e) => {
    var x = e.pageX / window.innerWidth - 0.5
    var y = e.pageY / window.innerHeight - 0.5

    pokedex.style.transform = `
        perspective(10000px)
        rotateX(${ y * 10  + 55}deg)
        rotateZ(${ -x * 10 + 25}deg)
        translateZ(-5vw)
    `;
}
//---------------------------
let getPokemonFunc = (e) => {

    if( e && e.currentTarget ){
        if (e.currentTarget.id == 'arrow-next' && con < 2) con++
        else if(e.currentTarget.id == 'arrow-back' && con > 0) con--
    }

    pokemonNumber.innerText = pokelist[con].number
    pokemonName.innerText = pokelist[con].name
    pokemonImage.src = pokelist[con].image
    pokemonTag[0].innerText = pokelist[con].tagA
    pokemonTag[1].innerText = pokelist[con].tagB
    pokemonSource.src = pokelist[con].audio
    pokemonAudio.load()
    pokemonAudio.play()
}
//---------------------------
let pokedexCoverFunc = () => {
    if (cover % 2 == 0) {
        pokemon.classList.remove('is-pokemon-hidden')
        pokemonNumber.classList.remove('is-pokemon-hidden')
        pokemonAuthor.classList.remove('is-pokemon-hidden')
        pokedexCover.classList.remove('is-pokedex-open')
        pokedexShadow.classList.remove('is-shadow-hidden')
    }
    else{
        pokemon.classList.add('is-pokemon-hidden')
        pokemonNumber.classList.add('is-pokemon-hidden')
        pokemonAuthor.classList.add('is-pokemon-hidden')
        pokedexCover.classList.add('is-pokedex-open')
        pokedexShadow.classList.add('is-shadow-hidden')
        pokemonAudio.pause()

        pokemonNumber.innerText = ''
        pokemonName.innerText = ''
        pokemonImage.src = ''
        pokemonTag[0].innerText = ''
        pokemonTag[1].innerText = ''
        pokemonSource.src = ''
        con = -1
    }
    cover++
}
// ************************************
// ************************************
b.addEventListener("pointermove", pokedexFunc)
pokedexCover.addEventListener("click", pokedexCoverFunc)
arrowNext.addEventListener("click", getPokemonFunc)
arrowBack.addEventListener("click", getPokemonFunc)
