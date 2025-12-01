// LOGIN – FRONTEND


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-login");

    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = form.querySelector("#email").value.trim();
        const senha = form.querySelector("#senha").value.trim();

        const msgErro = document.getElementById("erro-login");
        msgErro.textContent = "";
        msgErro.style.display = "none";

        if (!email || !senha) {
            msgErro.textContent = "Preencha todos os campos.";
            msgErro.style.display = "block";
            return;
        }

        try {
            const usuario = await login(email, senha);

            // Redirecionamento por tipo de usuário
            if (usuario.tipo === "ADMIN") {
                window.location.href = "/pages/admin.html";
            } else {
                window.location.href = "/pages/cliente.html";
            }

        } catch (error) {
            msgErro.textContent = "E-mail ou senha incorretos.";
            msgErro.style.display = "block";
        }
    });
});
