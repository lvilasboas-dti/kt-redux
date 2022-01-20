import { connect } from 'react-redux';
import { setEmail, setName } from '../../features/user/redux/User.operations';
import { RootState } from '../../infrastructure';
import { Form } from './Form';

const mapStateToProps = (state: RootState) => {
    return {
        name: state.user.name,
        email: state.user.email,
    }
}

const mapDispatchToProps = {
    setName: (name: string) => setName(name),
    setEmail: (email: string) => setEmail(email),
}

const FormConnected = connect(mapStateToProps, mapDispatchToProps)(Form);
export { FormConnected as Form };
