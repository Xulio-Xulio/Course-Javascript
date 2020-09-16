function enter() {
    var color = ["#ffff00"]
    var white = [`#ffffff`]
    document.querySelector(`input#text_input`).style.background = color
    document.querySelector(`body#body-background`).style.background = white
}

function out() {
    var text = document.querySelector(`input#text_input`).value
    var color = [`#ffffff`]
    var background_color_red  = [`#ff0000`]
    var background_color_green  = [`#51ff00`]

    document.querySelector(`input#text_input`).style.background = color

    if (text.length > 3){
        document.querySelector(`body#body-background`).style.background = background_color_green
        return
    } else {
        document.querySelector(`body#body-background`).style.background = background_color_red
        return
    }

}