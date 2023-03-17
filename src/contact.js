const content = document.querySelector('#content')

export default function turnContact() {
    const content = document.querySelector('#content')
    content.textContent = ''
    const contactInfo = document.createElement('div')
    contactInfo.classList.add('contact-info')
    const address = document.createElement('div')
    address.classList.add('address')
    const h2 = document.createElement('h2')
    h2.textContent = 'Restaurant Name: Foodey Gate'
    const div = document.createElement('div')
    div.innerHTML =
        '<h3 class="contactH3">Address: 1234 Fictitious Lane, Imaginary City, Wonderland, 56789</h3><p>Phone: (555) 123-4567</p><p>Email: info@foodey.com</p><h3 class="contactH3">Opening Hours:</h3><p>Monday - Friday: 11:00 AM - 11:00 PM</p><p>Saturday: 9:00 AM - 11:00 PM</p> <h3 class="contactH3">Social Media:</h3><p>Facebook: www.facebook.com/foodey</p><p>Instagram: @foodey</p><p>Twitter: @foodey</p>'
    address.appendChild(h2)
    address.appendChild(div)
    contactInfo.appendChild(address)

    const iFrame = document.createElement('iframe')
    iFrame.setAttribute(
        'src',
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.3988087931543!2d-16.91475164875452!3d32.648829897723374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc605f019404b28b%3A0x9b239f1a9d06b308!2sIndia%20Gate!5e0!3m2!1sen!2spl!4v1679087440542!5m2!1sen!2spl'
    )
    iFrame.setAttribute('width', 600)
    iFrame.setAttribute('height', 450)
    iFrame.setAttribute('style', 'border: 0')
    iFrame.setAttribute('allowfullscreen', '')
    // iFrame.setAttribute('loading', 'lazy')
    iFrame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')

    contactInfo.appendChild(iFrame)
    content.appendChild(contactInfo)
}
