if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html"
}

function handleLogout(event) {
    event.preventDefault()
    alert("Logout Successfully")
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("userName")
    window.location.href = "login.html"
}

(async function fetchEmployees() {
    try {
        const response = await fetch("http://localhost:8080/admin/fetchEmployees")
        const employees = await response.json()

        const container = document.getElementById("employeeDetails")
        container.innerHTML = ""

        employees.forEach(emp => {
            const empDiv = document.createElement("div")
            empDiv.classList.add("employee-card")

            empDiv.innerHTML = `
                <p><strong class="lable">ID</strong> <span class="value" id="id-${emp.id}">${emp.id}</span></p>
                <p><strong class="lable">Name</strong> <span class="value" id="name-${emp.id}">${emp.name}</span></p>
                <p><strong class="lable">Password</strong> <span class="value" id="password-${emp.id}">${emp.password}</span></p>
                <p><strong class="lable">Email</strong> <span class="value" id="email-${emp.id}">${emp.email}</span></p>
                <p><strong class="lable">Phone</strong> <span class="value" id="phone-${emp.id}">${emp.phone}</span></p>
                <p><strong class="lable">Status</strong> <span class="value" id="status-${emp.id}">${emp.status}</span></p>
                <p><strong class="lable">Job</strong> <span class="value" id="job-${emp.id}">${emp.job}</span></p>
                <p><strong class="lable">Salary</strong> <span class="value" id="salary-${emp.id}">${emp.salary}</span></p>

                <div class="btns">
                <button class="btn" onclick="editEmployee(${emp.id})">Edit</button>
                <button class="btn"  class="value"onclick="deleteEmployee(${emp.id})">Delete</button>
                </div>
            `

            container.append(empDiv)
        })
    } catch (error) {
        console.error("Fetch Error:", error)
    }
})();


// Delete employee
async function deleteEmployee(id) {
    try {
        const response = await fetch(`http://localhost:8080/admin/deleteEmployee/${id}`, {
            method: "DELETE",
        });

        const result = await response.text()

        alert(`Employee ${id} deleted successfully`)
        location.reload()
    } catch (error) {
        console.error("Delete Error:", error)
    }
}

// Edit employee
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
        <p><strong class="lable">Name</strong><input class="ip" id="edit-name-${id}" value="${name}" placeholder="Name" /></p>
        <p><strong class="lable">Password</strong><input class="ip" id="edit-password-${id}" value="${password}" placeholder="Password" /></p>
        <p><strong class="lable">Email</strong><input class="ip" id="edit-email-${id}" value="${email}" placeholder="Email" /></p>
        <p><strong class="lable">Phone</strong><input class="ip" id="edit-phone-${id}" value="${phone}" placeholder="Phone" /></p>    
        <p><strong class="lable">Status</strong><input class="ip" id="edit-status-${id}" value="${status}" placeholder="Status" /></p>
        <p><strong class="lable">Job</strong><input class="ip" id="edit-job-${id}" value="${job}" placeholder="Job" /></p>
        <p><strong class="lable">Salary</strong><input class="ip" id="edit-salary-${id}" value="${salary}" placeholder="Salary" /></p>
        <div class="btns">
        <button class="btn" onclick="saveEmployee(${id})">Save</button>
        <button class="btn" onclick="location.reload()">Cancel</button>
        </div>
        `
}

// Save updated employee
async function saveEmployee(id) {
    const name = document.getElementById(`edit-name-${id}`).value
    const password = document.getElementById(`edit-password-${id}`).value
    const email = document.getElementById(`edit-email-${id}`).value
    const phone = Number (document.getElementById(`edit-phone-${id}`).value)
    const status = document.getElementById(`edit-status-${id}`).value
    const job = document.getElementById(`edit-job-${id}`).value
    const salary = document.getElementById(`edit-salary-${id}`).value

    const updatedData = {
        name,
        password,
        email,
        phone,
        status,
        job,
        salary
    }

    try {
        const response = await fetch(`http://localhost:8080/admin/updateEmployee/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })

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
