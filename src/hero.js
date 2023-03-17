class Hero {
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
        cta.innerText = 'Order the goodies'
        return cta
    }
}

const myHero = new Hero('Best fucking food. <br /> Nothing else matters.')

const content = document.querySelector('#content')

content.appendChild(myHero.createHeroForWebsite())
content.appendChild(myHero.createCtaForWebsite())
