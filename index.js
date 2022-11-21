const express = require("express");
const { response } = require("express");
const { uuid } = require("uuidv4"); //id unico

const app = express();
app.use(express.json());
const aluno = [];

app.get("/alunos", (request, response) => {
  return response.json(alunos);
}); //visualizar
app.post("/alunos", (request, response) => {
  const { nome, curso } = request.body;
  const aluno = { id: uuid(), nome, curso };
  alunos.push(aluno);
  return response.status(201).json(aluno);
}); //inserir
//put atualiza
app.put("/alunos/:id", (request, response) => {
  const { id } = request.params;
  const { nome, curso } = request.body;
  const newAlunos = { id, nome, curso };
  const alunoindex = alunos.findIndex((aluno) => aluno.id == id);
  alunos[alunoindex] = newAlunos;
});
return response.json(newAlunos);

app.listen(8181, () => {
  console.log("O servidor foi iniciado");
});

app.delete("/alunos/:id", (request, response) => {
  const { id } = request.params;
  const alunoindex = alunos.findIndex((aluno) => aluno.id == id);
  alunos.splice(alunoindex, 1);
  return response.status(204).send();
});
