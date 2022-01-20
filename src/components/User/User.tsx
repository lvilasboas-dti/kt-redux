import { FC } from 'react';
import { UserInfo } from '..';

import styles from './User.module.scss';

export const User: FC = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['avatar']}></div>
            <div className={styles['info']}>
                <UserInfo />
            </div>
        </div>
    )
}
