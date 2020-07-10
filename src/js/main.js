function listeners () {
    const backdrop = document.getElementById('backdrop');
    const nav = document.getElementById('nav')
    const burguer = document.getElementById('burguer')
    const navigate = document.querySelectorAll('a.navigate')

    let navShow = false

    // retrair nav
    backdrop.addEventListener("click", () => {
        backdrop.style.display = 'none'
        nav.classList.remove('expand')
        navShow = !navShow
        navigate.forEach(element => element.style.visibility = 'hidden')
        document.getElementById("checkbox").checked = false;
    });

    // expandir nav
    burguer.addEventListener('click', () => {
        if (!navShow) {
            nav.classList.add('expand')
            backdrop.style.display = 'block'
            navigate.forEach(element => element.style.visibility = 'visible')
        } else {
            navigate.forEach(element => element.style.visibility = 'hidden')
            nav.classList.remove('expand')
            backdrop.style.display = 'none'
        }
        navShow = !navShow
    })

}

listeners()