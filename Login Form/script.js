
const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value === '' || username.value == null){
        messages.push('Name is required')
    }
    if (username.value.length <4) {
        messages.push(`<div color='red'>Username must be larger than 4 charachters</div>`)
    }
    if (password.value.length <= 7) {
        messages.push('Password must be longer than 7 charachters')
    }
    if(messages.length > 0) {    
    e.preventDefault()
    errorElement.innerHTML = messages.join(', ')
    }
})
