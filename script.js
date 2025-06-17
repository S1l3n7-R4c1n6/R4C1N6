const PASSWORD = "fvckc0p5";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("loginError");

  if (input === PASSWORD) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("bootConsole").style.display = "block";

    const lines = [
      "[OK] Inicializando sistema...",
      "[OK] Verificando conexão com servidor S1l3n7...",
      "[OK] Estabelecendo handshake...",
      "[OK] Acesso autorizado para ID: #72829",
      "[OK] Redirecionando para o sistema..."
    ];

    let i = 0;
    const consoleOut = document.getElementById("consoleOutput");

    const interval = setInterval(() => {
      if (i < lines.length) {
        consoleOut.textContent += lines[i] + "\n";
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById("bootConsole").style.display = "none";
          document.getElementById("loadingScreen").style.display = "flex";

          const texts = [
            "Estabelecendo conexão segura...",
            "Verificando credenciais...",
            "Acesso concedido.",
            "Carregando sistema S1l3n7 R4c1n6..."
          ];

          let j = 0;
          const textElement = document.getElementById("loadingText");

          const loadInterval = setInterval(() => {
            j++;
            if (j < texts.length) {
              textElement.textContent = texts[j];
            }
          }, 1000);

          setTimeout(() => {
            clearInterval(loadInterval);
            document.getElementById("loadingScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "flex";
          }, 4000);

        }, 1000);
      }
    }, 1000);
  } else {
    error.textContent = "Acesso negado.";
  }
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
