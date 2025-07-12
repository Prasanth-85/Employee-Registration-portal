if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html"
}
const Uname=localStorage.getItem("userName")


function handleLogout(event)
{
    event.preventDefault()
    alert("Logout Sucessfully")
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("userName")
    window.location.href="login.html"
}

(async function getDetails(event) {
    

    try {
        
        const request = await fetch(`http://localhost:8080/employee/fetchByName/${Uname}`,{
            method:"GET",
        })

        const result = await request.json()

        const container = document.getElementById("employeeDetails")
        container.innerHTML = ""

        const empDiv = document.createElement("div")
        empDiv.classList.add("employee-card")

        empDiv.innerHTML = `
                <p><strong class="lable">ID</strong> <span class ="value" id="id-${result.id}">${result.id}</span></p>
                <p><strong class="lable">Name</strong> <span class ="value" id="name-${result.id}">${result.name}</span></p>
                <p><strong class="lable">Password</strong> <span class ="value" id="password-${result.id}">${result.password}</span></p>
                <p><strong class="lable">Email</strong> <span class ="value" id="email-${result.id}">${result.email}</span></p>
                <p><strong class="lable">Phone</strong> <span class ="value" id="phone-${result.id}">${result.phone}</span></p>
                <p><strong class="lable">Status</strong> <span class ="value" id="status-${result.id}">${result.status}</span></p>
                <p><strong class="lable">Job</strong> <span class ="value" id="job-${result.id}">${result.job}</span></p>
                <p><strong class="lable">Salary</strong> <span class ="value" id="salary-${result.id}">${result.salary}</span></p>
                <div class="btns">
                <button class="btn" onclick="editEmployee(${result.id})">Edit</button>
                <div>
                `

            container.appendChild(empDiv)



    } catch (error) {
         console.error("Fetch Error:", error)
    }
    
})();

function editEmployee(id) {
    const name = document.getElementById(`name-${id}`).textContent
    const password = document.getElementById(`password-${id}`).textContent
    const email = document.getElementById(`email-${id}`).textContent
    const phone = document.getElementById(`phone-${id}`).textContent
    const status = document.getElementById(`status-${id}`).textContent
    const job = document.getElementById(`job-${id}`).textContent
    const salary = document.getElementById(`salary-${id}`).textContent

    const container = document.getElementById(`id-${id}`).parentElement.parentElement

    container.innerHTML = `
        <p><strong class="lable" >ID</strong><span class="value"> ${id}</span></p>
        <p><strong class="lable" >Name</strong> <input class="ip" id="edit-name-${id}" value="${name}" placeholder="Name" /></p>
        <p><strong class="lable" >Password</strong> <input class="ip" id="edit-password-${id}" value="${password}" placeholder="Password" /></p>
        <p><strong class="lable" >Email</strong> <input class="ip" id="edit-email-${id}" value="${email}" placeholder="Email" /></p>
        <p><strong class="lable" >Phone</strong> <input class="ip" id="edit-phone-${id}" value="${phone}" placeholder="Phone" /></p>
        <p><strong class="lable" >Status</strong><span class="value">${status}</span></p>    
        <p><strong class="lable" >Job</strong><span class="value">${job}</span></p>    
        <p><strong class="lable" >Salary</strong><span class="value">${salary}</span></p>    

        <div class="btns">
        <button class="btn" onclick="saveEmployee(${id})">Save</button>
        <button class="btn" onclick="location.reload()">Cancel</button>
        <div>
        `
}

// Save updated employee
async function saveEmployee(id) {
    const name = document.getElementById(`edit-name-${id}`).value
    const password = document.getElementById(`edit-password-${id}`).value
    const email = document.getElementById(`edit-email-${id}`).value
    const phone = document.getElementById(`edit-phone-${id}`).value

    const updatedData = {
        name,
        password,
        email,
        phone,
    }

    try {
        const response = await fetch(`http://localhost:8080/employee/updateEmployee/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        const updated = await response.json()
        console.log(updated)
        if (updated) {
            alert("Employee updated successfully")
            location.reload()
        } else {
            alert("Update failed")
        }
    } catch (error) {
        console.error("Update Error:", error)
    }
}
