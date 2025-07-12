async function handleLogin(event) {
    event.preventDefault()

    const name = document.getElementById("UserName").value
    const password = document.getElementById("Password").value

    try {
        const response = await fetch("http://localhost:8080/admin/adminLogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password })
        });

        const result = await response.json();
        // console.log(result)

        if (result != null) {
            alert("Login successful!");
            localStorage.setItem("loggedIn","true")
            localStorage.setItem("userName",name)
            window.location.href = "adminHome.html"
        } else {
            alert("Invalid credentials.")
        }
    } catch (error) {
        console.error("Login failed:", error)
        alert("Something went wrong!")
    }
}
