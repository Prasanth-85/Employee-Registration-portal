
# 🧑‍💼 Employee Registration Portal

A full-stack Employee Registration Portal built with **Spring Boot**, **MySQL**, **HTML/CSS/JavaScript**, providing role-based access for Admin and Employees.

---

## 🔧 Tech Stack

### Backend
- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- MySQL

### Frontend
- HTML5, CSS3, JavaScript
- Responsive UI using custom styles

---

## 🔐 Features

### 👨‍💼 Admin Module
- Admin login/signup
- Register and manage employee records
- View, edit, delete employees
- Role-based access control

### 👷 Employee Module
- Employee login/signup
- View personal profile
- Update limited details
- Secure session handling

---

## 🗃️ Database Design (MySQL)

| Table         | Columns                             |
|---------------|--------------------------------------|
| `users`       | `id`, `name`, `email`, `password`, `role` |
| `employees`   | `emp_id`, `name`, `department`, `dob`, `email`, `phone`, etc. |

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Maven
- MySQL Server
- Git

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/employee-registration-portal.git
cd employee-registration-portal
```

### 2. Configure MySQL
Create a MySQL database:
```sql
CREATE DATABASE employee_portal;
```

Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_portal
spring.datasource.username=your-username
spring.datasource.password=your-password
```

### 3. Run the App
```bash
./mvnw spring-boot:run
```

Visit: `http://localhost:8080`

---

## 📂 Project Structure

```
Employee_Registration_Portal/
│
├── Back-end/
│   └── src/main/java/
│       ├── controller/
│       ├── model/
│       ├── repository/
│       ├── service/
│       └── EmployeeRegistrationApplication.java
│
├── Front-end/
│   ├── AdminModule/
│   ├── EmployeeModule/
│   └── Portal/
│       ├── index.html
│       ├── script.js
│       └── style.css
```

---

## 📸 Screenshots

### 🔰 Portal Selection Screen
Users can choose whether to log in as an Admin or Employee from this landing screen.

<img width="1366" height="686" alt="portal-selection" src="https://github.com/user-attachments/assets/1d569c67-b0df-4d47-975d-66033d8066bb" />

### 🔐 Admin Login Page
Secure login page for administrators to access and manage employee records.

<img width="1366" height="684" alt="admin-login" src="https://github.com/user-attachments/assets/46375f11-ae35-41bb-aa41-2c9db8947d29" />

### 📝 Admin Signup Page
Page where a new admin can create an account to access the portal.

<img width="1366" height="686" alt="admin-signup" src="https://github.com/user-attachments/assets/21f0189f-e38d-484e-8435-3354f0c066a6" />

### 📋 Admin Dashboard – Employee List
After logging in, the admin is presented with a dashboard displaying a list of all registered employees with options to view, edit, or delete records.

<img width="1366" height="684" alt="admin-dashboard" src="https://github.com/user-attachments/assets/d20ef47f-7453-4e99-a732-d9c522ab913c" />

### 👷 Employee Login Page
Login interface for employees to securely access their personal profiles and related information.

<img width="1366" height="686" alt="employee-login" src="https://github.com/user-attachments/assets/b59539e8-f553-4f74-b56a-54730d5cd8e1" />

### 📝 Employee Signup Page
Employees can create a new account by filling in their personal and professional details.

<img width="1366" height="688" alt="employee-signup" src="https://github.com/user-attachments/assets/ed142698-df3d-4f88-88af-78ec0917eda1" />

### 🏠 Employee Home Page
Once logged in, employees are taken to their home page displaying their profile information and other relevant details.

<img width="1366" height="684" alt="employee-home" src="https://github.com/user-attachments/assets/1f9b0887-7171-414c-af72-50917293f4a5" />

---

## 🧪 Future Enhancements
- Password encryption using BCrypt
- JWT authentication
- Email verification
- Pagination and search filters
- Export employee list to Excel

---

## 🧑‍💻 Author

**Prasanth M**  
📧 prasanthtito@gmail.com  
📌 [LinkedIn](https://www.linkedin.com/in/prasanth85)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
