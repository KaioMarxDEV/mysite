import { Contact } from "./Components/Contact";
import { Cultural } from "./Components/Cultural";
import { Footer } from "./Components/Footer";
import { Greetings } from "./Components/Greetings";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Values } from "./Components/Values";

export function App() {
  return (
    <div className="max-w-5xl my-0 mx-auto h-screen">
      <section className="scroll-mt-2">
        <Header />
      </section>
      <section className="scroll-mt-8" id="home">
        <Greetings />
      </section>
      <div className="mt-56 flex flex-row items-center justify-between drop-shadow-xl">
        <div className="h-1 w-1/3 bg-gray-500 rounded-sm" />
        <h3 className="w-full text-center font-calis text-5xl text-my-blue/75">
          "Do what you LOVE<br />
          and love what you do"
        </h3>
        <div className="h-1 w-1/3 bg-gray-500 rounded-sm" />
      </div>
      <section className="scroll-mt-8" id="skills">
        <Skills />
      </section>
      <div className="flex flex-row items-center justify-between drop-shadow-xl">
        <h3 className="w-full my-10 text-center mx-auto font-calis text-5xl text-my-blue/75">
          "Work is not about being a star,<br /> 
          it is about being a team player."
        </h3>
      </div>
      <section className="scroll-mt-8" id="values">
        <Values />
      </section>
      <section className="scroll-mt-8" id="cultural">
        <Cultural />
      </section>
      <div className="flex flex-col items-center rounded-lg drop-shadow-xl">
        <h3 className="my-10 text-center mx-auto font-calis text-5xl text-my-blue/75">
          "You cannot build a reputation on what<br />
          you are going to do."
        </h3>
      </div>
      <section className="scroll-mt-8" id="projects">
        <Projects />
      </section>
      <section className="scroll-mt-8" id="hello">
        <Contact />
      </section>
      <section className="scroll-mt-8" id="socials">
        <Footer />
      </section>
    </div>
  );
}
