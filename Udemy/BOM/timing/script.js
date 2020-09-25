setTimeout(function() {
    document.write(`teste1<br/>`), 2000
})

var i = 100

var x = setInterval(function() {
    document.write(`${i}<br/>`)
    i--

    if(i === -1) {
        clearInterval(x)
        
    }
},10)