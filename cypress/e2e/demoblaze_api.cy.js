describe('Pruebas Técnicas de API - Demoblaze', () => {
  const baseUrl = 'https://api.demoblaze.com';
  
  // Generamos un usuario aleatorio para que la prueba de "crear" siempre pase
  const randomId = Math.random().toString(36).substring(7);
  const newUser = {
    username: `user_${randomId}`,
    password: 'password123'
  };

  // 1. Crear un nuevo usuario en signup
  it('Debe crear un nuevo usuario exitosamente', () => {
    cy.request('POST', `${baseUrl}/signup`, newUser).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // 2. Intentar crear un usuario ya existente
it('Debe fallar al intentar crear un usuario ya existente', () => {
  cy.request('POST', `${baseUrl}/signup`, newUser).then((response) => {
    expect(response.body.errorMessage).to.eq('This user already exist.');
  });
});

  // 3. Usuario y password correcto en login
  it('Debe permitir el login con credenciales correctas', () => {
    cy.request('POST', `${baseUrl}/login`, newUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.contain('Auth_token');
    });
  });

  // 4. Usuario y password incorrecto en login
  it('Debe denegar el login con password incorrecto', () => {
    cy.request('POST', `${baseUrl}/login`, {
      username: newUser.username,
      password: 'wrong_password'
    }).then((response) => {
      expect(response.body.errorMessage).to.eq('Wrong password.');
    });
  });
});