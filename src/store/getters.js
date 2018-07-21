const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  countCollection: state => collection => {
    return state[collection].length
  },
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id)
  },
  getAttributes: state => {
    return state.attributes
  },
  getClasses: state => {
    return state.classes
  },
  getColors: state => {
    return state.colors
  }
}

export default getters
