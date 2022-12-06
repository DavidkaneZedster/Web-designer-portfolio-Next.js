import { useState } from 'react'
import { isFullPortfolioPageWorks, works } from '../../shared/assets'
import { PortfolioItem } from '../PortfolioItem'
import DownloadMore from '../../shared/assets/icons/common/download__more.svg'
import ArrowUp from '../../shared/assets/icons/common/arrow__up.svg'
import styles from './PortfolioPageComponent.module.css'
import cn from 'classnames'

export const PortfolioPageComponent = () => {
  const [isShortFormat, setIsShortFormat] = useState(true)
  const bottomButtonPosition = [0, 2050]
  const topButtonPosition = [0, 650]

  const isShortFormatHandler = () => {
    isShortFormat ? scrollTo(...bottomButtonPosition) : scrollTo(...topButtonPosition)
    isShortFormat
      ? setIsShortFormat(!isShortFormat)
      : setTimeout(() => {
          setIsShortFormat(!isShortFormat)
        }, 100)
  }

  return (
    <main className={styles.main}>
      <div className={cn(styles.works, 'container')}>
        <div className={styles.works__section}>
          {isShortFormat
            ? works.map(work => <PortfolioItem key={work.id} {...work} />)
            : isFullPortfolioPageWorks.map(work => <PortfolioItem key={work.id} {...work} />)}
        </div>
        <div className={styles.button}>
          <a id='button' style={{ cursor: 'pointer' }} onClick={() => isShortFormatHandler()}>
            {isShortFormat ? <DownloadMore /> : <ArrowUp />}
          </a>
        </div>
      </div>
    </main>
  )
}
