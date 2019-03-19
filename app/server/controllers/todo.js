const toWireType = (todo, baseUrl) => {
  return {
    id: todo.id,
    title: todo.title,
    order: todo.order,
    completed: todo.completed,
    url: `http://${baseUrl}/${todo.id}`
  }
}

let Todo
const model = () => Todo || (Todo = require('../models/todo'))

const findAll = async baseUrl => {
  let todos = await model().find().exec()
  return todos.map(todo => toWireType(todo,baseUrl))
}

const findById = async (id, baseUrl) => {
  let todo = await model().findOne({'id': id}).exec()
  return toWireType(todo, baseUrl)
}

const create = async (todo, baseUrl) => {
  todo.completed = false
  await model().create(todo)
  return toWireType(todo, baseUrl)
}

const update = async (id, patch, baseUrl) => {
  let todo = await model().findOneAndUpdate({id: id}, patch).exec()
  return toWireType(todo, baseUrl)
}

const deleteAll = () => model().deleteMany().exec()
const deleteById = id => model().deleteOne({id}).exec()

module.exports = {findAll, findById, create, update, deleteAll, deleteById}