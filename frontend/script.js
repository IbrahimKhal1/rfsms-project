const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      message.style.color = "green";
      message.textContent = "Login successful!";
      localStorage.setItem("token", data.token); // store token
    } else {
      message.textContent = data.error || "Login failed.";
    }
  } catch (err) {
    message.textContent = "Error connecting to server.";
  }
});
