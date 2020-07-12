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

async function incrementNumbers () {
    function sleep (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const totalSales = document.getElementById('totalSales')
    const totalIncome = document.getElementById('totalIncome')
    const totalViews = document.getElementById('totalViews')

    const qtdSales = parseInt(totalSales.textContent, 10)
    const qtdIncome = parseInt(totalIncome.textContent, 10)
    const qtdViews = parseInt(totalViews.textContent, 10)

    let currentSales = 0;
    let currentIncome = 0;
    let currentViews = 0;

    for (let i = 0; i < 1000; i++) {
        // CURRENT SALES
        if (currentSales + 150 <= qtdSales) {
            currentSales = currentSales + 150
        } else if (currentSales + 1 <= qtdSales) {
            currentSales++
        }
        totalSales.innerHTML = `${currentSales.toLocaleString('en-US')}`

        // TOTAL INCOME
        if (currentIncome + 1000 <= qtdIncome) {
            currentIncome = currentIncome + 1000
        } else if (currentIncome + 50 <= qtdIncome) {
            currentIncome += 50
        } else if (currentIncome + 1 <= qtdIncome) {
            currentIncome++
        }
        totalIncome.innerHTML = `${currentIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`

        // TOTAL VIEWS
        if (currentViews + 5000 <= qtdViews) {
            currentViews = currentViews + 5000
        } else if (currentViews + 50 <= qtdViews) {
            currentViews += 50
        } else if (currentViews + 1 <= qtdViews) {
            currentViews++
        }
        totalViews.innerHTML = `${currentViews.toLocaleString('en-US')}`

        // if everyone reaches the limit
        if ((currentSales >= qtdSales) && (currentIncome >= qtdIncome) && (currentViews >= qtdViews))
            break

        await sleep(0.001)
    }
}

incrementNumbers()


// A função debounce não permitirá que um callback seja usado mais de uma vez por um determinado período de tempo.
function debounce (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let scroolWindowPosition = 0;
function showNav () {
    const nav = document.getElementById('nav')
    const currentScrollPosition = window.scrollY

    window.scrollY > scroolWindowPosition ?
        nav.style.transform = 'translateX(-100%)' : nav.style.transform = 'translateX(0px)'
    scroolWindowPosition = currentScrollPosition
}

if (window.innerWidth < 420) {
    window.addEventListener('scroll', debounce(() => {
        showNav()
    }, 50))
}