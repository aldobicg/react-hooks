export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "@todo/add":
      return [...state, action.payload];
    case "@todo/remove":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "@todo/toggle":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
