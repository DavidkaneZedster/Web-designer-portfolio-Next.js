import React from 'react'
import styles from './PortfolioItem.module.css'
import cn from 'classnames'
import Image from 'next/image'

export const PortfolioItem = ({ imageUrl, name, subscription, textRight }) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__image}>
        <Image src={imageUrl} alt='work' />
      </div>
      <div
        className={cn(styles.work__title, {
          ['textRight']: textRight,
        })}
      >
        {name}
      </div>
      <div
        className={cn(styles.work__subscription, {
          ['textRight']: textRight,
        })}
      >
        {subscription}
      </div>
    </div>
  )
}
