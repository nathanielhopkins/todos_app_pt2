import { connect } from "react-redux";
import TodoList from '../todo_list/todo_list';
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, removeTodo } from "../../actions/todo_actions";

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TodoList);