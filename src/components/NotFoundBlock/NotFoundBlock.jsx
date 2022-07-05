import React from 'react'
import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  return (
    <div className={styles.root}>
        <h1 >
            <span>😕</span>
            <br/>
            Ничего не найдено
        </h1>
        <p className={styles.discription}>к сожалению данная страница не найдена в нашем интернет мазагине</p>
    </div>
  )
}

export default NotFoundBlock