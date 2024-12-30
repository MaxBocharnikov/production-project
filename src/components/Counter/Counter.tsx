import {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = (): void => {
        setCount(count + 1);
    }

    return (
        <div>
            <h4>{count}</h4>
            <button className={styles.button} onClick={increment}>Increment</button>
        </div>
    );
};
