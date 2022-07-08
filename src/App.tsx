import { Contact } from "./Components/Contact";
import { Education } from "./Components/Education";
import { Footer } from "./Components/Footer";
import { Greetings } from "./Components/Greetings";
import { Header } from "./Components/Header";

export function App() {
  return (
    <div className="max-w-7xl mx-auto h-full">
      <section className="scroll-mt-2">
        <Header />
      </section>
      <section className="scroll-mt-8" id="home">
        <Greetings />
      </section>
      <section className="scroll-mt-8" id="education">
        <Education />
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
