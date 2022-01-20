import { FC } from 'react';

import styles from './Input.module.scss';

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}
export const Input: FC<InputProps> = ({ label, value, onChange }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['label']}>{label}</div>
            <input type={'text'} value={value} onChange={ev => onChange(ev.target.value)} />
        </div>
    )
}
