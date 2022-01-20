import { FC } from 'react';
import { UserInfo } from '../UserInfo';

import styles from './User.module.scss';

export const User: FC = () => {
    console.log('renderizando User');
    return (
        <div className={styles['container']}>
            <div className={styles['avatar']}></div>

            <div className={styles['info']}>
                <UserInfo />
            </div>
        </div>
    )
}
