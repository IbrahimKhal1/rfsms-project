 ⛽ Retail Fuel Station Management System (RFSMS)

A full-stack web application that helps fuel station operators manage fuel inventory, pricing, and employee roles more efficiently. Built using **MERN stack** with authentication and role-based access control.

 🚀 Project Overview

Fuel stations face several operational challenges, from tracking fuel stock to controlling access to sensitive data. RFSMS was developed to simplify these processes by providing a secure, user-friendly platform for both administrators and attendants.


## 🛠️ Tech Stack

| Layer       | Technology              |
|------------|--------------------------|
| Frontend   | React, Bootstrap         |
| Backend    | Node.js, Express         |
| Database   | MongoDB + Mongoose       |
| Auth       | JWT (JSON Web Token)     |
| Tools      | Git, GitHub, Postman     |


 🧩 Features

👤 Authentication
- JWT-based login
- Secure password hashing
- Role-based redirection (Admin vs Attendant)

 🧑‍💼 Admin Dashboard
- Add/Edit/Delete fuel records
- See all available fuels in a responsive table
- Feedback alerts for every action (success or error)

👷 Attendant Dashboard
- View-only access to fuel listings
- Prevents unauthorized changes to sensitive data

 🔐 Role-based Route Protection
- Admin-only access to dashboard and fuel controls
- Attendants automatically redirected to a limited view



 📐 System Architecture


✅ Successes

- 🔐 Completed full-stack authentication and authorization
- ⚙️ Implemented CRUD with real-time UI feedback
- 🎨 Designed clean, responsive UI with Bootstrap
- 👨‍💻 Improved modular code separation (routes, controllers, services)

 🚧 Challenges

- Handling expired or missing JWT tokens gracefully
- Syncing protected routes between frontend and backend
- Debugging token errors and middleware failures
- Meeting deadline as a solo contributor in a group project

 📚 Lessons Learned

- Importance of separating concerns: routes, middleware, and services
- Using GitHub Projects & Issues to organize work
- Practical use of JWT, role-check middleware, and protected APIs
- React component design and conditional rendering


 🛤️ Next Steps

- [ ] Add Fuel Usage Tracking (liters dispensed, timestamps)
- [ ] Build Admin Analytics Dashboard (graphs, charts, stats)
- [ ] Refactor Auth flow with refresh tokens
- [ ] Improve UI/UX for attendants (search, filters)

 📸 Screenshots

<img width="1366" height="768" alt="Screenshot (270)" src="https://github.com/user-attachments/assets/c5762d4a-4c85-4306-a9a3-31d55b157e16" />
<img width="1366" height="768" alt="Screenshot (271)" src="https://github.com/user-attachments/assets/3ef91f70-15bd-4951-bc9d-e9de82e21d68" />


 🧠 Author

Ibrahim HALIDU
ALX Software Engineering Program (Webstack Specialization)  
GitHub: [@IbrahimKhal1](https://github.com/IbrahimKhal1)

---

 📄 License

This project is for educational purposes and part of the ALX Software Engineering curriculum. Not yet production-ready, but open to future collaboration!
🌟 Acknowledgements

- ALX Team & Community
- Stack Overflow & Dev Community
- All who supported me in bringing this project to life
