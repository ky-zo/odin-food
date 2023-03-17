import logoImg from './images/Eggplant.png'
import { turnMenu } from './menu.js'
import { turnHome } from './hero'
import turnContact from './contact.js'

const headerLogo = document.querySelector('.logo')

const logo = document.createElement('img')
logo.setAttribute('src', logoImg)
logo.classList.add('logo-img')
headerLogo.appendChild(logo)

const name = document.createElement('div')
name.textContent = 'Foodey'
name.classList.add('logo-name')
headerLogo.appendChild(name)

const buttons = document.querySelector('.buttons')

const menuElements = [`Home`, `Menu`, `Contact`]

menuElements.forEach((element) => {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-button')
    menuItem.textContent = element
    menuItem.addEventListener('click', (e) => {
        if (element === 'Home') {
            turnHome()
        } else if (element === 'Menu') {
            turnMenu()
        } else {
            turnContact()
        }
    })
    buttons.appendChild(menuItem)
})
