import { CheckCircle, GithubLogo, LinkedinLogo } from 'phosphor-react';
import styles from './leftMenu.module.css';

export function LeftMenu() {
  return (
    <div className={styles.leftmenu}>
      <div className={styles.profile}>
        <img src="http://github.com/kaiomarxdev.png" alt="Kaio Marx picture" />
        <strong>Kaio Marx Alves</strong>
        <span>Front End Developer</span>

        <div className={styles.socialwrapper}>
          <a href="https://github.com/KaioMarxDEV" target='_blank'>
            <GithubLogo size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kaiomarxdev/" target='_blank'>
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.about}>
        <div>
          <span>Age: </span>
          <p>20</p>
        </div>
        <div>
          <span>Remote:</span>
          <p className={styles.avaiable}>Avaiable</p>
        </div>
        <div>
          <span>Full Time: </span>
          <p className={styles.avaiable}>Avaiable</p>
        </div>
        <div>
          <span>Address: </span>
          <p>Brazil</p>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.languages}>
        <div>
          <span>English</span>
          <div className={styles.languagesSeparator}/>
          <CheckCircle size={24} />
        </div>
        <div>
          <span>Portuguese</span>
          <div className={styles.languagesSeparator}/>
          <CheckCircle size={32} />
        </div>
      </div>

      <div className={styles.separator} />
    </div>
  )
}