import { connect } from 'react-redux'
import ListToDo from './ListToDo';
import { delToDo } from './Actions';

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = {
  onTodoClick: delToDo
}

const GetToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListToDo)

export default GetToDoList;
