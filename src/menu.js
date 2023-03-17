export default class Food {
    constructor(image, name, desc, price) {
        this.image = image
        this.name = name
        this.desc = desc
        this.price = price
    }

    createMenuFoodItem() {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menuItem')

        const menuItemImg = document.createElement('div')
        menuItemImg.classList.add('menuItem-img')

        const menuItemImgTag = document.createElement('img')
        menuItemImgTag.setAttribute('src', this.image)
        menuItemImgTag.classList.add('food-img')

        menuItemImg.appendChild(menuItemImgTag)

        const menuItemDesc = document.createElement('div')
        menuItemDesc.classList.add('menuItem-desc')

        const menuItemName = document.createElement('h3')
        menuItemName.classList.add('menuItem-name')
        menuItemName.textContent = this.name

        const menuItemDescP = document.createElement('p')
        menuItemDescP.classList.add('menuItem-descP')
        menuItemDescP.textContent = this.desc

        menuItemDesc.appendChild(menuItemName)
        menuItemDesc.appendChild(menuItemDescP)

        const menuItemPrice = document.createElement('div')
        menuItemPrice.classList.add('menuItem-price')
        menuItemPrice.textContent = this.price

        menuItem.appendChild(menuItemImg)
        menuItem.appendChild(menuItemDesc)
        menuItem.appendChild(menuItemPrice)
        return menuItem
    }
}

function createMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    return menu
}

export { createMenu }
