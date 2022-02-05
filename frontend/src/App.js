import ContactPage from "./Containers/ContactPage";
import Contact from "./Components/Contact";
import Loader from "./Containers/Loader";
import Main from "./Containers/Main";

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Loader />
      <Main />
      <ContactPage/>
      <Contact />
    </div>
  );
}

export default App;
