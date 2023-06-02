const icons = document.querySelectorAll('.icons')
const navTextItems = document.querySelectorAll('.nav-text-item')
const footTextItems = document.querySelectorAll('.foot-text-item')
const arrowTextItems = document.querySelectorAll('.arrow-text')
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
        arrowTextItems.forEach(arrowText => {
            if (`text-${icon.id}` === arrowText.id)
                arrowText.style.visibility = 'visible'
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
        arrowTextItems.forEach(arrowText => {
            if (`text-${icon.id}` === arrowText.id)
                arrowText.style.visibility = 'hidden'
        })
    })
})

footerButtons.forEach(button =>
    button.addEventListener('click', () =>
        button.id === 'sun-button' ? toggleTemp('light') : toggleTemp('dark'),
    ),
)

window.onload = () => {
    if (!localStorage['data-theme'])
        window.matchMedia('(prefers-color-scheme: light)').matches
            ? toggleTemp('light')
            : toggleTemp('dark')
    else
        localStorage['data-theme'] === 'light'
            ? toggleTemp('light')
            : toggleTemp('dark')
}

const toggleTemp = theme => {
    icons.forEach(icon => icon.setAttribute('data-theme', `${theme}`))
    document.documentElement.setAttribute('data-theme', `${theme}`)
    localStorage.setItem('data-theme', `${theme}`)
}

// Dark Reader Adjustments, logic taken from:
// https://github.com/darkreader/darkreader/issues/4342
new MutationObserver(() => {
    const isDarkReaderEnabled =
        'querySelector' in document &&
        !!document.querySelector('meta[name=darkreader]')
    isDarkReaderEnabled ? toggleTemp('dark') : toggleTemp('light')
}).observe(document.querySelector('head'), { childList: true })
