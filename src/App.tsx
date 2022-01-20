import { Form } from './components';
import { User } from './features/user/User';

import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles['container']}>
            <Form />

            <User />
        </div>
    )
}
