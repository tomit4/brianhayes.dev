const icons = document.querySelectorAll('.icons')
const temp = document.querySelectorAll('.temp')
const navTextItems = document.querySelectorAll('.nav-text-item')
const footTextItems = document.querySelectorAll('.foot-text-item')
const footerButtons = document.querySelectorAll('.footer-button')

// TODO: consider a more eloquent approach, no double for loops...
// create an array of just the ids of each array and then compare them, 
// use one for loop to compare and log the index to do this(?)
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        navTextItems.forEach(navText => {
            if (`text-${icon.id}` === navText.id)
                navText.style.visibility = 'visible'
        })
        footTextItems.forEach(footText => {
            if (`text-${icon.id}` === footText.id)
                footText.style.visibility = 'visible'
        })

    })
    icon.addEventListener('mouseleave', () => {
        navTextItems.forEach(navText => {
            if (`text-${icon.id}` === navText.id)
                navText.style.visibility = 'hidden'
        })
        footTextItems.forEach(footText => {
            if (`text-${icon.id}` === footText.id)
                 footText.style.visibility = 'hidden'
        })
    })
})

footerButtons.forEach(button => {
    if (button.id === 'sun-button')
        button.addEventListener('click', () =>
            toggleTemp('light'))
    else if (button.id === 'moon-button')
        button.addEventListener('click', () =>
            toggleTemp('dark'))
})

window.onload = () => {
    if (!localStorage['data-theme'])
        window.matchMedia('(prefers-color-scheme: light)').matches ?
            toggleTemp('light') :
            toggleTemp('dark')
    else
        localStorage['data-theme'] === 'light' ?
            toggleTemp('light') :
            toggleTemp('dark')
}

const toggleTemp = (theme) => {
    icons.forEach(icon => icon.setAttribute('data-theme', `${theme}`))
    document.documentElement.setAttribute('data-theme', `${theme}`)
    localStorage.setItem('data-theme', `${theme}`)
}

temp.forEach(t => t.addEventListener('click', () => 
    t.id === 'sun' ? toggleTemp('light') : toggleTemp('dark')))
