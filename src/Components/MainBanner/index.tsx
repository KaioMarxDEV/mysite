import styles from './mainbanner.module.css';

export function MainBanner() {
  return (
    <div className={styles.mainbanner}>
      <main>
        <h1 className={styles.greetings}>
          I'm Kaio Marx <br />
          <strong>Front-End</strong> Developer
        </h1>
        <p>adasdfasdfasdfasdfa dfasdfasdfasdfasd adasdfasdfasdfasdfa</p>
        <button>Hire me</button>
      </main>
    </div>
  )
}