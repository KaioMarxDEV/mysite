import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import styles from './leftMenu.module.css';

export function LeftMenu() {
  return (
    <div className={styles.leftmenu}>
      <div className={styles.profile}>
        <img src="http://github.com/kaiomarxdev.png" alt="Kaio Marx picture" />
        <strong>Kaio Marx</strong>
        <span>Front End Developer</span>

        <div className={styles.socialwrapper}>
          <a href="#">
            <GithubLogo size={24} />
          </a>
          <a href="#">
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}