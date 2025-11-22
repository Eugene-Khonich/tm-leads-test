import './App.module.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Numbers from '../Numbers/Numbers';
import Deals from '../Deals/Deals';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Numbers />
      <Deals />
      <About />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
