// Registro de usuarios
const userSignName = document.getElementById('signname');
const userSignEmail = document.getElementById('signemail');
const userSignPassword = document.getElementById('signpass');
const buttonSubmit = document.getElementById('deditos');

buttonSubmit.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = userSignName.value.trim();
  const email = userSignEmail.value.trim();
  const pass = userSignPassword.value.trim();

  if (!name || !email || !pass) {
    alert("Todos los campos son obligatorios");
    return;
  }

  try {
    const res = await fetch(`http://localhost:4000/users?email=${email}`);
    const existingUsers = await res.json();

    if (existingUsers.length > 0) {
      alert("El email ya está registrado");
      return;
    }

    const newUser = { name, email, password: pass };

    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    if (response.ok) {
      alert("Te has registrado correctamente");
      userSignName.value = "";
      userSignEmail.value = "";
      userSignPassword.value = "";
    } else {
      alert("Error al registrar usuario");
    }
  } catch (error) {
    console.error("Error en el registro:", error);
    alert("No se pudo conectar con el servidor");
  }
});
