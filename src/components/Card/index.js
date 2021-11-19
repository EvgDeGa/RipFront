import { Card } from './card';
import { connect } from 'react-redux';
import { add_item } from '../../redux/actions/todoAction';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    add_item: (text) => dispatch(add_item(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
