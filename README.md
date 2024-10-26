[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6-Rnp1Qx)
# Atividade: Módulo de Estudantes com NestJS

**LEIA TODO O DOCUMENTO ANTES DE COMEÇAR E CONSULTE DURANTE A ATIVIDADE. <u>NÃO</u> ALTERE OS TESTES ESCRITOS NESSE TEMPLATE**

Este repositório contém a base para uma atividade prática em que você irá criar um módulo para gerenciar dados de estudantes usando NestJS. Ao final da atividade, você deve ser capaz de realizar operações CRUD (Create, Read, Update, Delete) no módulo `student`, armazenando os dados temporariamente na própria API.

## Objetivo

O objetivo desta atividade é familiarizar-se com os conceitos de **módulos**, **serviços**, **controladores** e **testes** (brevemente) no NestJS. Você irá:

- Criar um módulo para gerenciar estudantes.
- Implementar um serviço para armazenar e manipular dados de estudantes localmente.
- Configurar um controlador para manipular rotas de CRUD de estudantes.

## Pré-requisitos

Certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/en/download/package-manager) (recomendado: versão LTS)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (`npm i -g @nestjs/cli`)

**IMPORTANTE**: Por conta da barreira para instalar o node nas máquinas da sala, utilizem o tutorial mostrado no link do node acima, rodando alguns comandos no terminal do powershell, e deixando aberto o terminal para a chamada do node ou npm. Caso o terminal seja fechado, é necessário repetir as etapas.

## Estrutura da Atividade

### 1. Criar o Módulo `Student`

Primeiro, crie o módulo de `student` usando o NestJS CLI:

```bash
nest generate module modules/student
```

Esse comando irá criar uma pasta `student` em `src`, contendo o módulo `StudentModule`.

### 2. Criar o Serviço de Estudantes

Em seguida, crie o serviço `StudentService`, que será responsável por armazenar os dados dos estudantes em uma estrutura de dados local (array). Para isso, execute:

```bash
nest generate service modules/student
```
Implemente o serviço com os seguintes métodos:

- `addStudent(name: string, age: number, course: string)`: Adiciona um novo estudante.
- `getStudents()`: Retorna todos os estudantes.
- `getStudentById(id: string)`: Retorna um estudante específico pelo ID.
- `updateStudent(id: string, data: Partial<Student>)`: Atualiza as informações de um estudante.
- `deleteStudent(id: string)`: Remove um estudante pelo ID.

### 3. Criar o Controlador de Estudantes

O controlador de estudantes irá expor as rotas da API. Para criá-lo, use:

```bash
nest generate controller modules/student
```
No controlador, crie as rotas:

- `POST /student`: Cria um novo estudante.
- `GET /student`: Retorna todos os estudantes.
- `GET /student/:id`: Retorna um estudante específico.
- `PATCH /student/:id`: Atualiza um estudante pelo ID.
- `DELETE /student/:id`: Remove um estudante pelo ID.

### 4. Rodando os testes

Para saber se seu projeto está de acordo com o esperado, rode os testes usando:

```bash
npm run test
```

Caso 100% dos testes passem com sucesso, parabéns! Você concluiu a atividade. Faça um commit e suba para o repositório remoto 