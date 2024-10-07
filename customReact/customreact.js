function customRender(element, root){
    /*
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute("href", element.props.href)
    domElement.setAttribute("target", element.props.target)

    root.appendChild(domElement)
    */

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop])
    }

    root.appendChild(domElement)
}

//We get this through react
const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit google!"
}

const root = document.getElementById('root')

customRender(reactElement, root)