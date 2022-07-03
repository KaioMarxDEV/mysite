import { LeftMenu } from "./Components/LeftMenu";
import { Main } from "./Components/Main";
import { NavBar } from "./Components/NavBar";

export function App() {
  return (
    <div className="grid h-screen w-full grid-cols-[305px_1fr_108px] gap-7 scroll-smooth">
      <LeftMenu />
      <Main />
      <NavBar />
    </div>
  );
}
