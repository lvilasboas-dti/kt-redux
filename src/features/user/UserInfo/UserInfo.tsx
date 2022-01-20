import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../infrastructure';

import styles from './UserInfo.module.scss';

export const UserInfo: FC = () => {
    const name = useSelector((state: RootState) => state.user.name);
    const email = useSelector((state: RootState) => state.user.email);
    return (
        <div className={styles['container']}>
            <div className={styles['item']}>
                <div className={styles['label']}>User name</div>
                <div className={styles['value']}>{name}</div>
            </div>

            <div className={styles['item']}>
                <div className={styles['label']}>User email</div>
                <div className={styles['value']}>{email}</div>
            </div>
        </div>
    )
}
