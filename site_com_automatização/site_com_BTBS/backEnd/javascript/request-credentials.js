function ActionButtonPOST() {
    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('button').addEventListener('click', ActionButtonPOST)
    })
    
    const nameID = document.getElementById('nameId').value
    const nameEmail = document.getElementById('nameEmail').value
    const namePassword = document.getElementById('namePassword').value
    
    const cors = require('cors');
    const express = require('express');
    const app = express();
    
    
    app.use(cors({ origin: 'http://localhost:3306' }))
    
    
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    
    const raw = JSON.stringify({
        "ID": nameID,
        "email": nameEmail,
        "password": namePassword
    })
    
    console.log("Dados enviados:", raw)
    
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    }
    
    fetch("http://localhost:8080/users/", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log("Resposta do servidor:", result))
    .catch((error) => console.error("Erro na requisição:", error))
}

ActionButtonPOST()