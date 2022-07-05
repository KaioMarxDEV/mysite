import { LeftMenu } from "./Components/LeftMenu";
import { Main } from "./Components/Main";

export function App() {
  return (
    <div className="grid h-screen w-full grid-cols-[305px_1fr_108px] gap-7">
      <LeftMenu />
      <Main />
    </div>
  );
}
