const express = require('express');

const app = express();

app.use(express.json());

/**
 * Tipos de recursos
 * GET: Buscar uma informação dentro do servidor
 * POST: Inserir uma informação no servidor
 * PUT: Alterar uma informação no servidor
 * PATCH: Alterar uma informação específica
 * DELETE: Deletar uma informação no servidor
*/

/**
 * Tipos de parâmetros
 * Route Params: Identificar um recurso, buscar/editar/deletar
 * Query params: Paginação/filtros
 * Body params: Os objetos para inserção/alteração
*/


// GET
app.get('/courses', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

// POST
app.post('/courses', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

// PUT
app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  return response.json(["Curso 1.1", "Curso 2", "Curso 3", "Curso 4"])
})

// PATCH
app.patch('/courses/:id', (request, response) => {
  return response.json(["Curso 1.1", "Curso 2.1", "Curso 3", "Curso 4"])
})

// DELETE
app.delete('/courses/:id', (request, response) => {
  return response.json(["Curso 1.1", "Curso 2.1", "Curso 4"])
})

app.listen(3333);