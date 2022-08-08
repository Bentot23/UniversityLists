const baseUrl = "http://universities.hipolabs.com/search";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        console.log(e)
        e.preventDefault()
    })
})