//netflix
var video = Array()

video[1] = Array()
video[1][`name`] = `Toradora!`
video[1][`categories`] = `Anime`

function getVideo(video) {

    try {
        console.log(video[0][`name`])
    } catch(erro) {
        tratarErro(erro)
        console.log(erro)
        console.log(`Error path`)
        throw new Error(`Working in progress`)
    } finally {
        console.log(`Error`)
    }

    

    console.log(`Check her`)
}

function tratarErro(erro) {

}

getVideo(video)