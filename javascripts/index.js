const baseUrl = "http://universities.hipolabs.com/search";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        console.log(e)
        e.preventDefault()

        const inputValue = document.getElementById('country')

        getUniversity(inputValue.value)
        form.reset()
    })
})


const getUniversity = (country) => {
    const univInfo = document.getElementById('info')

    const univLists = document.getElementById('show-lists')
    console.log(country)
    univInfo.innerHTML = ''
    fetch(baseUrl + `?country=${country}`)
    .then(res => res.json())

    // getUniversities()
    .then(data => {
        console.log(data)

        data.forEach(lists => {
            univLists.innerHTML += `<li><a id="divList" href="#" data-name="${lists.name}">${lists.name}</a></li>`
            // univLists.className = 'divList'
        })
        
    })
}