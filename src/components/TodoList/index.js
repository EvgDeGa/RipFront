import { TodoList } from "./TodoList";
import { connect } from "react-redux";
import { add_item } from "../../redux/actions/todoAction";

const mapStateToProps = (state) => ({
  todos: state.todo.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    add_item: (text) => dispatch(add_item(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
