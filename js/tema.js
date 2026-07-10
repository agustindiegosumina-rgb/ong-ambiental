document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.getElementById("btnTema");
  const body = document.body;
  const CLASE_OSCURO = "modo-oscuro";
  const CLAVE_STORAGE = "tema";

  // aplica tema guardado
  const temaGuardado = localStorage.getItem(CLAVE_STORAGE);
  const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (temaGuardado === "oscuro" || (!temaGuardado && prefiereOscuro)) {
    activarModoOscuro();
  }

  // Alternar tema al hacer clic en el botón
  if (btnTema) {
    btnTema.addEventListener("click", () => {
      if (body.classList.contains(CLASE_OSCURO)) {
        desactivarModoOscuro();
      } else {
        activarModoOscuro();
      }
    });
  }

  function activarModoOscuro() {
    body.classList.add(CLASE_OSCURO);
    localStorage.setItem(CLAVE_STORAGE, "oscuro");
    actualizarBoton(true);
  }

  function desactivarModoOscuro() {
    body.classList.remove(CLASE_OSCURO);
    localStorage.setItem(CLAVE_STORAGE, "claro");
    actualizarBoton(false);
  }

  function actualizarBoton(esOscuro) {
    if (!btnTema) return;
    btnTema.textContent = esOscuro ? "☀️ Cambiar tema" : "🌙 Cambiar tema";
  }
});
