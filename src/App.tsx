import { Form, Posts } from './components';
import { User } from './features/user/User';

import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['top']}>
                <Form />
                <User />
            </div>

            <div className={styles['posts']}>
                <Posts />
            </div>
        </div>
    )
}
