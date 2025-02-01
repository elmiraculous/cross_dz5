import { todoRepository } from '../repositories/todoRepository';

export const todoService = {
  getTodos: async () => await todoRepository.fetchTodos(),
  createTodo: async (title) => await todoRepository.addTodo({ title, completed: false }),
  toggleTodo: async (id, completed) => await todoRepository.updateTodo(id, { completed }),
  removeTodo: async (id) => await todoRepository.deleteTodo(id)
};