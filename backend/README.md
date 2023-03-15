# Requisitos para recursos do usuários

---
<details>
<summary><strong> 1 -) Rota GET | /users</strong> </br>
  Recurso para obter a lista de usuários.
</summary> 

  - A rota deve retornar a lista completa de usuários no formato ``JSON``, com o status HTTP ``200 OK``.
  - **Atenção**: Não envie o password dos usuários.
</details>

---
<details>
<summary><strong> 2 -) Rota GET | /users/:id</strong> </br>
Recurso para obter informações específicas de um usuário.
</summary>

 - A rota deve retornar um objeto no formato ``JSON``contendo os dados do usuário especificado pelo ``ID`` enviado, com o status HTTP ```200 OK```.
</details>

---
<details>
<summary><strong> 3 -) Rota DELETE | /users/:id
 Recurso para excluir um usuário específico, identificado pelo ID.
 </strong></summary>

  - A rota deve retornar somente o status HTTP ``204`` No Content, indicando que a operação foi realizada com sucesso, mas não há nenhum conteúdo a ser retornado.
</details>

---
<details>
<summary><strong> 4 -) Rota POST | /users </strong> </br>
 Recurso para criar um novo usuário.</summary>

 A rota deve retornar o status HTTP ```201`` Created o Id do recurso criado no corpo da resposta, no formato abaixo.
```json
{ "id": 4}
```
</details>

---
<details>
<summary><strong> 5 -)Rota PATCH | /users/:id </strong></summary></br>

- Recurso para atualizar informações de um usuário específico, identificado pelo fornecido.
 Deve retornar apenas o status code ``200``, não é necessário retornar dados no corpo da resposta
</details>

---


# Requisitos para recursos dos jogadores

<details>
<summary><strong> 1 -)Rota POST | /players </strong></summary></br>

- Recurso para criar um novo jogador, com as informações necessárias.
 Deve retornar apenas o status code ``201``, e deve retornar os dados do jogador cadastro

- Além disso, é necessário permitir vincular o jogador ao seu time atual nesse cadastro, caso exista.

```json
{
  "name": "Michael Jordan",
  "birthdate": "20-06-1967",
  "weight": 100,
  "height": 205,
  "localId": 1,
  "positions": [1],
  "predominantHand": "Esquerda",
  "currentTeam": {
    "id": 5,
    "dateSign": "04-01-2023"
  }
}
```
</details>