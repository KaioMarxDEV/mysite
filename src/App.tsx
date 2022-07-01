import { LeftMenu } from './Components/LeftMenu';
import { MainBanner } from './Components/MainBanner';

export function App() {
  return (
    <div className='w-full grid grid-cols-[305px_1fr_108px]'>
      <LeftMenu />
      <MainBanner />
      <nav>nav bar looser</nav>
    </div>
  )
}
