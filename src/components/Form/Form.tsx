import { FC, useState } from 'react';
import { Input } from '..';

import styles from './Form.module.scss';

export const Form: FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

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
