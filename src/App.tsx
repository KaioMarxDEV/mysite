import { Contact } from "./Components/Contact";
import { Education } from "./Components/Education";
import { Footer } from "./Components/Footer";
import { Greetings } from "./Components/Greetings";
import { Header } from "./Components/Header";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";

export function App() {
  return (
    <div className="max-w-5xl my-0 mx-auto h-screen">
      <section className="scroll-mt-2">
        <Header />
      </section>
      <section className="scroll-mt-8" id="home">
        <Greetings />
      </section>
      <div className="mt-56 flex flex-row items-center justify-between rounded-lg drop-shadow-xl">
        <div className="h-2 w-1/3 bg-gray-500 rounded-sm" />
        <h3 className="w-full text-center font-calis text-5xl text-indigo-800">
          "Do what you LOVE<br />
          and love what you do"
        </h3>
        <div className="h-2 w-1/3 bg-gray-500 rounded-sm" />
      </div>
      <section className="scroll-mt-8" id="skills">
        <Skills />
      </section>
      <div className="flex flex-col items-center drop-shadow-xl">
        <h3 className="my-10 text-center mx-auto font-calis text-5xl text-indigo-800">
          "Who has a mission, a why, <br />
          overcomes any how."
        </h3>
      </div>
      <section className="scroll-mt-8" id="education">
        <Education />
      </section>
      <div className="flex flex-col items-center rounded-lg drop-shadow-xl">
        <h3 className="my-10 text-center mx-auto font-calis text-5xl text-indigo-800">
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
