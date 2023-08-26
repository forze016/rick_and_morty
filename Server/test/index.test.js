const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("GET /rickandmorty/character/:id", () => {
  it("Responde con status: 200", async () => {
    await agent.get('/rickandmorty/character/1').expect(200);
  });

  it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
    const response = await agent.get('/rickandmorty/character/1');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('species');
    expect(response.body).toHaveProperty('gender');
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('origin');
    expect(response.body).toHaveProperty('image');
  });

  it("Si hay un error responde con status: 500", async () => {
    await agent.get('/rickandmorty/character/999').expect(500);
  });
});

describe("GET /rickandmorty/login", () => {
    it("Responde con access: true si se envía la información de login correcta", async () => {
      const response = await agent.get("/rickandmorty/login/?email=facundonadaya@gmail.com&password=123456789")
      expect({access: true}).toEqual( response.body );
    });
  
    it("Responde con access: false si se envía la información de login incorrecta", async () => {
      const response = await agent.get('/rickandmorty/login')
        .query({ email: 'wrong@example.com', password: 'wrongpassword' });
      expect(response.body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Lo que se envíe por body debe ser devuelto en un arreglo", async () => {
      const character = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };
      const response = await agent.post('/rickandmorty/fav')
        .send(character);
      expect(response.body).toEqual([character]);
    });
  
    it("Si se envía un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
      const character1 = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };
  
      const character2 = {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      };
  
      await agent.post('/rickandmorty/fav')
        .send(character1);
  
      const response = await agent.post('/rickandmorty/fav')
        .send(character2);
  
      expect(response.body).toEqual([character1, character2]);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si se envía un ID que no existe, devuelve un arreglo con los elementos previos sin modificar", async () => {
      const character1 = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };
       const character2 = {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      };
       await agent.post('/rickandmorty/fav')
        .send(character1);
       await agent.post('/rickandmorty/fav')
        .send(character2);
       const response = await agent.delete('/rickandmorty/fav/3');
       expect(response.body).toEqual([character1, character2]);
    });
    it("Si se envía un ID válido, se elimina correctamente al personaje", async () => {
      const character1 = {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      };
      const character2 = {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        gender: "Male",
        status: "Alive",
        origin: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      };
      await agent.post('/rickandmorty/fav')
        .send(character1);
      await agent.post('/rickandmorty/fav')
        .send(character2);
      const response = await agent.delete('/rickandmorty/fav/2');
      expect(response.body).toEqual([character1]);
    });
  });