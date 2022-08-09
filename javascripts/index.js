const baseUrl = "http://universities.hipolabs.com/search";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        console.log(e)
        e.preventDefault()

        const inputValue = document.getElementById('country')

        getUniversity(inputValue.value)
        form.reset()

        const univLists = document.getElementById('show-lists')
        univLists.innerHTML = ""

        const btn = document.getElementById('home')
        btn.addEventListener('click', resetBtn)
    })
})


const getUniversity = (country) => {
    const univInfo = document.getElementById('info')

    const univLists = document.getElementById('show-lists')
    console.log(country)
    univInfo.innerHTML = ''
    univLists.innerHTML = ''
    fetch(baseUrl + `?country=${country}`)
    .then(res => res.json())

    // getUniversities()
    .then(data => {
        console.log(data)

        data.forEach(lists => {
            univLists.innerHTML += `<li><a id="divList" href="#" data-name="${lists.name}">${lists.name}</a></li>`
            // univLists.className = 'divList'
        })
        clickToLink()
        hoverToLink()
    })
}

const clickToLink = () => {
    const lists = document.querySelectorAll('a')
    lists.forEach((list) => {
        list.addEventListener('click', displayInfo)
    })
}

const displayInfo = (event) => {
    console.log(event.target.dataset.name)
    const univInfo = document.getElementById('info')
    const univLists = document.getElementById('show-lists')
    univLists.innerHTML = ""

    fetch(baseUrl + `?name=${event.target.dataset.name}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        univInfo.innerHTML = `<h1>${data[0].country}</h1>
        <br/>
        <h3>University's Name:</h3>
        <p>${data[0].name}</p>
        <h4>Alpha Two Code:</h4>
        <p>${data[0].alpha_two_code}</p>
        <h4>Domains:</h4>
        <p>${data[0].domains}</p>
        <h4>Web Pages:</h4>
        <p>${data[0].web_pages}</p>
        <br/>`
    })
}

const hoverToLink = () => {

    const univLists = document.getElementById('show-lists')
    univLists.addEventListener("mouseover", (event) => {
        // console.log('hovered')
        // highlight the mouseover target
        event.target.style.color = "orange";
      
        // reset the color after a short delay
        setTimeout(() => {
          event.target.style.color = "";
        }, 200);
      }, false);
}

const resetBtn = () => {
    this.location.reload()
}

// async function getUniversities() {
//     let res = await fetch(baseUrl + `?country=${country}`)
//     let data = await res.json()
//     return data
// }