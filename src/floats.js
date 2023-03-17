import burger from './images/Burger.png'
import burrito from './images/Buritto.png'
import cake from './images/Cake.png'
import cookies from './images/Cookies.png'
import donut from './images/Donut.png'

const foods = [burger, burrito, cake, cookies, donut]

console.log(foods)

function getRandomFood() {
    const randomIndex = Math.floor(Math.random() * foods.length)
    return foods[randomIndex]
}

function createFoodImage(x, y) {
    const img = document.createElement('img')
    img.src = getRandomFood()
    img.classList.add('food-image')
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    document.body.appendChild(img)
    return img
}

function getRandomPosition() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const x = Math.floor(windowWidth * 0.25 + Math.random() * windowWidth * 0.5)
    const y = Math.floor(windowHeight * 0.1 + Math.random() * windowHeight * 0.5)

    return { x, y }
}

function moveImagesOnMouseMove(event) {
    const x = event.clientX
    const y = event.clientY

    image1.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`
    image2.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
    image3.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
}

const pos1 = getRandomPosition()
const pos2 = getRandomPosition()
const pos3 = getRandomPosition()

const image1 = createFoodImage(pos1.x, pos1.y)
const image2 = createFoodImage(pos2.x, pos2.y)
const image3 = createFoodImage(pos3.x, pos3.y)

document.addEventListener('mousemove', moveImagesOnMouseMove)
