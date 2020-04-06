import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Password from '../components/Password';
import { addPassword } from '../actions/password';
import { StateType } from '../reducers/types';

function mapStateToProps(state: StateType) {
  return {
    passwordList: state.passwordList
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      addPassword
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
