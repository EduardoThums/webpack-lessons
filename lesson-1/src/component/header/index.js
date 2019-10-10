import './style.scss'

export function HeaderComponent() {
    const div = document.createElement('div')
    div.classList.add('header')

    const p = document.createElement('p')

    p.innerHTML = 'Hello world'

    div.appendChild(p)

    return div
}