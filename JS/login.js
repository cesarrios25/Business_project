const userLog = document.getElementById('logemail');
const userLogPass = document.getElementById('logpass');
const loginButton = document.querySelector(".deditos"); 

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = userLog.value.trim();
  const pass = userLogPass.value.trim();

  if (!email || !pass) {
    alert("Debes ingresar email y contraseña");
    return;
  }

  try {
    const res = await fetch(`http://localhost:4000/users?email=${email}&password=${pass}`);
    const users = await res.json();

    if (users.length > 0) {
      alert("Login exitoso");
      localStorage.setItem("currentUser", JSON.stringify(users[0]));
      window.location.href = "../Pages/landingPage.html"; 
    } else {
      alert("Credenciales inválidas");
    }
  } catch (error) {
    console.error("Error en el login:", error);
    alert("No se pudo conectar con el servidor");
  }
});
