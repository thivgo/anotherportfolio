import { useLanguage } from './i18n';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Reel } from './components/Reel';
import { Work } from './components/Work';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip" href="#conteudo">
        {t.ui.skip}
      </a>
      <Nav />
      <Hero />
      <main id="conteudo">
        <Reel />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
