import { FC, useState } from 'react'
import styles from './main-page.module.scss'
import { ListView } from '../components/list-view/list-view'
import { TilesView } from '../components/tiles-view/tiles-view'

type visibleTypes = 'list' | 'tiles'

export const MainPage = () => {
    const [visibleType, setVisibleType] = useState<visibleTypes>('list')

    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['header']}>
                    <button onClick={() => setVisibleType('list')} className={styles['button-style']}>List</button>
                    <button onClick={() => setVisibleType('tiles')} className={styles['button-style']}>Tiles</button>
                </div>
                <div className={styles['body']}>
                    {visibleType === 'list' && <ListView />}
                    {visibleType === 'tiles' && <TilesView />}
                </div>
            </div>
        </div>
    )
}