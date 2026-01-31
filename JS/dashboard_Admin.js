const usuarios = [
    { id: "1", name: "juan", email: "user@mail.com", password: "123", location: "medellin" },
    { id: "2", name: "juan", email: "user@mail.com", password: "123", location: "medellin" },
    { id: "3", name: "juan", email: "user@mail.com", password: "123", location: "medellin" },
    { id: "4", name: "juan", email: "user@mail.com", password: "123", location: "medellin" }
  ]

const contaenedor = document.getElementById('info-user');
contaenedor.innerHTML = ""

usuarios.forEach(user => {
    const hijoContenedor = document.createElement('div')
hijoContenedor.classList.add('card')

hijoContenedor.innerHTML += `
    <div class="content-card">
        <div class="vacante-card">
            <h5>TITULO PRUEBA</h5>
            <p class="empresa">${user.name}</p>
            <div class="info">
                <span>${user.email}</span>
                <span>${user.location}</span></div>
            <button class="btn btn-primary btn-sm mt-3 " onclick="showDescription('')">
                Descripcion</button>
        </div>
    </div>
`;
contaenedor.appendChild(hijoContenedor)

    
});


// Get



