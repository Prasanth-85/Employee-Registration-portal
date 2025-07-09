async function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    try {
        const signupRequest = await fetch("http://localhost:8080/admin/adminSignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password})
        });

        const signupResponse = await signupRequest.json();

        console.log(signupResponse);

        if (signupResponse) {
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userName", name);
            window.location.href = "adminHome.html";
        } else {
            alert("Signup Failed");
        }
    } catch (error) {
        console.error("Signup Error:", error);
    }
}
