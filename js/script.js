// Icons
feather.replace()

// DarkTheme
const darkModeButton = document.querySelectorAll('button');
darkModeButton[3].setAttribute('onclick', 'darkMode()');

const darkMode = () => {
    let container = document.getElementsByClassName('container')[0].setAttribute('class', 'container dark'),
        profile = document.getElementsByClassName('profile')[0].setAttribute('class', 'profile dark'),
        footer = document.getElementsByClassName('footer')[0].setAttribute('class', 'footer dark'),
        linkButton = document.querySelectorAll('button'),
        i = 0

    for (i; i < linkButton.length; i++) {
        linkButton[i].setAttribute('class', 'linkButton dark')
    }

    linkButton[3].setAttribute('onclick', 'lightMode()')
}

const lightMode = () => {
    let container = document.getElementsByClassName('container')[0].setAttribute('class', 'container'),
        profile = document.getElementsByClassName('profile')[0].setAttribute('class', 'profile'),
        footer = document.getElementsByClassName('footer')[0].setAttribute('class', 'footer'),
        linkButton = document.querySelectorAll('button'),
        i = 0

    for (i; i < linkButton.length; i++) {
        linkButton[i].setAttribute('class', 'linkButton')
    }
    
    linkButton[3].setAttribute('onclick', 'darkMode()')
}