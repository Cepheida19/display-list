import React from 'react'
import { useAppSelector } from '../../hook'
import styles from './list-view.module.scss'

export const ListView: React.FC = () => {
    const todos = useAppSelector(state => state.data.list)

    return (
        <div className={styles['list-container']}>
            <div className={styles['list-content']}>
                {todos.map(item => (
                    <div
                        className={styles['list-row']}
                        key={item.id}>
                        {item.name} / {item.email} / {item.phone}
                    </div>
                ))}
            </div>
        </div>
    )
}