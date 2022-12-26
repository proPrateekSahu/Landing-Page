
import './App.css';
import Section2 from './Components/Section2';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
function App() {
  return (
    <>
      <Header />
      {/* The above completes the section  */}
      <Section2 />
      {/* <Footer /> */}
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  );
}

export default App;
