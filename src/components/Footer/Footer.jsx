import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../images/logo.svg'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer class={styles.footer}>
      <div class='container'>
        <div class={styles.footer__logo}>
          <Link href='/'>
            <Image width={110} height={165} src={logo} alt='logo' />
          </Link>
        </div>
        <div class={styles.footer__container}>
          <div class={styles.contact}>
            <p class='title name no_border'>Сергей Сулавко</p>
            <Link href='#contacts' class={styles.contact__button}>
              связаться
            </Link>
          </div>
          <div>
            <nav class={styles.footer__menu}>
              <ul class={styles.footer__menu_list}>
                <li class={styles.footer__menu_item}>
                  <Link href='#aboutMe' class={styles.footer__menu_link}>
                    ОБО МНЕ
                  </Link>
                </li>
                <li class={styles.footer__menu_item}>
                  <Link href='#portfolio' class={styles.footer__menu_link}>
                    ПОРТФОЛИО
                  </Link>
                </li>
                <li class={styles.footer__menu_item}>
                  <Link href='#whyMe' class={styles.footer__menu_link}>
                    ПОЧЕМУ Я?
                  </Link>
                </li>
                <li class={styles.footer__menu_item}>
                  <Link href='#contacts' class={styles.footer__menu_link}>
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div class={styles.footer__contacts}>
            <p class={styles.footer__contacts_submit}>ОСТАВИТЬ ЗАЯВКУ</p>
            <p class={styles.footer__contacts_item}>sulavko@gmail.com</p>
            <p class={styles.footer__contacts_item}>https://vk.com/sulavko</p>
            <p class={styles.footer__contacts_item}>https://telegram/sulavko</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
