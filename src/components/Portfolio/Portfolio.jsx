import Link from 'next/link'
import styles from './Portfolio.module.css'
import cn from 'classnames'
import { PortfolioItem } from '../PortfolioItem'
import { works } from '../../shared/assets'

export const Portfolio = () => {
  return (
    <section id='portfolio' className={styles.portfolio}>
      <div className={styles.portfolio__header}>
        <h2 className={cn(styles.title, styles.portfolio__title)}>ПОРТФОЛИО</h2>
        <p className={styles.all__works}>
          <Link className={styles.all__works_link} href='/portfolioPage'>
            все работы
          </Link>
        </p>
      </div>
      <div className={styles.works}>
        <div className={styles.works__section}>
          {works.map(work => (
            <PortfolioItem {...work} key={work.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
