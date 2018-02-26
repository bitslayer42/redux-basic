
let nextID = 0;

export function addToDo(text) {
  return { type: 'ADD', id: nextID++, text }
}
 
export function delToDo(id) {
  return { type: 'DEL', id }
}

