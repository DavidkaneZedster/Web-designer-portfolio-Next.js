import React from 'react'
import styles from './header-portfolio.module.css'
import Logo from '../../../shared/assets/icons/common/logo.svg'
import Link from 'next/link'

export const HeaderPortfolio = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href='/'>
                ВЕРНУТЬСЯ ..
              </Link>
            </li>
            <a href='/'>
              <Logo />
            </a>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href='/#contacts'>
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__titles}>
          <p className={styles.header__titles_portfolio}>ПОРТФОЛИО</p>
          <p className={styles.header__titles_name}>СЕРГЕЙ СУЛАВКО</p>
        </div>
      </div>
    </header>
  )
}
