
// CONFIGURAÇÃO DA API//

const API_URL = "http://localhost:8099/api";



// LOGIN DO USUÁRIO//

async function login(email, senha) {
    const response = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    });

    if (!response.ok) {
        throw new Error("E-mail ou senha inválidos.");
    }

    const dados = await response.json();

    // Armazena no navegador//
    localStorage.setItem("usuario", JSON.stringify(dados));

    return dados;
}



// CADASTRO DO USUÁRIO//

async function cadastrarUsuario(nome, email, senha) {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha })
    });

    if (!response.ok) {
        throw new Error("Erro ao cadastrar. Verifique os dados.");
    }

    return await response.json();
}



// VERIFICA LOGIN//

function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem("usuario"));
}

function isLogado() {
    return localStorage.getItem("usuario") !== null;
}


// PROTEÇÃO DE PÁGINAS//

function protegerPagina(tipoPermitido) {
    const usuario = getUsuarioLogado();

    if (!usuario) {
        window.location.href = "/pages/login.html";
        return;
    }

    if (tipoPermitido && usuario.tipo !== tipoPermitido) {
        window.location.href = "/index.html";
    }
}



// LOGOUT//

function logout() {
    localStorage.removeItem("usuario");
    window.location.href = "/index.html";
}
