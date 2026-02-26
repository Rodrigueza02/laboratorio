(() => {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (input, condition, message) => {
    const error = input.nextElementSibling;

    if (!condition) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      error.textContent = message;
      return false;
    }

    input.classList.remove('invalid');
    input.classList.add('valid');
    error.textContent = '';
    return true;
  };

  const checkFormValidity = () => {
    const isValid =
      validateField(nameInput, nameInput.value.trim() !== '', 'Nombre requerido') &&
      validateField(emailInput, emailRegex.test(emailInput.value), 'Email inválido') &&
      validateField(messageInput, messageInput.value.trim().length >= 10, 'Mínimo 10 caracteres');

    submitBtn.disabled = !isValid;
    submitBtn.classList.toggle('enabled', isValid);
  };

  [nameInput, emailInput, messageInput].forEach(input =>
    input.addEventListener('input', checkFormValidity)
  );

  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Formulario enviado correctamente');
  });
})();