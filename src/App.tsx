import { Form, User } from './components';

import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles['container']}>
            <Form />

            <User />
        </div>
    )
}
