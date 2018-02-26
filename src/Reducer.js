// import { combineReducers } from 'redux'

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case 'DEL':
      const newState = state.filter((todo)=>{return todo.id !== action.id});
      return newState;
    default:
      return state;
  }
}

//   [
//     { 1: 'Eat' },
//     { 2: 'Sleep' },
//     { 3: 'Breathe' }
//   ]

export default reducer;
