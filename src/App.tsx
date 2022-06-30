import styles from './app.module.css';
import { LeftMenu } from './Components/LeftMenu';
import './global.css';


export function App() {
  return (
    <div className={styles.homepage}>
      <LeftMenu />

    </div>
  )
}
