var gostos = Array()

gostos[`lista_jogos`] = Array(`Lol`, `r6`, `Watchdogs`, `Naruto`, `Ni No Kuni`)

gostos[`lista_animes`] = [`kimetsu no yaiba`, `Jujutsu no kaisen`, `God of highschool`, `Naruto`, `Toradora`]

console.log(gostos)

/* Incluir elemento */
gostos[`lista_animes`].push(`HunterxHunter`)

/* Incluir elemento no inicio do array*/
gostos[`lista_jogos`].unshift(`Steep`)

/* Excluir elemento do final do array */
gostos[`lista_jogos`].pop()

/* Excluir elemento do inicio do array */
gostos[`lista_animes`].shift()