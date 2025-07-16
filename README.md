
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

![Portal Selection](https://github.com/user-attachments/assets/303c7783-a877-4176-9b81-263ebd2301e9)
<img width="1366" height="686" alt="portal-selection" src="https://github.com/user-attachments/assets/e4898308-0bf0-4996-8432-1a411a8945f7" />

### 🔐 Admin Login Page
Secure login page for administrators to access and manage employee records.

![Admin Login](https://github.com/user-attachments/assets/61ccb88d-1e7a-444f-b6a9-2ffa7f382177)

### 📝 Admin Signup Page
Page where a new admin can create an account to access the portal.

![Admin Signup](https://github.com/user-attachments/assets/91fd9eb3-8475-404e-835c-a4627e7231a9)

### 📋 Admin Dashboard – Employee List
After logging in, the admin is presented with a dashboard displaying a list of all registered employees with options to view, edit, or delete records.

![Admin Dashboard](https://github.com/user-attachments/assets/895da612-8fdd-4d4f-94a6-6e5ce3bfa3f9)

### 👷 Employee Login Page
Login interface for employees to securely access their personal profiles and related information.

![Employee Login](https://github.com/user-attachments/assets/1d84ba45-a437-4f26-932e-f93ddc6854a9)

### 📝 Employee Signup Page
Employees can create a new account by filling in their personal and professional details.

![Employee Signup](https://github.com/user-attachments/assets/b956e132-3cc0-4da2-9307-d2a2d49a32e6)

### 🏠 Employee Home Page
Once logged in, employees are taken to their home page displaying their profile information and other relevant details.

![Employee Home](https://github.com/user-attachments/assets/294f78c1-6014-494f-84a7-6e4d0eb41af9)

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
