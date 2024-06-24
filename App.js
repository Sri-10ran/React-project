
import './App.css';
import FirstHead from './FirstHead';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Choice from './Choice';
import Question from './Question';
import Address from './Address';
import Testinomial from './Testinomial';
import Work from './Work';
import Founder from './Founder';

function App() {
  return (
    <div>
      <FirstHead/>
      <Home/>
      <Work/>
      <Founder/>
      <About/>
      <Services/>
      <Choice/>

      <Question/>

      <Testinomial/>

      <Address/>
    </div>
  );
}

export default App;
