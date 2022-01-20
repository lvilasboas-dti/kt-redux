import { FC } from 'react';
import { Input } from '..';
import { UserActions } from '../../features/user/redux/User.actions';

import styles from './Form.module.scss';

interface FormProps {
    name: string;
    email: string;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
}
export const Form: FC<FormProps> = ({ name, email, setName, setEmail }) => {
    return (
        <div className={styles['container']}>
            <Input
                label={'User name'}
                value={name}
                onChange={value => setName(value)}
            />

            <Input
                label={'User email'}
                value={email}
                onChange={value => setEmail(value)}
            />
        </div>
    )
}
