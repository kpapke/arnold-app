const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id)
  },
  countCollection: state => collection => {
    return state[collection].length
  }
}

export default getters
