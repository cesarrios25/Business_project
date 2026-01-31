import * as Api from "./api.js" 
// import {sendData, getData  } from "./api.js";

let vacanteSeleccionada = null;

async function loadVacancies() {



    const vacancies = await Api.getData("vacants")

    let containerCard = document.querySelector(".vacancies");
    containerCard.innerHTML= "";
    vacancies.forEach(v => {

        containerCard.innerHTML += 
        `   <div class="content-card">
                    <div class="vacante-card">
                        <h5>${v.vacantName}</h5>
                        <p class="empresa">${v.company}</p>
                        <div class="info">
                            <span>${v.vacantSalary}</span>
                            <span>${v.location}</span></div>
                        <button class="btn btn-primary btn-sm mt-3 " onclick="showDescription('${v.id}')">
                            Descripcion</button>
                    </div>
            </div>
                
                    `
                    
    });

}

async function showDescription(id) {
    const res = await Api.getDataById("vacants",id)


    vacanteSeleccionada = data;

    let theInfomation = document.querySelector(".information");
    theInfomation.innerHTML = "";

        theInfomation.innerHTML = 
        `
        <div class="detalle-card shadow-sm">

            <div class="detalle-header">
                <h2>${data.vacantName}</h2>
            </div>
            <p class="detalle-empresa">${data.company}</p>
            <div class="detalle-info">
                <span>${data.vacantSalary}</span>
                <span>${data.location}</span>
            </div>
            <hr>
            <div class="detalle-section">
                <h5>Descripción del cargo</h5>
            <p>
            </p>
            </div>
            <div class="detalle-section">
                <h5>Requisitos</h5>
                <ul>
                    <li>${data.requirements}</li>
                </ul>
            </div>
            <div class="detalle-section">
                <h5>Beneficios</h5>
                <ul>
                    <li>${data.benefit1}</li>
                    <li>${data.benefit2}</li>
                    <li>${data.benefit3}</li>
                </ul>
            </div>
            <button class="btn btn-primary mt-3" >
                Aplicar a esta vacante
            </button>

        </div>

        `
    }

loadVacancies();