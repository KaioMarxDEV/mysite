import styles from './app.module.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainBanner } from './Components/MainBanner';
import './global.css';


export function App() {
  return (
    <div className={styles.homepage}>
      <LeftMenu />
      <MainBanner />
      <nav>nav bar looser</nav>
    </div>
  )
}
