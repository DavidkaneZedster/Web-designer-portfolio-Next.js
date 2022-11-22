import Head from 'next/head'
import { Layout, Portfolio } from '../src/components'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import work from '../src/images/work__template-image.png'
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
        <Portfolio />
        <div className='container'>
          <section id='portfolio' className={styles.portfolio}>
            <div className={styles.portfolio__header}>
              <div>
                <h2 className={cn(styles.title, styles.portfolio__title)}>ПОРТФОЛИО</h2>
              </div>
              <div className={styles.all__works}>
                <Link className={styles.all__works_link} href='#'>
                  все работы
                </Link>
              </div>
            </div>
            <div className={styles.works}>
              <div className={styles.works__section}>
                <div className={styles.work}>
                  <div className={styles.work__image}>
                    <Image src={work} alt='work' />
                  </div>
                  <div className={styles.work__title}>Название проекта</div>
                  <div className={styles.work__subscription}>
                    Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                    работы в режиме реального времени.
                  </div>
                </div>
                <div className={styles.work}>
                  <div className={styles.work__image}>
                    <Image src={work} alt='work' />
                  </div>
                  <div className={cn(styles.work__title, styles.text_right)}>Название проекта</div>
                  <div className={cn(styles.work__subscription, styles.text_right)}>
                    Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                    работы в режиме реального времени.
                  </div>
                </div>
              </div>
              <div className={styles.works__section}>
                <div className={styles.work}>
                  <div className={styles.work__image}>
                    <Image src={work} alt='work' />
                  </div>
                  <div className={styles.work__title}>Название проекта</div>
                  <div className={styles.work__subscription}>
                    Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                    работы в режиме реального времени.
                  </div>
                </div>
                <div className={styles.work}>
                  <div className={styles.work__image}>
                    <Image src={work} alt='work' />
                  </div>
                  <div className={cn(styles.work__title, styles.text_right)}>Название проекта</div>
                  <div className={cn(styles.work__subscription, styles.text_right)}>
                    Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                    работы в режиме реального времени.
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='whyMe' className={styles.why__me}>
            <div className={styles.why__me_header}>
              <h2 className={cn(styles.title, styles.why__me_title)}>ПОЧЕМУ Я?</h2>
            </div>
            <div className={styles.reasons}>
              <div className={styles.reasons__section}>
                <div className={styles.reason}>
                  <div className={styles.reason__title}>Бесплатная консультация</div>
                  <div className={styles.reason__subscription}>
                    Свяжитесь со мной, чтобы получить бесплатную консультацию по телефону, онлайн или лично. После
                    консультации вы сможете решить проблему самостоятельно, или заказать услуги, который возьмёт все
                    заботы на себя.
                  </div>
                </div>
                <div className={styles.reason}>
                  <div className={styles.reason__title}>Постраничное согласование</div>
                  <div className={styles.reason__subscription}>
                    Свяжитесь со мной, чтобы получить бесплатную консультацию по телефону, онлайн или лично. После
                    консультации вы сможете решить проблему самостоятельно, или заказать услуги, который возьмёт все
                    заботы на себя.
                  </div>
                </div>
              </div>
              <div className={styles.reasons__section}>
                <div className={styles.reason}>
                  <div className={styles.reason__title}>Бесплатная консультация</div>
                  <div className={styles.reason__subscription}>
                    Свяжитесь со мной, чтобы получить бесплатную консультацию по телефону, онлайн или лично. После
                    консультации вы сможете решить проблему самостоятельно, или заказать услуги, который возьмёт все
                    заботы на себя.
                  </div>
                </div>
                <div className={styles.reason}>
                  <div className={styles.reason__title}>Постраничное согласование</div>
                  <div className={styles.reason__subscription}>
                    Свяжитесь со мной, чтобы получить бесплатную консультацию по телефону, онлайн или лично. После
                    консультации вы сможете решить проблему самостоятельно, или заказать услуги, который возьмёт все
                    заботы на себя.
                  </div>
                </div>
              </div>
            </div>
          </section>
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
