import styles from './WhyMe.module.css'
import { reasons } from '../../shared/assets'

export const WhyMe = () => {
  return (
    <section id='whyMe' className={styles.why__me}>
      <div className={styles.why__me_header}>
        <h2 className={styles.why__me_title}>ПОЧЕМУ Я?</h2>
      </div>
      <div className={styles.reasons}>
        {reasons.map(reason => (
          <div className={styles.reason} key={reason.id}>
            <div className={styles.reason__title}>{reason.name}</div>
            <div className={styles.reason__subscription}>{reason.subscription}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
