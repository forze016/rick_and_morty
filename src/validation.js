export function validate(userData) {
    const errors = {};
  
    // Validación del email
    if (!userData.email) {
      errors.email = 'El email es requerido';
    } else if (!isValidEmail(userData.email)) {
      errors.email = 'El email no es válido';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres';
    }
  
    // Validación de la contraseña
    if (!userData.password) {
      errors.password = 'La contraseña es requerida';
    } else if (!isValidPassword(userData.password)) {
      errors.password = 'La contraseña no es válida';
    }
  
    return errors;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    return passwordRegex.test(password);
  }
  