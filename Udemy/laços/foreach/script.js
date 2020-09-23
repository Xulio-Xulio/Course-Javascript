var invite = [`Lucy`, `Tanjirou`, `Taiga`, `Gon`, `Neji`]
console.log(invite)
m 
invite.forEach(function(/* valor */ x, 
                        /* indice */ y, 
                        /* array */ z) {
    console.log(
`valor: ${x}
indice: ${y}
array: ${z}`)

if(x == `Tanjirou`) {
    z[y] = `Shinobu`
}
})

console.log(invite)

