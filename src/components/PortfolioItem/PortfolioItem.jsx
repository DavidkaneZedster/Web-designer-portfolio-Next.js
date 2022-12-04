import styles from './PortfolioItem.module.css'
import cn from 'classnames'
import Image from 'next/image'
import ArrowDown from '../../shared/assets/icons/common/arrow__down.svg'

export const PortfolioItem = ({ imageUrl, name, subscription, textRight }) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__image}>
        <Image placeholder='blur' priority src={imageUrl} alt='work' />
      </div>
      <div className={textRight ? cn('textRight', styles.work__title) : cn(styles.work__title)}>
        {textRight ? (
          <>
            <ArrowDown />
            {name}
          </>
        ) : (
          <>
            {name}
            <ArrowDown />
          </>
        )}
      </div>
      <div className={textRight ? cn('textRight', styles.work__subscription) : cn(styles.work__subscription)}>
        {subscription}
      </div>
    </div>
  )
}
