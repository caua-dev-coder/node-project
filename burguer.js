const express = require('express') 
const uuid = require('uuid')

const port = 3000
const app = express() 
app.use(express.json())

// Projeto Burguer ___________________________________

const clientsName = []

app.get('/order', (request, response) => {
  return response.json(clientsName)
})



app.post('/order', (request,response) => {
  const {clienteName, status, order} = request.body

  console.log( uuid.v4())
  // const user = { id: uuid.v4(), clienteName, status, order}

  clientsName.push(user) // 
  return response.status(201).json(user) 
})




app.listen(port, () => {
  console.log(`Server started on port 🚀 ${port}`)
}) 


/*
//   - Query Params => meusite.com/users?nome=caua&age=28 // FILTRO
//   - Route Params => /users/2                          // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECIFICO
//   - Request Body => { "name":"Caua", "age":}

//   - GET             => Buscar informação no back-end
//   - POST            => Criar informação no back-end
//   - PUT/PATCH       => Alterar/Atualizar informação no back-end
//   - DELETE          => Deletar informação no back-end
// */


// const users = [] 

// const checkUserId = (request, response, next) => {
//   const {id} = request.params

//   const index = users.findIndex(user => user.id === id)

//   if(index < 0){
//     return response.status(404).json({ error: 'User Not Found '})
//   }

//   request.userIndex = index
//   request.userId = id

//   next()
// }

// app.get('/users', (request,response) => {
//   return response.json(users) 
// })

// app.post('/users', (request,response) => {
//   const {name, age} = request.body

//   const user = { id: uuid.v4(), name, age }

//   users.push(user) // 
//   return response.status(201).json(user) 
// })

// app.put('/users/:id',checkUserId, (request,response) => {
//   const {name, age} = request.body
//   const index = request.userIndex
//   const id = request.userId

//   const updatesUser = {id, name, age}

//   users[index] = updatesUser

//   return response.json(updatesUser) 
// })

// app.delete('/users/:id',checkUserId, (request,response) => {
//   const index = request.userIndex

//   users.splice(index,1)

//   return response.status(204).json(users) 
// })

