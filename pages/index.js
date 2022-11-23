import Head from 'next/head'
import { Layout, Portfolio, WhyMe } from '../src/components'
import cn from 'classnames'
import Image from 'next/image'
import styles from '../styles/template.module.css'
import mail from '../src/images/mail.svg'
import vk from '../src/images/vk.svg'
import telegram from '../src/images/telegram.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Главная страница</title>
        <meta name='description' content='Протфолио Веб-дизайнера, created by David Klorikyan' />
      </Head>
      <Layout>
        <div className='container'>
          <Portfolio />
          <WhyMe />
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
                  <Image src={mail} alt='e-mail' />
                  <p>sulavko@gmail.com</p>
                </div>
                <div className={styles.feedback__contacts_item}>
                  <Image src={vk} alt='vk' />
                  <p>https://vk.com/sulavko</p>
                </div>
                <div className={styles.feedback__contacts_item}>
                  <Image src={telegram} alt='telegram' />
                  <p>https://telegram/sulavko</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}
