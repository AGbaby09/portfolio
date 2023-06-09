import './App.css';
import About from './components/forDesktop/company/Company';
import Portfolio from './components/forDesktop/port/Portfolio';
import Landing from 'C:/Users/HP/Desktop/react/portfolio-project/portfolio/src/components/forDesktop/about/Landing.js';
import Thanks from 'C:/Users/HP/Desktop/react/portfolio-project/portfolio/src/components/forDesktop/thanks/Thanks.js';
import Contact from 'C:/Users/HP/Desktop/react/portfolio-project/portfolio/src/components/forDesktop/contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Portfolio />
      <Thanks />
      <Contact />
    </div>
  );
}

export default App;
