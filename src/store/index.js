import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  // 使用Vuex的State功能（基础功能）
  state () {
    return {
      count: 0,
      todos: [
        { id: 1, text: '投简历', done: true },
        { id: 2, text: '面试', done: false }
      ]
    }
  },

  // 使用Vuex的Getters功能（可以过滤）
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  },

  // 使用Vuex的Mutations功能（可以传参）
  mutations: {
    increment (state, n) {
      state.count += n
    }
  }
})

export default store