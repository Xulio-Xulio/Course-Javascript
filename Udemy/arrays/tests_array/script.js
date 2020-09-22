var everything_list = [`car`, `naruto`, `nice`, `air`]


function addItem() {
    var new_item = document.querySelector(`input#new_item`).value

    if(new_item != ``) {
        if(everything_list.indexOf(new_item) !== -1) {
            var info_msg = document.querySelector(`p#info_msg`)
            info_msg.innerText = `Item exist`

            document.querySelector('input#new_item').value = ''

            console.log(`Item exist`)
        }

        else {
            var info_msg = document.querySelector(`p#info_msg`)
            info_msg.innerText = `new item add`

            var new_list = document.querySelector(`p#list_view`)
            new_list.innerText = everything_list    
            
            everything_list.push(new_item)
            
            document.querySelector('input#new_item').value = ''

            console.log(`new item add`)
            console.log(everything_list)
            
        }

    } else {
        var info_msg = document.querySelector(`p#info_msg`)
        info_msg.innerText = `Type something`

        console.log(`Type something`)
    }
       
}

function orderList() {
 var new_list = document.querySelector(`p#list_view`)
            new_list.innerText = everything_list 

    console.log(everything_list.sort())

}