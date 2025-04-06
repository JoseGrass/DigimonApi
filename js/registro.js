function setupFormulario(formId) {
    const form = document.getElementById(formId);
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = {
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        correo: form.correo.value,
        edad: form.edad.value,
        usuario: form.usuario.value,
        contraseña: form.contraseña.value,
        confirmacion: form.confirmacion.value,
      };
      console.log("Formulario enviado:", data);
      alert("Registro exitoso ✅");
      form.reset();
    });
  }
  