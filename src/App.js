import './App.css';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HomeBanner from './components/HomeBanner';
import Partners from './components/Partners';

function App() {
  return (
    <div className='App'>
      <div className=''>
        <SubNavbar />
        <Navbar />
        <HomeBanner />
        <Partners />
      </div>
    </div>
  );
}

export default App;
