import rodrygoProfile from './images/Chef.png'

export default class Chef {
    constructor(name, bio, image) {
        this.name = name
        this.bio = bio
        this.image = image
    }

    createChefElementOnWebsite() {
        const chef = document.createElement('div')
        chef.classList.add('chef-section')

        const chefImage = document.createElement('img')
        const chefDesc = document.createElement('div')
        const chefName = document.createElement('h2')
        const chefBio = document.createElement('div')

        chefImage.setAttribute('src', this.image)
        chefImage.classList.add('chef-image')
        chefDesc.classList.add('chef-desc')

        chefName.textContent = this.name
        chefBio.textContent = this.bio

        chefDesc.appendChild(chefName)
        chefDesc.appendChild(chefBio)
        chef.appendChild(chefImage)
        chef.appendChild(chefDesc)

        return chef
    }
}
