"use strict";
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
const registerButton = document.getElementById("register-proxy");
const page = window.location.pathname

if (registerButton) {
  registerButton.addEventListener("click", async () => {
    try {
      await registerSW();
      location.reload();
    } catch (err) {
      error.textContent = "Failed to register service worker.";
      errorCode.textContent = err.toString();
      registerButton.classList.remove("show");
    }
  });
};
