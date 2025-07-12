async function handleSignup(event) {
    event.preventDefault()
    
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value
    const phone = Number(document.getElementById("phone").value)

    try {
        const signupRequest = await fetch("http://localhost:8080/employee/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password, email, phone })
        })

        const signupResponse = await signupRequest.json()

        console.log(signupResponse)

        if (signupResponse) {
            localStorage.setItem("loggedIn", "true")
            localStorage.setItem("userName", name)
            window.location.href = "employeeHome.html"
        } else {
            alert("Signup Failed")
        }
    } catch (error) {
        console.error("Signup Error:", error)
    }
}
