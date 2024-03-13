import React from 'react'
import { useAppSelector } from '../../hook'
import styles from './tiles-view.module.scss'

export const TilesView: React.FC = () => {
    const todos = useAppSelector(state => state.data.list)

    return (
        <div className={styles['tiles-container']}>
            <div className={styles['tiles-content']}>
                {todos.map(item => (
                    <div
                        className={styles['tiles-row']}
                        key={item.id}>
                        {item.name} {item.email} {item.phone}
                    </div>
                ))}
            </div>
        </div>
    )
}