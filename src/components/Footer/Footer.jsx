import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../images/logo.svg'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__logo}>
          <Link href='/'>
            <Image width={110} height={165} src={logo} alt='logo' />
          </Link>
        </div>
        <div className={styles.footer__container}>
          <div className={styles.contact}>
            <p className='title name no_border'>Сергей Сулавко</p>
            <Link href='#contacts' className={styles.contact__button}>
              связаться
            </Link>
          </div>
          <div>
            <nav className={styles.footer__menu}>
              <ul className={styles.footer__menu_list}>
                <li className={styles.footer__menu_item}>
                  <Link href='#aboutMe' className={styles.footer__menu_link}>
                    ОБО МНЕ
                  </Link>
                </li>
                <li className={styles.footer__menu_item}>
                  <Link href='#portfolio' className={styles.footer__menu_link}>
                    ПОРТФОЛИО
                  </Link>
                </li>
                <li className={styles.footer__menu_item}>
                  <Link href='#whyMe' className={styles.footer__menu_link}>
                    ПОЧЕМУ Я?
                  </Link>
                </li>
                <li className={styles.footer__menu_item}>
                  <Link href='#contacts' className={styles.footer__menu_link}>
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.footer__contacts}>
            <p className={styles.footer__contacts_submit}>ОСТАВИТЬ ЗАЯВКУ</p>
            <p className={styles.footer__contacts_item}>sulavko@gmail.com</p>
            <p className={styles.footer__contacts_item}>https://vk.com/sulavko</p>
            <p className={styles.footer__contacts_item}>https://telegram/sulavko</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
