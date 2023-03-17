document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animated')

    function onScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (elementTop <= windowHeight - 100) {
                element.classList.add('visible')
            } else {
                element.classList.remove('visible')
            }
        })
    }

    window.addEventListener('scroll', onScroll)
    onScroll() // Call once to initialize elements' visibility
})
