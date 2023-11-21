import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import './App.css'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header/>
      </header>

      <div className="AppBody">
        <Body/>
      </div>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
