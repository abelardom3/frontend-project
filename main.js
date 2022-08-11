const body = $('body')
const container = $('<div></div>')
const containerExcuse = $('<div></div>')
const containerBtn = $('<div></div>')
const excuseCatrgories = ['family', 'office', 'children', 'college', 'party']


createTitle()
appendCont()
createButtons(excuseCatrgories)

function createTitle() {
    const header = $('<h></h>')
    $(header).attr('id', "header")
    $(header).text('Excuse Generator')
    $(container).prepend(header)
}


function appendCont() {
    $(container).attr('id', 'container')
    $(container).addClass('homePage')
    $(containerBtn).attr('id', 'btnContainer')
    $(containerExcuse).attr('id', 'excuseContainer')
    $(body).append(container)
    $(body).append(containerExcuse)
    $(body).append(containerBtn)

}

function createButtons(array) {
    for (var i = 0; i < array.length; i++) {
        const category = array[i]
        const button = $('<button></button>')
        $(button).attr('id', `${category}`)
        $(button).addClass('btnClass')
        $(button).text(`Get excuse for ${category}`)
        $(containerBtn).append(button)
        buttonClickEvent(button)

    }

}


function buttonClickEvent(button) {
    $(button).click((e) => {
        const currentCategory = e.target.id;
        getExcuse(currentCategory)
        hideExcuse()
    })
}




function getExcuse(currentCategory) {
    $.get(`https://excuser.herokuapp.com/v1/excuse/${currentCategory}`, (data) => {
        acessObj(data)


    })
}


function acessObj(data) {
    for (var i = 0; i < data.length; i++) {
        const objExcuse = data[i]
        console.log(objExcuse)
        makeDiv(objExcuse)
    }


}



function makeDiv(objExcuse) {
    const exMessage = objExcuse.excuse
    const divExcuse = $('<div></div>')
    $(divExcuse).attr('id', 'text')
    $(divExcuse).text(`Excuse: ${exMessage}`)
    $(containerExcuse).append(divExcuse)

}





function hideExcuse() {
    $(containerExcuse).empty()
}









