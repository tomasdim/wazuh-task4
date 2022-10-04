import './App.css';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HomeBanner from './components/HomeBanner';
import Partners from './components/Partners';
import EndPoints from './components/EndPoints';
import Active from './components/Active';
import Facts from './components/Facts';

function App() {
  return (
    <div className='App'>
      <div className=''>
        <SubNavbar />
        <Navbar />
        <HomeBanner />
        <Partners />
        <EndPoints />
        <Active />
        <Facts />
      </div>
    </div>
  );
}

export default App;
