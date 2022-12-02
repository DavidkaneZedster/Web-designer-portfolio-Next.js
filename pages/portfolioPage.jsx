import Head from 'next/head'
import Image from 'next/image'
import Logo from '../src/shared/assets/icons/common/logo.svg'
import ArrowDown from '../src/shared/assets/icons/common/arrow__down.svg'
import DownloadMore from '../src/shared/assets/icons/common/download__more.svg'
import workTemplateImage from '../src/shared/assets/images/work__template-image.png'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Портфолио</title>
        <meta name='description' content='Протфолио Веб-дизайнера, created by David Klorikyan' />
        <link rel='shortcut icon' href='#' />
      </Head>
      <header className='header'>
        <div className='container'>
          <nav className='menu'>
            <ul className='menu__list'>
              <li className='menu__item'>
                <a href='../index.html' className='menu__link'>
                  ВЕРНУТЬСЯ ..
                </a>
              </li>
              <a href='/'>
                <Logo />
              </a>
              <li className='menu__item'>
                <a href='../index.html#contacts' className='menu__link'>
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </nav>
          <div className='header__titles'>
            <p className='header__titles-portfolio'>ПОРТФОЛИО</p>
            <p className='header__titles-name'>СЕРГЕЙ СУЛАВКО</p>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          <div className='works'>
            <div className='works__section'>
              <div className='work'>
                <div className='work__image'>
                  <Image priority src={workTemplateImage} alt='work' />
                </div>
                <div className='work__title-block'>
                  <p className='work__title'>Название проекта</p>
                  <a className='arrow__down-img'>
                    <ArrowDown />
                  </a>
                </div>
                <div className='work__subscription'>
                  Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                  работы в режиме реального времени.
                </div>
              </div>
              <div className='work text-right'>
                <div className='work__image'>
                  <Image priority src={workTemplateImage} alt='work' />
                </div>
                <div className='work__title-block'>
                  <a className='arrow__down-img'>
                    <ArrowDown />
                  </a>
                  <p className='work__title'>Название проекта</p>
                </div>
                <div className='work__subscription'>
                  Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                  работы в режиме реального времени.
                </div>
              </div>
            </div>
            <div className='works__section'>
              <div className='work'>
                <div className='work__image'>
                  <Image priority src={workTemplateImage} alt='work' />
                </div>
                <div className='work__title-block'>
                  <p className='work__title'>Название проекта</p>
                  <a className='arrow__down-img'>
                    <ArrowDown />
                  </a>
                </div>
                <div className='work__subscription'>
                  Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                  работы в режиме реального времени.
                </div>
              </div>
              <div className='work text-right'>
                <div className='work__image'>
                  <Image priority src={workTemplateImage} alt='work' />
                </div>
                <div className='work__title-block'>
                  <a className='arrow__down-img'>
                    <ArrowDown />
                  </a>
                  <p className='work__title'>Название проекта</p>
                </div>
                <div className='work__subscription'>
                  Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной
                  работы в режиме реального времени.
                </div>
              </div>
            </div>
            <div className='download__more'>
              <a className='download__more-link' href='#'>
                <DownloadMore />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__logo'>
            <a href='/'>
              <Logo />
            </a>
          </div>
          <div className='footer__container'>
            <div className='contact'>
              <p className='title name no-border'>Сергей Сулавко</p>
              <a href='#contacts' className='contact__button'>
                связаться
              </a>
            </div>
            <div>
              <nav className='footer__menu'>
                <ul className='footer__menu-list'>
                  <li className='footer__menu-item'>
                    <a href='#aboutMe' className='footer__menu-link'>
                      ОБО МНЕ
                    </a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='#portfolio' className='footer__menu-link'>
                      ПОРТФОЛИО
                    </a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='#whyMe' className='footer__menu-link'>
                      ПОЧЕМУ Я?
                    </a>
                  </li>
                  <li className='footer__menu-item'>
                    <a href='#contacts' className='footer__menu-link'>
                      КОНТАКТЫ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='footer__contacts'>
              <p className='footer__contacts-submit'>ОСТАВИТЬ ЗАЯВКУ</p>
              <p className='footer__contacts-item'>sulavko@gmail.com</p>
              <p className='footer__contacts-item'>https://vk.com/sulavko</p>
              <p className='footer__contacts-item'>https://telegram/sulavko</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PortfolioPage
