// import css
import './App.css';
import './assets/style/color.css'
// import components
import Home from './assets/screens/Home';
import Rarity from './assets/screens/Rarity';
import Charity from './assets/screens/Charity';
import Contact from './assets/screens/Contact';
import Nav from './assets/components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Rarity/>
      <Charity/>
      <Contact/>
    </div>
  );
}

export default App;
