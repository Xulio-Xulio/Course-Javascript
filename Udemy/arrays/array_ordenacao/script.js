var gostos = Array()

gostos[`lista_jogos`] = [`Lol`, `r6`, `Watchdogs`, `Naruto`, `Ni No Kuni`]

gostos[`lista_animes`] = [`kimetsu no yaiba`, `Jujutsu no kaisen`, `God of highschool`, `Naruto`, `Toradora`]

console.log(gostos[`lista_animes`].sort())

var numbers = [1000, 2, 130, 1, 50]

console.log(numbers.sort())

console.log(numbers.sort(numberOrdenation))

function numberOrdenation(x, z) {
    return x - z
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem e mantida
}
