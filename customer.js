function customRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)

    domElement.appendChild(domElement)

}

const mainContainer = document.querySelector('#root')

const reactElement = {
    type: 'a',
    props :{
        href : 'https://google.com',
        target: 'blank'
    },
    children : 'click me to visit googloooo'
}

//this is the function that is used for rendering whatever we have selected -> this function says ki inject reactelement to main container
customRender(reactElement , mainContainer)