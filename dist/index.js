const icons = document.querySelectorAll('.icons')
const temp = document.querySelectorAll('.temp')

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
