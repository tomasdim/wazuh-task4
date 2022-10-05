import './App.css';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import HomeBanner from './components/HomeBanner';
import Partners from './components/Partners';
import EndPoints from './components/EndPoints';
import Active from './components/Active';
import Facts from './components/Facts';
import Customers from './components/Customers';
import Footer from './components/Footer';

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
        <Customers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
