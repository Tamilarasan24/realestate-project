import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import './App.css';
import Company from "./Companies/Companies";

// import Slider from "./Slider/Slider";
import Resedent from "./Slider/Slider";
import Value from "./Value/Value";
import Contact from "./Contact/Contact";
function App() {
    return (
    //   <span>subscribe Zainkeepscode</span>
      <div className="App">
        <div>
        <div className="white-gradient"/>
        <Header/>
         <Hero/> 
        </div>
         <Company/>
        <Resedent/>
         <Value/>
        <Contact/>  
      </div>
    );
  }
  
  export default App;