const log = document.getElementById("log")
const submit = document.getElementById("submit")

const userAccounts = [
    {
        username: "admin",
        password: "password",
        name: "Renz Pajarito"
    },
    {
        username: "zerncodes",
        password: "passcode",
        name: "Zern Codes"
    }
]

function submitForm(event) {
    event.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    let loginSuccessful = false
    let userName = ""

    for (let i = 0; i < userAccounts.length; i++) {
        if (userAccounts[i].username === username && userAccounts[i].password === password) {
            loginSuccessful = true
            userName = userAccounts[i].name
        } else if (username === "" && password === "") {
            log.innerText = "Please fill out the form!"
        } else if (username === "" && password) {
            log.innerText = "Username or Email is Required!"
        } else if (username && password === "") {
            log.innerText = "Wrong or Missing Password!"
        } else {
            log.innerText = "Username or Password is Incorrect!"
        }
    }

    if (loginSuccessful) {
        document.getElementById("form-container").style.display = "none"

        // localStorage.setItem("username", username)
        localStorage.setItem("name", userName)

        setInterval(function () {
            window.location.href = `home.html`
        }, 1500)
    }
}
