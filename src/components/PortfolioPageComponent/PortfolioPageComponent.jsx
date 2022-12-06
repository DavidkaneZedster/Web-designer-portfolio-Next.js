import { useState } from 'react'
import { isFullPortfolioPageWorks, works } from '../../shared/assets'
import { PortfolioItem } from '../PortfolioItem'
import DownloadMore from '../../shared/assets/icons/common/download__more.svg'
import ArrowUp from '../../shared/assets/icons/common/arrow__up.svg'
import styles from './PortfolioPageComponent.module.css'
import cn from 'classnames'

export const PortfolioPageComponent = () => {
  const [isShortFormat, setIsShortFormat] = useState(true)

  const isShortFormatHandler = () => {
    setIsShortFormat(!isShortFormat)
    isShortFormat ? scrollTo(0, 2050) : scrollTo(0, 650)
  }

  return (
    <main className={styles.main}>
      <div className={cn(styles.works, 'container')}>
        <div className={styles.works__section}>
          {isShortFormat
            ? works.map(work => (
                <PortfolioItem
                  key={work.id}
                  name={work.name}
                  subscription={work.subscription}
                  imageUrl={work.imageUrl}
                  textRight={work.textRight}
                />
              ))
            : isFullPortfolioPageWorks.map(work => (
                <PortfolioItem
                  key={work.id}
                  name={work.name}
                  subscription={work.subscription}
                  imageUrl={work.imageUrl}
                  textRight={work.textRight}
                />
              ))}
        </div>
        <div className={styles.button}>
          <a style={{ cursor: 'pointer' }} onClick={() => isShortFormatHandler()}>
            {isShortFormat ? <DownloadMore /> : <ArrowUp />}
          </a>
        </div>
      </div>
    </main>
  )
}
