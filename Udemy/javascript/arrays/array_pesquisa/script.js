var gostos = Array()

gostos[`lista_jogos`] = [`Lol`, `r6`, `Watchdogs`, `Naruto`, `Ni No Kuni`]

gostos[`lista_animes`] = [`kimetsu no yaiba`, `Jujutsu no kaisen`, `God of highschool`, `Naruto`, `Toradora`]

console.log(gostos)

if (gostos[`lista_animes`].indexOf(`fewf`) === -1) {
    console.log(`Esse elemento não existe`)
} else {
    console.log(`Esse elemento existe, esta na posição`)
}

if (gostos[`lista_animes`].indexOf(`Toradora`) === -1 ) {
    console.log(`Esse elemento não existe`)
} else {
    console.log(`Esse elemento existe, esta na posição ${gostos[`lista_animes`].indexOf(`Toradora`)}`)
}
