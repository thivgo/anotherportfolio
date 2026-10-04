import { useLanguage } from './i18n';
import { AzulejoDefs } from './components/Azulejo';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { StackSection } from './components/StackSection';
import { Contact } from './components/Contact';

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip" href="#conteudo">
        {t.ui.skip}
      </a>
      <AzulejoDefs />
      <Nav />
      <Hero />
      <main id="conteudo">
        <About />
        <Projects />
        <Experience />
        <StackSection />
        <Contact />
      </main>
    </>
  );
}
