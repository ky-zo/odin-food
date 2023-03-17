import Chef from './content.js'
import rodrygoProfile from './images/Chef.png'
import { turnOnFlyingFoods } from './floats.js'
import { turnMenu } from './menu.js'

export default class Hero {
    constructor(text) {
        this.text = text
    }

    createHeroForWebsite() {
        const hero = document.createElement('h1')
        hero.classList.add('hero')
        hero.innerHTML = this.text
        return hero
    }

    createCtaForWebsite() {
        const cta = document.createElement('button')
        cta.classList.add('cta-primary')
        cta.addEventListener('click', () => {
            turnMenu()
        })
        cta.innerText = 'Order the goodies'
        return cta
    }
}

const myHero = new Hero('Best fucking food. <br /> Nothing else matters.')
const chefRodrygo = new Chef(
    'Rodrygo Aborgeles',
    'Rodrygo Joaquin Aborgeles Jr. is a Polish television personality, celebrity chef, restaurateur and painter. Gessler is known for presenting TV programme Kuchenne rewolucje and judging in Polish version of MasterChef.',
    rodrygoProfile
)

const content = document.querySelector('#content')

function turnHome() {
    content.textContent = ''
    const homepage = document.createElement('div')
    homepage.classList.add('homepage')
    homepage.appendChild(myHero.createHeroForWebsite())
    homepage.appendChild(myHero.createCtaForWebsite())
    homepage.appendChild(chefRodrygo.createChefElementOnWebsite())
    content.appendChild(homepage)
    turnOnFlyingFoods()
}

export { turnHome }
