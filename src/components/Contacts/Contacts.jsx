import Mail from '../../shared/assets/icons/common/vk.svg'
import Vk from '../../shared/assets/icons/common/vk.svg'
import Telegram from '../../shared/assets/icons/common/telegram.svg'
import styles from './Contacts.module.css'

export const Contacts = () => {
  return (
    <section id='contacts' className={styles.questions}>
      <div className={styles.questions__header}>
        <h2 className={styles.questions__title}>
          Остались <span>вопросы?</span>
        </h2>
        <p className={styles.questions__subscription}>
          Свяжитесь со мной любым удобным для вас способом предложенным ниже...
        </p>
      </div>
      <p className={styles.submit__request}>Оставить заявку</p>
      <div className={styles.feedback}>
        <div className={styles.feedback__form}>
          <form className={styles.request__form} action='submit'>
            <input className={styles.request__input} name='name' type='text' placeholder='Имя' />
            <input className={styles.request__input} name='phone' type='number' placeholder='Телефон' />
            <input className={styles.request__input} name='email' type='email' placeholder='E-mail' />
            <input className={styles.placeholder__input} name='question' type='text' placeholder='Вопрос' />
            <input className={styles.submit__btn} type='submit' value='отправить' />
          </form>
        </div>
        <div className={styles.feedback__contacts}>
          <div className={styles.feedback__contacts_item}>
            <Mail />
            <p>sulavko@gmail.com</p>
          </div>
          <div className={styles.feedback__contacts_item}>
            <Vk />
            <p>https://vk.com/sulavko</p>
          </div>
          <div className={styles.feedback__contacts_item}>
            <Telegram />
            <p>https://telegram/sulavko</p>
          </div>
        </div>
      </div>
    </section>
  )
}
