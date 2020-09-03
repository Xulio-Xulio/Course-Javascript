  
function load() {
    var msg = document.querySelector(`div#msg`)
    var photo = document.querySelector(`#photo`) 
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    msg.innerHTML = `<p>It’s ${hour}:${minutes}:${seconds}<p/>` 
    
    if (hour >= 6 && hour < 12) {
        photo.src = `morning.png`
        document.body.style.background = `#e2cd9f`
        msg.innerHTML += `<strong/>Good Morning<strong/>`
    } else if (hour >= 12 && hour < 19) {
        photo.src = `afternoon.png`
        document.body.style.background = `#b9846f`
        msg.innerHTML += `<strong/>Good Afternoon<strong/>`
    } else {
        photo.src = `night.png`
        document.body.style.background = `#515154`
        msg.innerHTML += `<strong/>Good Evening<strong/>`
    }
}

