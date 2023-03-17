const imageContext = require.context('./images', false, /\.(png|jpe?g|svg)$/)

function turnOnFlyingFoods(foods) {
    foods = imageContext.keys().map(imageContext)

    function getRandomFood() {
        const randomIndex = Math.floor(Math.random() * foods.length)
        return foods[randomIndex]
    }

    function createFoodImage(x, y) {
        const content = document.querySelector('#content')

        const img = document.createElement('img')
        img.src = getRandomFood()
        img.classList.add('food-image')
        img.style.left = `${x}px`
        img.style.top = `${y}px`
        content.appendChild(img)
        return img
    }

    function getRandomPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        const x = Math.floor(windowWidth * 0.01 + Math.random() * windowWidth * 0.99)
        const y = Math.floor(windowHeight * 0.01 + Math.random() * windowHeight * 0.5)

        return { x, y }
    }

    function moveImagesOnMouseMove(event) {
        const x = event.clientX
        const y = event.clientY

        image1.style.transform = `translate(${x * 0.01}px, ${y * 0.01}px)`
        image2.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`
        image3.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`
        image4.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`
        image5.style.transform = `translate(${x * 0.05}px, ${y * 0.06}px)`
    }

    const pos1 = getRandomPosition()
    const pos2 = getRandomPosition()
    const pos3 = getRandomPosition()
    const pos4 = getRandomPosition()
    const pos5 = getRandomPosition()

    const image1 = createFoodImage(pos1.x, pos1.y)
    const image2 = createFoodImage(pos2.x, pos2.y)
    const image3 = createFoodImage(pos3.x, pos3.y)
    const image4 = createFoodImage(pos4.x, pos4.y)
    const image5 = createFoodImage(pos5.x, pos5.y)

    document.addEventListener('mousemove', moveImagesOnMouseMove)
}

export { turnOnFlyingFoods }
