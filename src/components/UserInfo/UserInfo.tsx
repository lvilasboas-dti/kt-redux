import { FC } from 'react';

import styles from './UserInfo.module.scss';

export const UserInfo: FC = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['item']}>
                <div className={styles['label']}>User name</div>
                <div className={styles['value']}></div>
            </div>

            <div className={styles['item']}>
                <div className={styles['label']}>User email</div>
                <div className={styles['value']}></div>
            </div>
        </div>
    )
}
