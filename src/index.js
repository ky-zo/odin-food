import './styles.css'
import './header.js'
import Hero, { turnHome } from './hero.js'
import Food, { createMenu } from './menu.js'
import EggplantImg from './images/Eggplant.png'
import foodList from './foodList.csv'

if (module.hot) {
    module.hot.accept()
}

// turnHome()

const eggplant = new Food(EggplantImg, 'Dickfruit', 'Really fruity, squishy, wet fruit. Try to swallow it at once.', '69 PLN')

content.appendChild(createMenu())

const menu = document.querySelector('.menu')

menu.appendChild(eggplant.createMenuFoodItem())

foodList.forEach((element) => {
    const food = new Food(`/images/${element[0]}`, element[1], element[2], element[3])
    menu.appendChild(food.createMenuFoodItem())
})

console.log(foodList)
