import css from './App.module.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Numbers from '../Numbers/Numbers';
import Deals from '../Deals/Deals';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Tariffs from '../Tariffs/Tariffs';

const App = () => {
  return (
    <div className={css.main}>
      <Header />
      <Hero />
      <Numbers />
      <Deals />
      <About />
      <Tariffs />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
