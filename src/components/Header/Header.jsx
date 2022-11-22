import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import logo from '../../images/logo.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link href='#aboutMe' className={styles.menu__link}>
                ОБО МНЕ
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='#portfolio' className={styles.menu__link}>
                ПОРТФОЛИО
              </Link>
            </li>
            <Link href='/'>
              <Image width={110} height={165} className={styles.logo} src={logo} alt='logo' />
            </Link>
            <li className={styles.menu__item}>
              <Link href='#whyMe' className={styles.menu__link}>
                ПОЧЕМУ Я?
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='#contacts' className={styles.menu__link}>
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </nav>
        <div id='aboutMe' className={styles.about}>
          <div className={styles.about__title}>
            <h1 className={styles.about__title_span}>Web</h1>
            Dизайнер
          </div>
          <div className='title name text_right'>Сергей Сулавко</div>
        </div>
        <div className={styles.about__me}>
          <div className={styles.person__photo}>
            <div className={styles.photo}>some photo</div>
          </div>
          <div className={styles.info__about_me}>
            <div className={styles.title}>
              <h2 className={styles.about__me_btn}>ОБО МНЕ</h2>
            </div>
            <div className={styles.about__me_text}>
              Я всегда искал возможности и вызовы, которые имели для меня значение. Хотя на моем профессиональном пути
              было много поворотов — от гастролирующего и записывающегося артиста до работника года в некоммерческой
              организации, до стипендиата декана в UPenn, до владельца малого бизнеса и предпринимателя — я никогда не
              переставал заниматься своей страстью к помогать другим и решать проблемы.
            </div>
            <div className={styles.about__me_portfolio}>
              <Link href='#portfolio'>портфолио...</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
